import { BuyersService } from './../../../sevices/buyers.service';
import { Buyer } from './../../../models/buyer';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss'],
})
export class OrderSuccessComponent implements OnInit {
  buyer: Buyer = new Buyer();
  id: number;

  constructor(
    private route: ActivatedRoute,
     private titleService: Title) {
      this.titleService.setTitle("Cascadus - Uspješno plaćanje");}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      var name = params.get('buyer');
      name = name.charAt(0).toUpperCase() + name.slice(1);
      document.getElementById('buyerName').innerText = name as string;
      localStorage.clear();
      setTimeout(() => {
        window.location.href = 'home/';
      }, 10000);
    });
  }
}
