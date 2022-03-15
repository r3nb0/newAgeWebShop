import { environment } from './../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   *
   */
  constructor(public router: Router) {
    if (environment.production) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          gtag('config', 'G-NF7B94KLH2', {
            page_path: event.urlAfterRedirects,
          });
        }
      });
    }
  }
}
