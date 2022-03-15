import { DiscountCode } from './../../../models/discountCode';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DiscountsService } from 'src/app/sevices/discounts.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-discout-code',
  templateUrl: './admin-discout-code.component.html',
  styleUrls: ['./admin-discout-code.component.scss']
})
export class AdminDiscoutCodeComponent implements OnInit {
  codes;
  code: DiscountCode;
  title = "Admin - Discounts";
  disabledBtn: HTMLButtonElement;
  todayDate: Date;
  showInactive: Boolean;
  addValidUntil: NgbDateStruct;
  editValidUntil: NgbDateStruct;
  removeValidUntill: NgbDateStruct;

  addForm: FormGroup;
  addFormShown: Boolean;

  editForm: FormGroup;
  editFormShown: Boolean;

  removeForm: FormGroup;
  removeFormShown: Boolean;

  constructor(private discountsService: DiscountsService,
    private fb: FormBuilder) {
    this.showInactive = false;
    this.disabledBtn = null;
    this.OnReloadClick();
  }

  OnReloadClick() {
    if (this.showInactive) {
      this.discountsService
        .getAll()
        .subscribe(result => {
          this.codes = result;
          this.codes.forEach(c => {
            console.log(JSON.stringify(c));
          });
        });
    } else {
      this.discountsService
        .getActive()
        .subscribe(result => {
          this.codes = result;
          this.codes.forEach(c => {
            console.log(JSON.stringify(c));
          });
        });
    }
    if (this.disabledBtn != null) {
      console.log('Disabled: ' + this.disabledBtn.id);
      this.disabledBtn.disabled = false;
      this.resetAllForms();
      this.hideAllForms();
    }
    this.ngOnInit();
  }

  hideAllForms() {
    this.addFormShown = false;
    this.editFormShown = false;
    this.removeFormShown = false;
  }

  resetAllForms() {
    this.addForm.reset();
    this.editForm.reset();
    this.removeForm.reset();
  }

  ngOnInit(): void {
    this.initForms();
    document.title = this.title;
    this.todayDate = new Date();
    this.addFormShown = false;
    this.editFormShown = false;
    this.removeFormShown = false;
  }

  isExpired(date: Date): Boolean {
    // use YYYY, MM, DD
    let today = new Date();
    var g1 = new Date(today.getFullYear(), today.getMonth(), today.getDay());
    date = new Date(date); 
    var g2 = new Date(date.getFullYear(), date.getMonth(), date.getDay());
    if (g1.getTime() <= g2.getTime()) {
      return true;
    } else if (g1.getTime() > g2.getTime()) {
      return false;
    } else {
      return false;
    }
  }

  OnShowActiveChange(event: Event): void {
    this.showInactive = !this.showInactive;
    this.OnReloadClick();
  }

  initForms() {
    this.addForm = this.fb.group({
      addName: new FormControl('', Validators.required),
      addPercentage: new FormControl('', Validators.required),
      addValidUntil: new FormControl('', Validators.required)
    });
    this.editForm = this.fb.group({
      editId: new FormControl('', Validators.required),
      editName: new FormControl('', Validators.required),
      editPercentage: new FormControl('', Validators.required),
      editValidUntil: new FormControl('', Validators.required),
      editActive: new FormControl('', Validators.required)
    });
    this.removeForm = this.fb.group({
      removeId: new FormControl({ value: '', disabled: true }, Validators.required),
      removeName: new FormControl({ value: '', disabled: true }, Validators.required),
      removePercentage: new FormControl({ value: '', disabled: true }, Validators.required),
      removeValidUntil: new FormControl({ value: '', disabled: true }, Validators.required),
      removeActive: new FormControl({ value: '', disabled: true }, Validators.required)
    });
  }

  addBtn(event: Event): void {
    this.hideAllForms();
    this.resetAllForms();

    if (this.disabledBtn != null) {
      this.disabledBtn.disabled = false;
    }
    this.disabledBtn = event.target as HTMLButtonElement;
    this.disabledBtn.disabled = true;
    this.addFormShown = true;
  }

  OnAddCancel(): void {
    this.resetAllForms();
    this.hideAllForms();
    this.disabledBtn.disabled = false;
  }

  OnAddConfirm(): void {
    this.disabledBtn.disabled = false;
    let code = new DiscountCode();
    code.id = 0;
    code.popustKod = this.addForm.get('addName').value;
    code.popustUPostocima = this.addForm.get('addPercentage').value;
    code.vrijediDo = this.addForm.get('addValidUntil').value;
    code.izbrisano = false;
    if (code.popustKod.length <= 3
      || code.popustUPostocima < 0
      || code.popustUPostocima > 100) {
      return;
    }
    console.log(JSON.stringify(code));
    this.discountsService
      .add(code)
      .subscribe(result => {
        this.OnReloadClick();
      });
    this.hideAllForms();
    this.resetAllForms();
  }

  isDateValid(date): Boolean {
    console.log('Is date valid? \n' + (date instanceof Date && !isNaN(date.valueOf())));
    return date instanceof Date && !isNaN(date.valueOf());
  }

  editBtn(event: Event, id: Number): void {
    if (this.disabledBtn != null) {
      this.disabledBtn.disabled = false;
    }
    this.disabledBtn = event.target as HTMLButtonElement;
    this.disabledBtn.disabled = true;
    this.hideAllForms();
    this.resetAllForms();
    this.fillEditForm(id);
  }

  fillEditForm(id: Number): void {
    this.discountsService
      .getById(id)
      .subscribe(result => {
        this.code = Object.assign(new DiscountCode, result);
        this.code.popustUPostocima = result["popustUpostocima"];
        let parsedDate = this.code.vrijediDo.toString().substring(0, 10);
        this.editForm = this.fb.group({
          editId: new FormControl({ value: this.code.id, disabled: true }, Validators.required),
          editName: new FormControl(this.code.popustKod, Validators.required),
          editPercentage: new FormControl(this.code.popustUPostocima, Validators.required),
          editValidUntil: new FormControl(parsedDate, Validators.required),
          editActive: new FormControl(this.code.izbrisano)
        },
          error => { console.log(error) });
      });
    this.editFormShown = true;
  }

  OnEditConfirm(): void {
    this.disabledBtn.disabled = false;
    let code = new DiscountCode();
    code.id = this.editForm.get('editId').value;
    code.popustKod = this.editForm.get('editName').value;
    code.popustUPostocima = this.editForm.get('editPercentage').value;
    code.vrijediDo = this.editForm.get('editValidUntil').value;
    code.izbrisano = this.editForm.get('editActive').value;
    this.discountsService
      .edit(code)
      .subscribe(() => {
        this.OnReloadClick();
      });
    this.hideAllForms();
    this.resetAllForms();
  }

  OnEditCancel(): void {
    this.disabledBtn.disabled = false;
    this.resetAllForms();
    this.hideAllForms();
  }


  //Remove functions
  removeBtn(event: Event, id: number): void {
    if (this.disabledBtn != null) {
      this.disabledBtn.disabled = false;
    }
    this.resetAllForms();
    this.hideAllForms();
    this.fillRemoveForm(id);
    this.removeFormShown = true;
    this.disabledBtn = event.target as HTMLButtonElement;
    this.disabledBtn.disabled = true;
  }

  fillRemoveForm(id: Number) {
    this.discountsService
      .getById(id)
      .subscribe(result => {
        this.code = Object.assign(new DiscountCode, result);
        console.log(JSON.stringify(this.code));
        let id = this.code.id;
        let popustkod = this.code.popustKod;
        let popustUPostocima = result["popustUpostocima"];
        let parsedDate = this.code.vrijediDo.toString().substring(0, 10);
        let active = this.code.izbrisano;

        this.removeForm = this.fb.group({
          removeId: new FormControl({ value: id, disabled: true }, Validators.required),
          removeName: new FormControl({ value: popustkod, disabled: true }, Validators.required),
          removePercentage: new FormControl({ value: popustUPostocima, disabled: true }, Validators.required),
          removeValidUntil: new FormControl({ value: parsedDate, disabled: true }, Validators.required),
          removeActive: new FormControl({ value: active, disabled: true })
        });
      });
  }

  OnRemoveCancel(): void {
    this.disabledBtn.disabled = false;
    this.hideAllForms();
    this.resetAllForms();
  }

  OnRemoveConfirm(): void {
    this.disabledBtn.disabled = false;
    this.discountsService
      .delete(this.code.id)
      .subscribe(result => {
        this.resetAllForms();
        this.hideAllForms();
        this.OnReloadClick();
      });
  }
}
