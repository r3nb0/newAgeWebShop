import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/sevices/categories.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit {

  addCategoryForm: FormGroup;
  addCategoryFormShown: Boolean;

  editCategoryForm: FormGroup;
  editCategoryFormShown: Boolean;

  removeCategoryForm: FormGroup;
  removeCategoryFormShown: Boolean;

  categories;
  category: Category;
  title = "Admin - Categories";
  disabledBtn;
  showInactive: Boolean;

  constructor(private categoriesService: CategoriesService,
    private formBuilder: FormBuilder) {
    this.showInactive = false;
    this.OnReloadClick();
  }

  ngOnInit(): void {
    this.initForms();
    document.title = this.title;
    this.addCategoryFormShown = false;
    this.editCategoryFormShown = false;
    this.removeCategoryFormShown = false;
  }
  OnShowActiveChange(event: Event): void {
    this.showInactive = !this.showInactive;
    this.OnReloadClick();
  }

  OnReloadClick(): void {
    if (this.showInactive) {
      this.categories = this.categoriesService.getAllCategories();
    } else {
      this.categories = this.categoriesService.getActiveCategories();
    }
    if (this.disabledBtn != null) {
      this.disabledBtn.disabled = false;
      this.resetAllForms();
      this.hideAllForms();
    }
    this.ngOnInit();
  }

  initForms(): void {
    this.addCategoryForm = this.formBuilder.group({
      addName: new FormControl('', Validators.required),
    });

    this.editCategoryForm = this.formBuilder.group({
      editId: new FormControl('', Validators.required),
      editName: new FormControl('', Validators.required),
      editActive: new FormControl('')
    });

    this.removeCategoryForm = this.formBuilder.group({
      removeId: new FormControl('', Validators.required),
      removeName: new FormControl('', Validators.required),
      removeActive: new FormControl('')
    });
  }

  resetAllForms(): void {
    this.addCategoryForm.reset();
    this.removeCategoryForm.reset();
    this.editCategoryForm.reset();
  }

  hideAllForms(): void {
    this.addCategoryFormShown = false;
    this.editCategoryFormShown = false;
    this.removeCategoryFormShown = false;
  }


  // Add function
  addCategoryBtn(event: Event): void {
    //console.log('add category btn clicked');
    this.resetAllForms();
    this.hideAllForms();
    this.addCategoryFormShown = true;
    this.disabledBtn = event.target as HTMLButtonElement;
    this.disabledBtn.disabled = true;
  }

  OnAddCategoryCancel(): void {
    //console.log('adding category canceled');
    this.resetAllForms();
    this.hideAllForms();
    this.disabledBtn.disabled = false;
  }

  OnAddCategoryConfirm(): void {
    //console.log('adding category submitted');
    this.addCategoryFormShown = false;
    this.disabledBtn.disabled = false;

    if (this.addCategoryForm.valid) {
    let cat = new Category();
    cat.Naziv = this.addCategoryForm.get('addName').value

    this.categoriesService
      .addCategory(cat)
      .subscribe(result => {
        //alert(result);
        window.location.reload();
      });
    }

  }

  //Edit function
  editCategoryBtn(event: Event, id: Number) {
    //console.log('add category btn clicked');
    this.resetAllForms();
    this.hideAllForms();
    this.fillEditCategoryForm(id);
  }

  fillEditCategoryForm(id): void {
    this.categoriesService.getCategoryById(id)
      .subscribe(result => {
        this.category = Object.assign(new Category(), result);
        //console.log(this.category);
        let id = this.category['id'];
        let name = this.category['naziv'];
        let active = this.category['izbrisano'];
        this.editCategoryForm = this.formBuilder.group({
          editId: new FormControl({ value: id, disabled: true }, Validators.required),
          editName: new FormControl(name, Validators.required),
          editActive: new FormControl(active)
        });
        this.editCategoryFormShown = true;
        this.disabledBtn = event.target as HTMLButtonElement;
        this.disabledBtn.disabled = true;
      });
  }
  OnEditCategoryConfirm(): void {
    let cat = new Category();
    cat.Id = this.editCategoryForm.get('editId').value;
    cat.Izbrisano = this.editCategoryForm.get('editActive').value;
    cat.Naziv = this.editCategoryForm.get('editName').value;
    this.categoriesService
      .editCategory(cat)
      .subscribe(result => {
        alert(result);
        window.location.reload();
      });

  }
  OnEditCategoryCancel(): void {
    this.disabledBtn.disabled = false;
    this.resetAllForms();
    this.hideAllForms();
  }

  //Remove function
  removeCategoryBtn(event: Event, id: Number) {
    //console.log('add category btn clicked');
    this.resetAllForms();
    this.hideAllForms();
    this.fillRemoveCategoryForm(id);
  }

  OnRemoveCategoryCancel(): void {
    //console.log('removing category canceled');
    this.disabledBtn.disabled = false;
    this.resetAllForms();
    this.hideAllForms();
  }

  OnRemoveCategoryConfirm(): void {
    //console.log('Remove confirmed - id: ' + this.category['id']);
    this.categoriesService
      .deleteCategory(this.category['id'])
      .subscribe(result => {
        this.resetAllForms();
        this.hideAllForms();
        window.location.reload();
      });
  }

  fillRemoveCategoryForm(id): void {
    this.categoriesService.getCategoryById(id)
      .subscribe(result => {
        this.category = Object.assign(new Category(), result);
        //console.log(this.category);
        let id = this.category['id'];
        let name = this.category['naziv'];
        let active = this.category['izbrisano'];
        this.removeCategoryForm = this.formBuilder.group({
          removeId: new FormControl({ value: id, disabled: true }, Validators.required),
          removeName: new FormControl({ value: name, disabled: true }, Validators.required),
          removeActive: new FormControl({ value: active, disabled: true })
        });
        this.removeCategoryFormShown = true;
        this.disabledBtn = event.target as HTMLButtonElement;
        this.disabledBtn.disabled = true;
      });
  }
}