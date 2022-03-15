import { Buyer } from './buyer';
import { CartItem } from './cartItem';

export class PaymentModel {
  constructor(cartItems: Array<CartItem>, paymentMethod: String) {
    this.cart = this.parseCartItems(cartItems);
    this.amount = this.getCartAmount(cartItems);
    this.paymentMethod = paymentMethod;
  }
  amount: number;
  cart: Array<KeyValuePair>;
  paymentMethod: String;
  
  parseCartItems(cartItems: CartItem[]): Array<KeyValuePair> {
    var cartArray = new Array<KeyValuePair>();
    cartItems.forEach((item) => {
      cartArray.push(
        new KeyValuePair(Number.parseInt(item.id.toString()), item.kolicina.toString())
      );
    });
    return cartArray;
  }

  getCartAmount(cartItems: CartItem[]): number {
    var totalPrice = 0.0;
    cartItems.forEach((item) => {
      var productPrice = 0;
      productPrice = (Number.parseFloat(item.cijena.toString()) * Number.parseFloat(item.kolicina.toString()));
      totalPrice += productPrice;
    });
    return totalPrice;
  }
}

export class KeyValuePair {
  constructor(key: number, value: String) {
    this.key = key;
    this.value = value;
  }
  key: number;
  value: String;
}
