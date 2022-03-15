import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-payment-statement',
  templateUrl: './payment-statement.component.html',
  styleUrls: ['./payment-statement.component.scss']
})
export class PaymentStatementComponent implements OnInit {

  constructor(private titleService: Title) {
      this.titleService.setTitle("Cascadus - Izjava o plaćanju");
   }

  ngOnInit(): void {
  }

}