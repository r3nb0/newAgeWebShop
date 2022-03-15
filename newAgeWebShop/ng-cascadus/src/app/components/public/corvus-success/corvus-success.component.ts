import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { sign } from 'crypto';
import { PaymentService } from 'src/app/sevices/payment.service';
import { ToastrService } from 'ngx-toastr';
import { param } from 'jquery';

@Component({
  selector: 'app-corvus-success',
  templateUrl: './corvus-success.component.html',
  styleUrls: ['./corvus-success.component.scss'],
})
export class CorvusSuccessComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private _paymentService: PaymentService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  orderNumber: String;
  signature: String;
  language: String;
  approvalCode: String;
  ngOnInit(): void {
    this.orderNumber = this.route.snapshot.queryParamMap.get('order_number');
    this.language = this.route.snapshot.queryParamMap.get('language');
    this.approvalCode = this.route.snapshot.queryParamMap.get('approval_code');
    this.signature = this.route.snapshot.queryParamMap.get('signature');

    console.log(
      'orderNumber: ' +
        this.orderNumber +
        ' lang:' +
        this.language +
        ' approvalCode:' +
        this.approvalCode +
        ' signature:' +
        this.signature +
        ' xsrfToken:' +
        localStorage.getItem('X-XSRF-TOKEN').toString()
    );
    this._paymentService
      .confirmCorvusPayment(
        this.orderNumber,
        this.signature,
        this.language,
        this.approvalCode,
        localStorage.getItem('X-XSRF-TOKEN').toString()
      )
      .subscribe((data) => {
        if (data['value']['statusCode'] == 0) {
          window.location.href = 'order-success/' + data['value']['buyerId'].toString();
          // this.router.navigate([
          //   'order-success/' + data['value']['buyerId'].toString(),
          // ]);
        } else {
          window.location.href = 'order-fail/' + data['value']['buyerId'].toString();
          // this.router.navigate([
          //   'order-fail/' + data['value']['buyerId'].toString(),
          // ]);
        }
      });
  }
}
