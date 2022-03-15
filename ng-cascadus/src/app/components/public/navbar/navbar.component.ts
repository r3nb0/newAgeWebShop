import { InvoicesService } from 'src/app/sevices/invoices.service';
import { PaymentService } from 'src/app/sevices/payment.service';
import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ProductsService } from 'src/app/sevices/products.service';
import { CartItem } from 'src/app/models/cartItem';
import { ToastrService } from 'ngx-toastr';
import { PaymentModel } from 'src/app/models/paymentModel';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  showCartDetails = false;
  isCartEmpty = true;
  isCartShow = false;
  numOfCartItems: Number = 0;
  products: Array<Product>;
  cartItemsArray: Array<CartItem> = new Array<CartItem>();
  totalPriceCart: number;

  constructor(
    private router: Router,
    private productService: ProductsService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.totalPriceCart = 0;
    this.checkCart();
    if (this.products == null || this.products == undefined) {
      this.products = new Array<Product>();
      this.productService.getActive().subscribe((result) => {
        result.forEach((product) => {
          var tempProduct = new Product();
          Object.assign(tempProduct, result);
          this.products.push(tempProduct);
        });
      });
    }
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.checkCart();
    });
  }

  checkCart(): void {
    this.numOfCartItems = 0;
    var cart = localStorage.getItem('cart');
    if (cart != null || cart != undefined) {
      this.cartItemsArray = JSON.parse(cart);
      this.cartItemsArray.forEach((item) => {
        this.numOfCartItems =
          Number.parseInt(this.numOfCartItems.toString()) +
          Number.parseInt(item.kolicina.toString());
      });
    }
    if (this.numOfCartItems != 0) {
      this.isCartEmpty = false;
      (document.getElementById('btnCheckoutNaplata') as HTMLButtonElement).disabled = false;
    } else { 
      this.isCartEmpty = true;
      (document.getElementById('btnCheckoutNaplata') as HTMLButtonElement).disabled = true;
    }
  }

  onPayForCartItems(): void {
    this.showCartModal(false);
    window.location.replace("/checkout");
  }

  getTotalPrice(): number {
    var price = 0;
    this.cartItemsArray.forEach((element) => {
      price += (element.kolicina as number) * (element.cijena as number);
    });
    price += 30;
    return price;
  }

  onEmptyCartItems(): void {
    localStorage.clear();
    this.showCartModal(false);
    this.isCartShow = false;
    this.showCartDetails = false;
    setTimeout(() => {
      this.toastr.info('Košarica je uspješno ispražnjena', 'Košarica');
    }, 500);
    this.numOfCartItems = 0;
    this.isCartEmpty = true;
    window.location.replace(this.router.url.toString());
  }

  showCartModal(state: boolean) {
    if (state) {
      this.checkCart();
      document.getElementById('cartModal').classList.remove('hide');
      document.getElementById('cartModal').classList.add('show');
    } else {
      document.getElementById('cartModal').classList.remove('show');
      document.getElementById('cartModal').classList.add('hide');
      document.getElementsByClassName('modal-backdrop')[0].remove();
    }
  }
}
