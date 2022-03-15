import { Product } from './../../../models/product';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { ProductsService } from 'src/app/sevices/products.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductComponent implements OnInit {
  id: Number;
  pro: Product;
  renderHtml: Boolean;
  isLoading: Boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private titleService: Title
  ) {
    this.pro = new Product();
    this.renderHtml = false;
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }
  
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.isLoading = true;
    }
    if (event instanceof NavigationEnd) {
      this.isLoading = false;
    }

    
    if (event instanceof NavigationCancel) {
      this.isLoading = false;
    }
    if (event instanceof NavigationError) {
      this.isLoading = false;
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id') != null) {
        let id = +params.get('id');
        this.id = id;
        this.isLoading = true;
        this.productsService.getById(id).subscribe((result) => {
          Object.assign(this.pro, result);
          //console.log(this.pro);
          if (this.pro.putanja.toString().length > 0) {
            this.renderHtml = true;
          } else {
            this.renderHtml = false;
          }
          this.titleService.setTitle("Cascadus - " + this.pro.naziv);
          setTimeout(() => {
            this.isLoading = false;
          }, 750);
        });
      }
    });
  }

  scrollTo(id): void {
    let el = document.getElementById(id);
    el.scrollIntoView();
  }
}
