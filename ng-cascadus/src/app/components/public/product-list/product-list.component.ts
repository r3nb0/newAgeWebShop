import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/sevices/products.service';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoriesService } from 'src/app/sevices/categories.service';
import { getLocaleDateFormat } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  categoriesLoading: Boolean;
  productsLoading: Boolean;
  clientPrice: number;
  clientSelectedCategory: number;
  products: Array<Product>;
  categories: Array<Category>;

  constructor(private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Cascadus - Proizvodi");
    this.clientPrice = 10000;
    this.clientSelectedCategory = -1;
    this.categories = [];
    this.products = [];
    this.categories = new Array<Category>();
    this.products = new Array<Product>();
    this.categoriesLoading = true;
    this.productsLoading = true;
    this.getData();
  }
  getData(): void {
    this.productsService.getActive()
      .subscribe(result => {
        result.forEach(r => {
          let pro = new Product();
          Object.assign(pro, r);
          this.products.push(pro);
        });
        this.productsLoading = false;
        //console.table(this.products);
      });

    this.categoriesService.getActiveCategories()
      .subscribe(result => {
        result.forEach(r => {
          let cat = new Category();
          Object.assign(cat, r);
          this.categories.push(cat);
        });
        this.categoriesLoading = false;
      });
  }

  onPriceSliderChange(event: Event): void {
    var slider = (event.target) as HTMLInputElement;
    this.clientPrice = Number.parseInt(slider.value);
  }
  onCategoryChanged(event: Event): void {
    var rb = (event.target) as HTMLInputElement;
    this.clientSelectedCategory = Number.parseInt(rb.value);
  }
  isInPriceRange(price: number): boolean {
    if (price <= this.clientPrice) {
      return true;
    }
    return false;
  }
  isCategory(productCategory: number): boolean {
    if (this.clientSelectedCategory == -1) {
      return true;
    } else if (productCategory == this.clientSelectedCategory) {
      return true;
    } else {
    return false;
    }
  }
  sortProducts(event): void {
    var type = (event.target as HTMLButtonElement).id;
    if (type == "nameaz") {
      this.products.sort((one, two) => (one.naziv.toLowerCase() < two.naziv.toLowerCase() ? -1 : 1));
    } else if (type == "nameza") {
      this.products.sort((one, two) => (one.naziv.toLowerCase() > two.naziv.toLowerCase() ? -1 : 1));
    } else if (type == "def") {
      this.products.sort((a, b) => a.id > b.id ? -1 : 1);
    } else if (type == "lth") {
      this.products.sort((a, b) => a.cijena > b.cijena ? -1 : 1);
    } else if (type == "htl") {
      this.products.sort((a, b) => a.cijena < b.cijena ? -1 : 1);
    }
  }

  showFilterModal(state: boolean) {
    if (state) {
      document.getElementById('filterModal').classList.remove('hide');
      document.getElementById('filterModal').classList.add('show');
    } else {
      document.getElementById('filterModal').classList.remove('show');
      document.getElementById('filterModal').classList.add('hide');
      document.getElementsByClassName('modal-backdrop')[0].remove();
    }
  }

}
