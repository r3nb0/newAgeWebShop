import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { PaymentModel } from 'src/app/models/paymentModel';
import { Buyer } from './buyer';

export class Order {
  /**
   *
   */
  constructor(
    buyer: Buyer,
    message: String,
    paymentModel: PaymentModel,
  ) {
    this.setBuyer(buyer),
    this.orderComment = message;
    this.paymentModel = paymentModel;
  }
  
  /*
  Buyer
   - START
   */
  name: String;
  surname: String;
  contact: String;
  email: String;
  street: String;
  houseNumber: String;
  city: String;
  postNumber: String;
  orderComment: String;
  /*
  Buyer
   - END
   */

  paymentModel: PaymentModel;
  orderNumber: number;
  discountCode: String;

  setBuyer(buyer: Buyer): void {
    this.name = buyer.ime;
    this.surname = buyer.prezime;
    this.contact = buyer.kontakt;
    this.email = buyer.email;
    this.street = buyer.ulica;
    this.houseNumber = buyer.kucniBroj;
    this.city = buyer.grad;
    this.postNumber = buyer.postanskiBroj.toString();
  }
}

