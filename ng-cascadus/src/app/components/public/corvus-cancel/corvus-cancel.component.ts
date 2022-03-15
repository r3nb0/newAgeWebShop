import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/sevices/payment.service';
import { tokenGetter } from 'src/app/app.module';

@Component({
  selector: 'app-corvus-cancel',
  templateUrl: './corvus-cancel.component.html',
  styleUrls: ['./corvus-cancel.component.scss'],
})
export class CorvusCancelComponent implements OnInit {
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
    this.route.params.subscribe((params) => {
      this.orderNumber = params['order_number'];
      this.signature = params['signature'];
      this.language = params['language'];
      this.approvalCode = params['approval_code'];
    });
    var token = localStorage.getItem('X-XSRF-TOKEN').toString()
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
        token
    );
    this._paymentService
      .cancelCorvusPayment(this.orderNumber, this.language, token)
      .subscribe((data) => {
        window.location.href = 'order-fail/' + data['value']['buyerId'].toString();
        // this.router.navigate([
        //   'order-fail/' + data['value']['buyerId'].toString(),
        // ]);
      });
  }
}
