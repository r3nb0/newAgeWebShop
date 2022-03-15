import { BuyersService } from './../../../sevices/buyers.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Buyer } from 'src/app/models/buyer';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-admin-buyers',
  templateUrl: './admin-buyers.component.html',
  styleUrls: ['./admin-buyers.component.scss']
})
export class AdminBuyersComponent implements OnInit {
  buyers;
  buyer: Buyer;
  title = "Admin - Buyers";
  disabledBtn;
  showInactive: Boolean;

  addBuyerForm: FormGroup;
  addBuyerFormShown: Boolean;

  editBuyerForm: FormGroup;
  editBuyerFormShown: Boolean;

  removeBuyerForm: FormGroup;
  removeBuyerFormShown: Boolean;

  constructor(
    private buyersService: BuyersService,
    private fb: FormBuilder) {
    this.showInactive = false;
    this.OnReloadClick();
  }

  ngOnInit(): void {
    this.initForms();
    document.title = this.title;
    this.addBuyerFormShown = false;
    this.editBuyerFormShown = false;
    this.removeBuyerFormShown = false;
  }

  OnShowActiveChange(event: Event): void {
    this.showInactive = !this.showInactive;
    this.OnReloadClick();
  }

  OnReloadClick() {
    if (this.showInactive) {
      this.buyersService
        .getAllBuyers()
        .subscribe(result => {
          this.buyers = result;
        });
    } else {
      this.buyersService
        .getActiveBuyers()
        .subscribe(result => {
          this.buyers = result;
        });
    }
    if (this.disabledBtn != null) {
      this.disabledBtn.disabled = false;
      this.resetAllForms();
      this.hideAllForms();
    }
    this.ngOnInit();
  }
  
  resetAllForms(): void {
    this.addBuyerForm.reset();
    this.editBuyerForm.reset();
    this.removeBuyerForm.reset();
  }

  hideAllForms(): void {
    this.addBuyerFormShown = false;
    this.editBuyerFormShown = false;
    this.removeBuyerFormShown = false;
  }

  //Add functions
  addBuyerBtn(event: Event): void {
    this.resetAllForms();
    this.hideAllForms();
    this.addBuyerFormShown = true;
    this.disabledBtn = event.target as HTMLButtonElement;
    this.disabledBtn.disabled = true;
  }
  OnAddBuyerCancel(): void {
    this.resetAllForms();
    this.hideAllForms();
    this.disabledBtn.disabled = false;
  }
  OnAddBuyerConfirm(): void {
    this.addBuyerFormShown = false;
    this.disabledBtn.disabled = false;
    let buy = new Buyer();
    buy.ime = this.addBuyerForm.get('addName').value;
    buy.prezime = this.addBuyerForm.get('addSurname').value;
    buy.kontakt = this.addBuyerForm.get('addContact').value;
    buy.email = this.addBuyerForm.get('addEmail').value;
    buy.ulica = this.addBuyerForm.get('addStreet').value;
    buy.kucniBroj = this.addBuyerForm.get('addHouseNumber').value;
    buy.grad = this.addBuyerForm.get('addCity').value;
    buy.postanskiBroj = this.addBuyerForm.get('addPostNumber').value;
    this.buyersService
      .addBuyer(buy)
      .subscribe(result => {
        alert(JSON.stringify(result));
        this.OnReloadClick();
      });
  }

  //Edit functions
  editBuyerBtn(event: Event, id: Number): void {
    this.resetAllForms();
    this.hideAllForms();
    this.fillEditBuyerForm(id);
  }

  fillEditBuyerForm(id: Number): void {
    this.buyersService
      .getBuyerById(id)
      .subscribe(result => {
        this.buyer = Object.assign(new Buyer, result);

        let id = this.buyer.id;
        let name = this.buyer.ime;
        let surname = this.buyer.prezime;
        let contact = this.buyer.kontakt;
        let email = this.buyer.email;
        let street = this.buyer.ulica;
        let houseNumber = this.buyer.kucniBroj;
        let city = this.buyer.grad;
        let postNumber = this.buyer.postanskiBroj;
        let active = this.buyer.izbrisano;

        this.editBuyerForm = this.fb.group({
          editId: new FormControl({ value: id, disabled: true }, Validators.required),
          editName: new FormControl(name, Validators.required),
          editSurname: new FormControl(surname, Validators.required),
          editContact: new FormControl(contact, Validators.required),
          editEmail: new FormControl(email, Validators.required),
          editStreet: new FormControl(street, Validators.required),
          editHouseNumber: new FormControl(houseNumber, Validators.required),
          editCity: new FormControl(city, Validators.required),
          editPostNumber: new FormControl(postNumber, Validators.required),
          editActive: new FormControl(active)
        });
        this.editBuyerFormShown = true;
        this.disabledBtn = event.target as HTMLButtonElement;
        this.disabledBtn.disabled = true;
      });
  }

  OnEditBuyerConfirm(): void {
    let buy = new Buyer();
    buy.id = this.editBuyerForm.get('editId').value;
    buy.ime = this.editBuyerForm.get('editName').value;
    buy.prezime = this.editBuyerForm.get('editSurname').value;
    buy.kontakt = this.editBuyerForm.get('editContact').value;
    buy.email = this.editBuyerForm.get('editEmail').value;
    buy.ulica = this.editBuyerForm.get('editStreet').value;
    buy.kucniBroj = this.editBuyerForm.get('editHouseNumber').value;
    buy.grad = this.editBuyerForm.get('editCity').value;
    buy.postanskiBroj = this.editBuyerForm.get('editPostNumber').value;
    this.buyersService
      .editBuyer(buy)
      .subscribe(result => {
        //alert(Object.assign(new Buyer(), result));
        this.OnReloadClick();
      });
  }
  
  OnEditBuyerCancel(): void {
    this.disabledBtn.disabled = false;
    this.resetAllForms();
    this.hideAllForms();
  }

  //Remove functions
  removeBuyerBtn(event: Event, id: number): void {
    this.resetAllForms();
    this.hideAllForms();
    this.fillRemoveBuyerForm(id);
  }

  fillRemoveBuyerForm(id: Number) {
    this.buyersService
      .getBuyerById(id)
      .subscribe(result => {
        this.buyer = Object.assign(new Buyer, result);

        let id = this.buyer.id;
        let name = this.buyer.ime;
        let surname = this.buyer.prezime;
        let contact = this.buyer.kontakt;
        let email = this.buyer.email;
        let street = this.buyer.ulica;
        let houseNumber = this.buyer.kucniBroj;
        let city = this.buyer.grad;
        let postNumber = this.buyer.postanskiBroj;
        let active = this.buyer.izbrisano;

        this.removeBuyerForm = this.fb.group({
          removeId: new FormControl({ value: id, disabled: true }, Validators.required),
          removeName: new FormControl({value: name, disabled: true }, Validators.required),
          removeSurname: new FormControl({ value: surname, disabled: true }, Validators.required),
          removeContact: new FormControl({ value: contact, disabled: true }, Validators.required),
          removeEmail: new FormControl({ value: email, disabled: true }, Validators.required),
          removeStreet: new FormControl({ value: street, disabled: true }, Validators.required),
          removeHouseNumber: new FormControl({ value: houseNumber, disabled: true }, Validators.required),
          removeCity: new FormControl({ value: city, disabled: true }, Validators.required),
          removePostNumber: new FormControl({ value: postNumber, disabled: true }, Validators.required),
          removeActive: new FormControl({ value: active, disabled: true })
        });

        this.removeBuyerFormShown = true;
        this.disabledBtn = event.target as HTMLButtonElement;
        this.disabledBtn.disabled = true;
      });
  }

  OnRemoveBuyerCancel(): void {
    this.disabledBtn.disabled = false;
    this.resetAllForms();
    this.hideAllForms();
  }

  OnRemoveBuyerConfirm(): void {
    this.buyersService
      .deleteBuyer(this.buyer.id)
      .subscribe(result => {
        this.resetAllForms();
        this.hideAllForms();
        this.OnReloadClick();
      });
  }

  initForms() {
    this.addBuyerForm = this.fb.group({
      addName: new FormControl('', Validators.required),
      addSurname: new FormControl('', Validators.required),
      addContact: new FormControl('', Validators.required),
      addEmail: new FormControl('', Validators.required),
      addStreet: new FormControl('', Validators.required),
      addHouseNumber: new FormControl('', Validators.required),
      addCity: new FormControl('', Validators.required),
      addPostNumber: new FormControl('', Validators.required)
    });
    this.editBuyerForm = this.fb.group({
      editName: new FormControl('', Validators.required),
      editSurname: new FormControl('', Validators.required),
      editContact: new FormControl('', Validators.required),
      editEmail: new FormControl('', Validators.required),
      editStreet: new FormControl('', Validators.required),
      editHouseNumber: new FormControl('', Validators.required),
      editCity: new FormControl('', Validators.required),
      editPostNumber: new FormControl('', Validators.required),
      editActive: new FormControl('')
    });
    this.removeBuyerForm = this.fb.group({
      removeName: new FormControl('', Validators.required),
      removeSurname: new FormControl('', Validators.required),
      removeContact: new FormControl('', Validators.required),
      removeEmail: new FormControl('', Validators.required),
      removeStreet: new FormControl('', Validators.required),
      removeHouseNumber: new FormControl('', Validators.required),
      removeCity: new FormControl('', Validators.required),
      removePostNumber: new FormControl('', Validators.required),
      removeActive: new FormControl('')
    });

  }

}
