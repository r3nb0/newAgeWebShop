import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentModel } from 'src/app/models/paymentModel';
import { Order } from 'src/app/models/order';
import { Buyer } from './../../../models/buyer';
import { Product } from './../../../models/product';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from './../../../models/cartItem';
import { PaymentService } from 'src/app/sevices/payment.service';
import { InvoicesService } from './../../../sevices/invoices.service';
import { Component } from '@angular/core';
import { ProductsService } from 'src/app/sevices/products.service';
import { privateDecrypt } from 'crypto';
import { DiscountCode } from 'src/app/models/discountCode';
import { DiscountsService } from 'src/app/sevices/discounts.service';
import { send } from 'process';
import { CookieService } from 'src/app/sevices/cookie.service';
import { UrlResolver } from '@angular/compiler';
import { param } from 'jquery';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  /**
   *
   */

  buyerForm: FormGroup;
  totalPrice: number = 0;
  totalPriceNoShipping: number = 0;
  buyer: Buyer;
  isFormCorrect: Boolean = true;
  cartItemsArray: Array<CartItem> = new Array<CartItem>();
  numOfCartItems: number = 0;
  shippingCost: number = 30;
  cartEmpty: boolean = true;

  discountCode: DiscountCode = null;
  discountCodeLoading: Boolean = false;
  discountCodeInputShown: Boolean = false;
  sending: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private invoiceService: InvoicesService,
    private toastr: ToastrService,
    private productService: ProductsService,
    private discountsService: DiscountsService,
    private router: Router,
    private cookieService: CookieService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Cascadus - Naplata');
  }

  ngOnInit() {
    this.initForms();
    this.checkCart();
  }

  initForms() {
    this.buyerForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      street: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      houseNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      postCode: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      city: new FormControl('', [Validators.required, Validators.minLength(2)]),
      country: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      paymentMethod: new FormControl('OnDelivery', Validators.required),
      message: new FormControl(''),
    });
  }

  resetForms(): void {
    this.buyerForm.reset();
    this.isFormCorrect = true;
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
      this.cartEmpty = false;
    }
    this.updateTotalPrice();
  }

  OnPlaceInstantOrder(): void {
    this.buyer = this.getBuyerFromForm();
    var message = this.buyerForm.get('message').value;
    var paymentMethod = this.buyerForm.get('paymentMethod').value;

    if (
      this.isFormCorrect &&
      this.cartItemsArray.length >= 1 &&
      this.buyer != null
    ) {
      (
        document.getElementById('instantOrderBtn') as HTMLButtonElement
      ).disabled = true;
      this.sending = true;
      this.orderCartItems(
        this.cartItemsArray,
        this.buyer,
        message,
        paymentMethod
      );
    } else {
      this.toastr.show(
        'Niste unijeli sve podatke! Za uspješno izvršavanje narudžbe je potrebno ispravno popuniti sva polja.',
        'Naručivanje'
      );
      this.sending = false;
      // setTimeout(() => {
      //   window.location.reload();
      // }, 2500);
    }
  }

  onDecreaseCartItem(itemId: number): void {
    this.cartItemsArray.forEach((el) => {
      if (el.id == itemId) {
        if (el.kolicina > 1) {
          el.kolicina = (el.kolicina as number) - 1;
        } else {
          this.onRemoveCartItem(itemId);
        }
      }
    });
    this.animateCartItem(itemId, '-');
    this.updateCartItems();
  }

  onIncreaseCartItem(itemId: number): void {
    this.cartItemsArray.forEach((el) => {
      if (el.id == itemId) {
        if (el.kolicina <= 98) {
          el.kolicina = (el.kolicina as number) + 1;
        } else {
          setTimeout(() => {
            this.toastr.success(
              'Nije moguće dodati više od 99 komada proizvoda: ' +
                el.naziv +
                '.',
              'Košarica'
            );
          }, 900);
        }
      }
    });
    this.animateCartItem(itemId, '+');
    this.updateCartItems();
  }

  onRemoveCartItem(itemId: number): void {
    var newCartItemsArray = new Array<CartItem>();
    this.cartItemsArray.forEach((el) => {
      if (el.id != itemId) {
        newCartItemsArray.push(el);
      }
    });
    this.cartItemsArray = newCartItemsArray;
    this.animateCartItem(itemId, 'del');

    setTimeout(() => {
      this.toastr.success(
        'Proizvod je uspješno uklonjen iz vaše košarice.',
        'Košarica'
      );
    }, 900);
    this.updateCartItems();
  }

  updateCartItems() {
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(this.cartItemsArray));
    this.checkCart();
  }

  orderCartItems(
    cartItems: Array<CartItem>,
    buyer: Buyer,
    message: String,
    paymentMethod: String
  ): void {
    if (this.numOfCartItems != 0) {
      (
        document.getElementById('instantOrderBtn') as HTMLButtonElement
      ).disabled = true;
      this.sending = true;
      var paymentModel = new PaymentModel(cartItems, paymentMethod);
      var order: Order = new Order(buyer, message, paymentModel);
      if (
        this.discountCode != null &&
        this.discountCode != undefined &&
        this.discountCode != null
      ) {
        order.discountCode = this.discountCode.popustKod;
      }

      this.paymentService.pay(order).subscribe((response) => {
        var data = response['body'];
        //status codes: 0 - success, 1 - fail, 2 - pending
        //ondelivery success
        if (data['value']['statusCode'] == 0) {
          setTimeout(() => {
            this.toastr.success(
              'Tvoja narudžba je uspješno zaprimljena!',
              'Košarica'
            );
          }, 500);
          setTimeout(() => {
            this.router.navigate([
              'order-success/' + data['value']['buyerId'].toString(),
            ]);
          }, 1500);
        }

        //corvus pay
        else if (data['value']['statusCode'] == 2) {
          var paymentUrl = data['value']['paymentUrl'].toString();
          var parameters = data['value']['parameters'];
          var token = response.headers.get('X-XSRF-TOKEN');
          localStorage.setItem('X-XSRF-TOKEN', token);
          setTimeout(() => {
            this.toastr.success(
              'Sve što je ostalo za napraviti je to da platiš svoju narudžbu preko Corvus Pay platnog sistema. ' +
                'Čim završiš plaćanje, odmah se bacamo na posao i pripremamo tvoju narudžbu za kurirsku službu!',
              'Košarica'
            );
          }, 500);
          setTimeout(() => {
            //redirecting client to CorvusPay payment gateway
            const mapForm = document.createElement('form');
            mapForm.target = '_self';
            mapForm.method = 'POST';
            mapForm.action = paymentUrl;
            mapForm.id = 'corvusPayForm';
            mapForm.name = 'corvusPayForm';
            mapForm.style.display = 'none';

            //adding xsrf token
            const xsrfElement = document.createElement('input');
            xsrfElement.type = 'hidden';
            xsrfElement.name = '_csrf';
            xsrfElement.setAttribute('value', token);
            mapForm.append(xsrfElement);

            //adding hidden form inputs
            for (let i = 0; i < parameters.length; i++) {
              const param = parameters[i];
              const mapInput = document.createElement('input');
              mapInput.type = 'hidden';
              mapInput.name = param['Key'].toString();
              mapInput.setAttribute('value', param['Value'].toString());
              mapForm.appendChild(mapInput);
            }

            //adding, submitting and removing form
            document.body.appendChild(mapForm);
            console.log(mapForm);
            mapForm.submit();
            mapForm.remove();
          }, 1500);
        }

        //fail
        else {
          setTimeout(() => {
            this.toastr.info(
              'Nažalost tvoja narudžba nije prošla. Molimo te da provjeriš sve podatke, količine proizvoda, te da pokušaš ponovo naručiti stvari iz košarice.',
              'Košarica'
            );
          }, 500);
          setTimeout(() => {
            this.router.navigate([
              'order-fail/' + data['value']['buyerId'].toString(),
            ]);
          }, 1500);
        }
        (
          document.getElementById('instantOrderBtn') as HTMLButtonElement
        ).disabled = false;
        this.sending = false;
      }),
        (error) => {
          //console.log(error);
          (
            document.getElementById('instantOrderBtn') as HTMLButtonElement
          ).disabled = false;
          this.sending = false;
          setTimeout(() => {
            this.toastr.error(
              'Ispričavamo se na neugodnosti, no izgleda da je došlo do greške. Molimo te da pokušaš ponovo. Ukoliko se problem nastavi pojavljivati, kontaktiraj našu podršku!',
              'Ups, Greška!'
            );
          }, 1000);
          window.location.reload();
        };
    } else if (this.numOfCartItems == 0) {
      this.toastr.show(
        'Ups! U ovoj košarici ne postoje proizvodi. Prvo dodajte proizvod/e u košaricu, a zatim pokušajte ponovo.',
        'Košarica'
      );
    } else {
      this.toastr.show(
        'Ispričavamo se na neugodnosti, no izgleda da je došlo do greške. Molimo te da pokušaš ponovo. Ukoliko se problem nastavi pojavljivati, kontaktiraj našu podršku!',
        'Ups, Greška!'
      );
    }
  }

  getBuyerFromForm(): Buyer {
    var data: Buyer = new Buyer();
    data.ime = this.buyerForm.get('name').value;
    data.prezime = this.buyerForm.get('surname').value;
    data.email = this.buyerForm.get('email').value;
    data.kontakt = this.buyerForm.get('phone').value;
    data.ulica = this.buyerForm.get('street').value;
    data.kucniBroj = this.buyerForm.get('houseNumber').value;
    data.postanskiBroj = this.buyerForm.get('postCode').value;
    data.grad = this.buyerForm.get('city').value;
    if (
      data.ime.length < 1 ||
      data.prezime.length < 1 ||
      data.email.length < 7 ||
      data.kontakt.length < 7 ||
      data.ulica.length < 2 ||
      data.kucniBroj.length < 0 ||
      data.postanskiBroj.length <= 5 ||
      data.grad.length < 1
    ) {
      this.isFormCorrect = false;
      return null;
    } else {
      this.isFormCorrect = true;
      return data;
    }
  }

  animateCartItem(itemId: number, state: string): void {
    var divId = 'cartItem' + itemId;
    switch (state) {
      case '+':
        document.getElementById(divId).classList.add('alert', 'alert-success');
        setTimeout(() => {
          document
            .getElementById(divId)
            .classList.remove('alert', 'alert-success');
        }, 750);
        break;

      case '-':
        document.getElementById(divId).classList.add('alert', 'alert-danger');
        setTimeout(() => {
          document
            .getElementById(divId)
            .classList.remove('alert', 'alert-danger');
        }, 750);
        break;

      case 'del':
        document.getElementById(divId).classList.add('alert', 'red');
        break;
    }
  }

  changeDiscountCodeBlockState(): void {
    var cbDiscountCodeSwitch = document.getElementById(
      'cbDiscountCodeSwitch'
    ) as HTMLInputElement;
    var divDiscountCode = document.getElementById(
      'divDiscountCode'
    ) as HTMLDivElement;
    if (cbDiscountCodeSwitch.checked) {
      divDiscountCode.style.display = 'block';
      this.discountCodeInputShown = true;
    } else {
      this.discountCodeInputShown = false;
      divDiscountCode.style.display = 'none';
    }
  }

  checkCouponCode(): void {
    var code = document.getElementById('txtDiscountCode') as HTMLInputElement;
    var lblDiscountStatus = document.getElementById(
      'lblDiscountStatus'
    ) as HTMLLabelElement;
    if (code.value.length >= 3) {
      this.discountCodeLoading = true;
      this.discountsService.checkDiscountCode(code.value).subscribe(
        (result) => {
          if (result != null) {
            this.discountCode = new DiscountCode();
            Object.assign(this.discountCode, result);
            lblDiscountStatus.style.color = 'green';
            lblDiscountStatus.textContent =
              'Popust kod je valjan! Omogućen vam je popust od: ' +
              this.discountCode['popustUpostocima'] +
              '%!';
          } else {
            lblDiscountStatus.style.color = 'red';
            lblDiscountStatus.textContent =
              'Popust kod je istekao ili je neispravan!';
            code.value = '';
            this.discountCode = null;
          }
          this.discountCodeLoading = false;
          this.updateTotalPrice();
        },
        (error) => {
          this.toastr.error(
            'Došlo je do greške s provjerom koda. Molimo te da provjeriš kod i da pokušaš ponovo. Ukoliko se problem nastavi pojavljivati, javi se podršci. Hvala!',
            'Popust kod - Naručivanje'
          );
          this.discountCodeLoading = false;
          code.value = '';
          this.discountCode = null;
          this.updateTotalPrice();
        }
      );
    } else {
      this.discountCode = null;
      lblDiscountStatus.style.color = 'red';
      lblDiscountStatus.textContent = 'Neispravan popust kod!';
      code.value = '';
    }
    this.updateTotalPrice();
  }

  updateTotalPrice() {
    var lblOldPrice = document.getElementById(
      'lblOldPrice'
    ) as HTMLLabelElement;
    this.totalPriceNoShipping = 0;
    this.cartItemsArray.forEach((el) => {
      this.totalPriceNoShipping +=
        Number.parseFloat(el.cijena.toString()) *
        Number.parseInt(el.kolicina.toString());
    });
    if (this.discountCode == null) {
      this.totalPrice = this.totalPriceNoShipping + this.shippingCost;
      lblOldPrice.textContent = '';
    } else {
      var discount =
        Number.parseInt(this.discountCode['popustUpostocima'].toString()) / 100;
      lblOldPrice.style.display = 'block';
      lblOldPrice.style.color = 'green';
      lblOldPrice.textContent =
        'Stara cijena: ' + this.totalPriceNoShipping + ' kn';
      this.totalPrice =
        this.totalPriceNoShipping -
        this.totalPriceNoShipping * discount +
        this.shippingCost;
    }
  }
}
