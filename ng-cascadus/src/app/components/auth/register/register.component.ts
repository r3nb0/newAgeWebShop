import { AuthService } from 'src/app/sevices/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { Login } from 'src/app/models/login';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
  })
  
  export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    invalidRegistration: Boolean;
    errorMessage: String;
    
    constructor(private fb: FormBuilder,
      private router: Router,
      private authService: AuthService) {

        this.invalidRegistration = false;
    }
    ngOnInit(): void {
      this.initForms();
    }
  initForms() {
    this.registerForm = this.fb.group({
      registerUsername: new FormControl('', Validators.required),
      registerPassword: new FormControl('', Validators.required),
      registerRepeatPassword: new FormControl('', Validators.required)
    });
  }

  register(): void {
    let username = new String();
    let password = new String();
    let repeatPassword = new String();
    username = this.registerForm.get("registerUsername").value;
    password = this.registerForm.get("registerPassword").value;
    repeatPassword = this.registerForm.get("registerRepeatPassword").value;
    if (password == repeatPassword &&
      password.length > 8) {
      const user = new Login(username, password);
      this.authService.register(user)
        .subscribe(result => {
          this.invalidRegistration = false;

          const token = (<any>result).token;
          localStorage.setItem(environment.tokenKey, token);
          const role = (<any>result).role;
          localStorage.setItem(environment.roleKey, role);

          this.router.navigate(["home"]);
        }, error => {
          this.invalidRegistration = true;
          this.errorMessage = error;
        });
    }
  }
  
}