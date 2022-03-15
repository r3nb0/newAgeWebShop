import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { DiscountsService } from 'src/app/sevices/discounts.service';
import { ProductsService } from 'src/app/sevices/products.service';
import { CategoriesService } from 'src/app/sevices/categories.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss'],
})
export class AdminProductComponent implements OnInit {
  products;
  product: Product;
  categories;
  selectCategoryId: Number;
  title = 'Admin - Products';
  disabledBtn: HTMLButtonElement;
  showInactive: Boolean;

  addForm: FormGroup;
  addFormShown: Boolean;

  editForm: FormGroup;
  editFormShown: Boolean;

  removeForm: FormGroup;
  removeFormShown: Boolean;
  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private discountsService: DiscountsService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.showInactive = false;
    this.disabledBtn = null;
    this.OnReloadClick();
  }

  OnReloadClick() {
    this.categoriesService.getActiveCategories().subscribe((result) => {
      this.categories = result;
    });
    if (this.showInactive) {
      this.productsService.getAll().subscribe((result) => {
        this.products = result;
      });
    } else {
      this.productsService.getActive().subscribe((result) => {
        this.products = result;
      });
    }
    if (this.disabledBtn != null) {
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
    this.addFormShown = false;
    this.editFormShown = false;
    this.removeFormShown = false;
  }

  initForms() {
    this.addForm = this.fb.group({
      addName: new FormControl('', Validators.required),
      addCategoryId: new FormControl('', Validators.required),
      addHtml: new FormControl('', Validators.required),
      addCharacteristics: new FormControl('', Validators.required),
      addDescription: new FormControl('', Validators.required),
      addPrice: new FormControl('', Validators.required),
      addTimesSold: new FormControl('', Validators.required),
      addThumbnail: new FormControl(''),
    });
    this.editForm = this.fb.group({
      editId: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      editName: new FormControl({ value: '' }, Validators.required),
      editCategoryId: new FormControl({ value: '' }, Validators.required),
      editHtml: new FormControl({ value: '' }, Validators.required),
      editCharacteristics: new FormControl({ value: '' }, Validators.required),
      editDescription: new FormControl({ value: '' }, Validators.required),
      editPrice: new FormControl({ value: '' }, Validators.required),
      editTimesSold: new FormControl({ value: '' }, Validators.required),
      editActive: new FormControl({ value: '' }, Validators.required),
      editThumbnail: new FormControl(''),
    });
    this.removeForm = this.fb.group({
      removeId: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      removeName: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      removeCategoryId: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      removeHtml: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      removeCharacteristics: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      removeDescription: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      removePrice: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      removeTimesSold: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      removeActive: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      removeThumbnail: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
    });
  }

  OnShowActiveChange(event: Event): void {
    this.showInactive = !this.showInactive;
    this.OnReloadClick();
  }

  //Add functions

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
    let pro = new Product();
    pro.naziv = this.addForm.get('addName').value;
    pro.kategorijaId = Number.parseInt(this.addForm.get('addCategoryId').value);
    pro.putanja = this.addForm.get('addHtml').value;
    pro.karakteristike = this.addForm.get('addCharacteristics').value;
    pro.kolicina = this.addForm.get('addTimesSold').value;
    pro.opis = this.addForm.get('addDescription').value;
    pro.cijena = this.addForm.get('addPrice').value;
    pro.thumbnail = this.addForm.get('addThumbnail').value;
    pro.izbrisano = false;

    // console.log(JSON.stringify(pro));
    this.productsService.add(pro).subscribe(
      (result) => {
        //alert(JSON.stringify(result));
        setTimeout(() => {
          this.toastr.info('Akcija uspješna');
        }, 500);
        this.OnReloadClick();
      },
      (error) => {
        setTimeout(() => {
          this.toastr.info(JSON.stringify(error), 'Greška!');
        }, 1500);
      }
    );
    this.hideAllForms();
    this.resetAllForms();
  }

  //Edit functions

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
    this.productsService.getById(id).subscribe((result) => {
      this.product = Object.assign(new Product(), result);
      this.editForm = this.fb.group(
        {
          editId: new FormControl(
            { value: this.product.id, disabled: true },
            Validators.required
          ),
          editName: new FormControl(this.product.naziv, Validators.required),
          editCategoryId: new FormControl(
            this.product.kategorijaId,
            Validators.required
          ),
          editHtml: new FormControl(this.product.putanja, Validators.required),
          editCharacteristics: new FormControl(
            this.product.karakteristike,
            Validators.required
          ),
          editDescription: new FormControl(
            this.product.opis,
            Validators.required
          ),
          editPrice: new FormControl(this.product.cijena, Validators.required),
          editTimesSold: new FormControl(
            this.product.kolicina,
            Validators.required
          ),
          editActive: new FormControl(
            this.product.izbrisano,
            Validators.required
          ),
          editThumbnail: new FormControl(this.product.thumbnail),
        },
        (error) => {
          setTimeout(() => {
            this.toastr.info(JSON.stringify(error), 'Greška!');
          }, 1500);
        }
      );
    });
    this.editFormShown = true;
  }

  OnEditConfirm(): void {
    this.disabledBtn.disabled = false;
    this.product.id = this.editForm.get('editId').value;
    this.product.naziv = this.editForm.get('editName').value;
    this.product.kategorijaId = Number.parseInt(
      this.editForm.get('editCategoryId').value
    );
    this.product.putanja = this.editForm.get('editHtml').value;
    this.product.karakteristike = this.editForm.get(
      'editCharacteristics'
    ).value;
    this.product.kolicina = this.editForm.get('editTimesSold').value;
    this.product.opis = this.editForm.get('editDescription').value;
    this.product.cijena = this.editForm.get('editPrice').value;
    this.product.izbrisano = this.editForm.get('editActive').value;
    this.product.thumbnail = this.editForm.get('editThumbnail').value;

    console.log(this.product);
    this.productsService.edit(this.product).subscribe(
      (result) => {
        setTimeout(() => {
          this.toastr.info('Akcija uspješna');
        }, 500);
        this.OnReloadClick();
      },
      (error) => {
        setTimeout(() => {
          this.toastr.info(JSON.stringify(error), 'Greška!');
        }, 1500);
      }
    );
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
    this.productsService.getById(id).subscribe((result) => {
      this.product = Object.assign(new Product(), result);

      this.removeForm = this.fb.group({
        removeId: new FormControl(
          { value: this.product.id, disabled: true },
          Validators.required
        ),
        removeName: new FormControl(
          { value: this.product.naziv, disabled: true },
          Validators.required
        ),
        removeCategoryId: new FormControl(
          { value: this.product.kategorijaId, disabled: true },
          Validators.required
        ),
        removeHtml: new FormControl(
          { value: this.product.putanja, disabled: true },
          Validators.required
        ),
        removeCharacteristics: new FormControl(
          { value: this.product.karakteristike, disabled: true },
          Validators.required
        ),
        removeDescription: new FormControl(
          { value: this.product.opis, disabled: true },
          Validators.required
        ),
        removePrice: new FormControl(
          { value: this.product.cijena, disabled: true },
          Validators.required
        ),
        removeTimesSold: new FormControl(
          { value: this.product.kolicina, disabled: true },
          Validators.required
        ),
        removeThumbnail: new FormControl(
          { value: this.product.thumbnail, disabled: true },
          Validators.required
        ),
        removeActive: new FormControl(
          { value: this.product.izbrisano, disabled: true },
          Validators.required
        ),
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
    this.productsService.delete(this.product.id).subscribe((result) => {
      this.resetAllForms();
      this.hideAllForms();
      setTimeout(() => {
        this.toastr.info('Akcija uspješna');
      }, 500);
      this.OnReloadClick();
    });
  }
}
