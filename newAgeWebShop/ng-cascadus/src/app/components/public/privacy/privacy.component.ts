import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-statement',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Cascadus - Izjava o privatnosti");
 }
  ngOnInit(): void {
  }

}
