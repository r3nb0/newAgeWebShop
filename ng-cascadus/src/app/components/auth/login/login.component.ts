import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/sevices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;
  invalidLogin: Boolean;
  invalidRegistration: Boolean;
  errorMessage: String;

  constructor(private router: Router,
    private auth: AuthService,
    private fb: FormBuilder) {
    this.invalidLogin = false;
  }
  ngOnInit(): void {
    this.initForms();
  }

  initForms() {
    this.loginForm = this.fb.group({
      loginUsername: new FormControl('', Validators.required),
      loginPassword: new FormControl('', Validators.required)
    });
  }

  login(): void {
    let username = this.loginForm.get("loginUsername").value;
    let password = this.loginForm.get("loginPassword").value;
    const user = new Login(username, password);
    this.auth.login(user)
      .subscribe(result => {
        const token = (<any>result).token;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        const role = (<any>result).role;
        localStorage.setItem("role", role);
        if (role == "Admin") {
        this.router.navigate(["admin"]);
          
        }
        if(role == "Korisnik") {
          this.router.navigate(["home"]);
        }
        this.loginForm.reset();
      }, error => {
        this.errorMessage = JSON.stringify(error);
        this.invalidLogin = true;
        this.loginForm.reset();
      });
  }

  
}
