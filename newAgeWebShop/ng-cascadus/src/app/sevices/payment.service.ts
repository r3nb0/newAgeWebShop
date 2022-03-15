import { CorvusVerify } from './../models/corvusVerify';
import { Order } from 'src/app/models/order';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PaymentService {
  private URL: String;

  constructor(private http: HttpClient) {
    this.URL = environment.domain + 'public/cart/';
  }

  pay(order: Order): Observable<any> {
    return this.http.post<any>(this.URL + 'placeOrder', order, {
      observe: 'response',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
  confirmCorvusPayment(
    orderNumber: String,
    signature: String,
    language: String,
    approvalCode: String,
    xsrfToken: string
  ): Observable<any> {
    var data = new CorvusVerify();
    data.orderNumber = orderNumber;
    data.signature = signature;
    data.language = language;
    data.approvalCode = approvalCode;
    return this.http.post<any>(this.URL + 'corvusVerify', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-XSRF-TOKEN': xsrfToken
      }),
    });
  }
  cancelCorvusPayment(
    orderNumber: String,
    language: String,
    xsrfToken: string
  ): Observable<String> {
    var data = new CorvusVerify();
    data.orderNumber = orderNumber;
    data.signature = '';
    data.language = language;
    data.approvalCode = '-1';
    return this.http.post<String>(this.URL + 'corvusCancel', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-XSRF-TOKEN': xsrfToken
      }),
    });
  }

  postCorvus(
    paymentUrl: any,
    parameters: any,
    xsrfToken: string
  ): Observable<any> {
    var paramString = '';
    for (let i = 0; i < parameters.length; i++) {
      const p = parameters[i];
      paramString = paramString + p['Key'].toString() + '=' + p['Value'].toString();
      if (i != (parameters.length-1)) {
        paramString = paramString + '&';
      }
    }
    console.info('Parameters string: [' + paramString + ']');

    const params = new HttpParams({fromString: paramString});
    return this.http.post<Response>(paymentUrl, params, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-XSRF-TOKEN': xsrfToken
      })
    });
  }
}
