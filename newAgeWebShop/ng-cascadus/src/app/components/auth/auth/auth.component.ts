import { AuthService } from 'src/app/sevices/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  accountForm: FormGroup;
  invalidLogin: Boolean;
  invalidRegistration: Boolean;
  errorMessage: String;
  
  constructor(private router: Router,
    private auth: AuthService,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
    this.invalidLogin = false;
    this.invalidRegistration = false;
  }

  initForm() {
    this.accountForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl(''),
      repeatPassword: new FormControl('')
    });
  }

  submit(): void {
    this.login();
  }

  login(): void {
    let username = this.accountForm.get("username").value;
    let password = this.accountForm.get("password").value;
    const user = new Login(username, password);
    this.auth.login(user)
      .subscribe(result => {
        const token = (<any>result).token;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        const role = (<any>result).role;
        localStorage.setItem("role", role);
        if (role == "Admin") {
          window.location.replace("admin");
        } else {
          this.router.navigate(["home"]);
        }
      }, error => {
        this.errorMessage = JSON.stringify(error);
        this.invalidLogin = true;
        this.accountForm.reset();
      });
  }

  // register(): void {
  //   let username = new String();
  //   let password = new String();
  //   let repeatPassword = new String();
  //   username = this.accountForm.get("username").value;
  //   password = this.accountForm.get("password").value;
  //   repeatPassword = this.accountForm.get("repeatPassword").value;
  //   if (password == repeatPassword &&
  //     password.length > 8) {
  //     const user = new Login(username, password);
  //     this.auth.register(user)
  //       .subscribe(result => {
  //         this.invalidRegistration = false;

  //         const token = (<any>result).token;
  //         localStorage.setItem(environment.tokenKey, token);
  //         const role = (<any>result).role;
  //         localStorage.setItem(environment.roleKey, role);

  //         this.router.navigate(["home"]);
  //       }, error => {
  //         this.invalidRegistration = true;
  //         this.errorMessage = error;
  //       });
  //   }
  // }

  
}