import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private router: Router, private jwt: JwtHelperService) {
    
  }

  ngOnInit(): void {
    if (!this.isUserAuthenticated()) {
      this.router.navigate(["home"]);
    }
    
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  isUserAuthenticated(): Boolean {
    const token: string = localStorage.getItem("jwt");
    const role: String = localStorage.getItem("role");
    if (token && !this.jwt.isTokenExpired(token)) {
      if (role == "Admin") {
        console.log("acc YES \n admin YES")
        return true;
      } else {
        console.log("acc YES \n admin NO")
        return false;
      }
    } else {
      console.log("acc NO \n admin NO")
      return false;
    }
  }

}
