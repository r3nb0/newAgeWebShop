import { BuyersService } from './../../../sevices/buyers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Buyer } from 'src/app/models/buyer';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-order-fail',
  templateUrl: './order-fail.component.html',
  styleUrls: ['./order-fail.component.scss']
})
export class OrderFailComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private titleService: Title) {
    this.titleService.setTitle("Cascadus - Neuspješno plaćanje");
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      var name = params.get('buyer');
      name = name.charAt(0).toUpperCase() + name.slice(1);
      document.getElementById('buyerName').innerText = name as string;
      setTimeout(() => {
        window.location.href = 'home/';
      }, 10000);
    });
  }

}
