import { KeyValuePair } from './../../../models/paymentModel';
import { ActivatedRouteSnapshot } from '@angular/router';
import { DiscountCode } from 'src/app/models/discountCode';
import { ToastrService } from 'ngx-toastr';
import { Buyer } from './../../../models/buyer';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/cartItem';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { PaymentService } from 'src/app/sevices/payment.service';
import { PaymentModel } from 'src/app/models/paymentModel';
import { DiscountsService } from 'src/app/sevices/discounts.service';
import { CookieService } from 'src/app/sevices/cookie.service';

@Component({
  selector: 'order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.scss'],
})
export class OrderProductComponent implements OnInit {
  @Input() product: Product;
  buyerForm: FormGroup;
  totalPrice: number;
  productQuantity: number;
  buyer: Buyer;
  isFormCorrect: Boolean = true;
  invoiceNumber: Number;
  shippingCost: number;
  numOfCartItems: number = 0;
  cartEmpty: boolean = true;
  cartItemsArray: Array<CartItem> = new Array<CartItem>();
  btnIncrease: HTMLButtonElement;
  btnDecrease: HTMLButtonElement;

  discountCode: DiscountCode = null;
  discountCodeLoading: Boolean = false;
  discountCodeInputShown: Boolean = false;
  sending: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private toastr: ToastrService,
    private router: Router,
    private discountsService: DiscountsService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.initForms();
    this.checkCart();
    this.totalPrice = 1;
    this.productQuantity = 1;
    this.shippingCost = 30;
    this.updateTotalPrice();
  }

  initForms(): void {
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
  }

  resetForms(): void {
    this.buyerForm.reset();
    this.isFormCorrect = true;
  }

  updateTotalPrice(): void {
    var priceNoDiscount = Number.parseFloat(
      (this.productQuantity * (this.product.cijena as number)).toFixed(2)
    );
    var lblOldPrice = document.getElementById(
      'lblOldPrice'
    ) as HTMLLabelElement;
    if (this.discountCode == null) {
      this.totalPrice = priceNoDiscount + this.shippingCost;
      lblOldPrice.style.display = 'none';
    } else {
      var discount =
        Number.parseInt(this.discountCode['popustUpostocima'].toString()) / 100;
      lblOldPrice.style.display = 'block';
      lblOldPrice.style.color = 'green';
      lblOldPrice.textContent = 'Stara cijena: ' + priceNoDiscount + ' kn';
      this.totalPrice =
        priceNoDiscount - priceNoDiscount * discount + this.shippingCost;
    }
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }

  btnIncreaseQuantity(): void {
    if (this.productQuantity <= 98) {
      this.productQuantity++;
      this.OnQuantityChanged();
    }
  }

  btnDecreaseQuantity(): void {
    if (this.productQuantity >= 2) {
      this.productQuantity--;
      this.OnQuantityChanged();
    }
  }

  OnQuantityChanged(): void {
    this.updateTotalPrice();
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
              '%';
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
        }
      );
    } else {
      this.discountCode = null;
      lblDiscountStatus.style.color = 'red';
      lblDiscountStatus.textContent = 'Neispravan popust kod!';
      code.value = '';
    }
  }

  OnAddToCart(): void {
    var cartvalue = localStorage.getItem('cart');
    var cartItemsArray = new Array<CartItem>();
    //ukoliko kosarica nije prazna
    if (cartvalue != null || cartvalue != undefined) {
      cartItemsArray = JSON.parse(cartvalue);

      var exists: boolean = false;
      cartItemsArray.forEach((item) => {
        if (item.id == this.product.id) {
          item.kolicina =
            Number.parseInt(item.kolicina.toString()) +
            Number.parseInt(this.productQuantity.toString());
          exists = true;
        }
      });
      if (exists == false) {
        cartItemsArray.push(
          new CartItem(
            this.product.id,
            this.product.naziv,
            this.productQuantity,
            this.product.cijena
          )
        );
      }
    } else {
      cartItemsArray.push(
        new CartItem(
          this.product.id,
          this.product.naziv,
          this.productQuantity,
          this.product.cijena
        )
      );
    }
    localStorage.setItem('cart', JSON.stringify(cartItemsArray));
    this.toastr.success('Proizvod je uspješno dodan u košaricu!', 'Košarica');
    setTimeout(() => {
      window.location.replace(this.router.url.toString());
    }, 1500);
  }

  OnPlaceInstantOrder(): void {
    this.buyer = this.getBuyerFromForm();
    var message = this.buyerForm.get('message').value;
    var paymentMethod = this.buyerForm.get('paymentMethod').value;

    var cartItems = new Array<CartItem>();
    cartItems.push(
      new CartItem(
        this.product.id,
        this.product.naziv,
        this.productQuantity,
        this.product.cijena
      )
    );
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.checkCart();

    if (this.isFormCorrect && cartItems.length >= 1 && this.buyer != null) {
      this.orderCartItems(cartItems, this.buyer, message, paymentMethod);
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
      data.ime.length <= 2 ||
      data.prezime.length <= 2 ||
      data.email.length <= 8 ||
      data.kontakt.length <= 8 ||
      data.ulica.length <= 3 ||
      data.kucniBroj.length <= 1 ||
      data.postanskiBroj.length <= 5 ||
      data.grad.length <= 2
    ) {
      this.isFormCorrect = false;
      return null;
    } else {
      this.isFormCorrect = true;
      return data;
    }
  }

  orderCartItems(
    cartItems: Array<CartItem>,
    buyer: Buyer,
    message: String,
    paymentMethod: String
  ): void {
    if (this.numOfCartItems != 0) {
      var paymentModel = new PaymentModel(cartItems, paymentMethod);
      var order: Order = new Order(buyer, message, paymentModel);

      (
        document.getElementById('instantOrderBtn') as HTMLButtonElement
      ).disabled = true;
      this.sending = true;

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
}
