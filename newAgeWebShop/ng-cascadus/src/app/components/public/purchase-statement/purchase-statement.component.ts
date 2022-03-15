import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-purchase-statement',
  templateUrl: './purchase-statement.component.html',
  styleUrls: ['./purchase-statement.component.scss']
})
export class PurchaseStatementComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Cascadus - Izjava o kupnji");
 }
  ngOnInit(): void {
  }

}
