(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+jqZ":
/*!****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/login */ "kK2o");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_sevices_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sevices/auth.service */ "YcCY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function RegisterComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Invalid username or password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
class RegisterComponent {
    constructor(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.invalidRegistration = false;
    }
    ngOnInit() {
        this.initForms();
    }
    initForms() {
        this.registerForm = this.fb.group({
            registerUsername: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            registerPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            registerRepeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
    register() {
        let username = new String();
        let password = new String();
        let repeatPassword = new String();
        username = this.registerForm.get("registerUsername").value;
        password = this.registerForm.get("registerPassword").value;
        repeatPassword = this.registerForm.get("registerRepeatPassword").value;
        if (password == repeatPassword &&
            password.length > 8) {
            const user = new src_app_models_login__WEBPACK_IMPORTED_MODULE_2__["Login"](username, password);
            this.authService.register(user)
                .subscribe(result => {
                this.invalidRegistration = false;
                const token = result.token;
                localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tokenKey, token);
                const role = result.role;
                localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].roleKey, role);
                this.router.navigate(["home"]);
            }, error => {
                this.invalidRegistration = true;
                this.errorMessage = error;
            });
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sevices_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 14, vars: 2, consts: [[1, "signup-form", "mt-5"], [1, "panel"], ["id", "register", "name", "registerForm", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "registerUsername", "required", "", "autofocus", "", "minlength", "5", "id", "registerUsername", "placeholder", "Korisni\u010Dko ime", "name", "username", 1, "form-control"], ["type", "password", "formControlName", "registerPassword", "required", "", "minlength", "8", "id", "registerPassword", "placeholder", "Lozinka", "name", "password", 1, "form-control"], ["type", "password", "formControlName", "registerRepeatPassword", "required", "", "minlength", "8", "id", "repeatPassword", "placeholder", "Ponovite lozinku", "name", "repeatPassword", 1, "form-control"], ["class", "alert alert-danger m-auto", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-outline-primary"], [1, "alert", "alert-danger", "m-auto"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RegisterComponent_div_11_Template, 5, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invalidRegistration);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #444444;\n  font-size: 18px;\n  margin: 0 0 8px 0;\n}\n\n.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #777777;\n  font-size: 14px;\n  margin-bottom: 30px;\n  line-height: 24px;\n}\n\n.login-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background: #f7f7f7 none repeat scroll 0 0;\n  border: 1px solid #d4d4d4;\n  border-radius: 4px;\n  font-size: 14px;\n  height: 50px;\n  line-height: 50px;\n}\n\n.main-div[_ngcontent-%COMP%] {\n  background: #ffffff none repeat scroll 0 0;\n  border-radius: 2px;\n  margin: 10px auto 30px;\n  max-width: 38%;\n  padding: 50px 70px 70px 71px;\n}\n\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  text-decoration: underline;\n}\n\n.login-form[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: orange none repeat scroll 0 0;\n  border-color: orange;\n  color: #ffffff;\n  font-size: 14px;\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  padding: 0;\n}\n\n.forgot[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 30px;\n}\n\n.login-form[_ngcontent-%COMP%]   .btn.btn-primary.reset[_ngcontent-%COMP%] {\n  background: #ff9900 none repeat scroll 0 0;\n}\n\n.back[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: 10px;\n}\n\n.back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 13px;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsY0FBQTtFQUFlLGVBQUE7RUFBZ0IsaUJBQUE7QUFJMUM7O0FBSEE7RUFBVyxjQUFBO0VBQWUsZUFBQTtFQUFnQixtQkFBQTtFQUFvQixpQkFBQTtBQVU5RDs7QUFUQTtFQUNFLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFZRjs7QUFWQTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQWFGOztBQVZBO0VBQ0UsbUJBQUE7QUFhRjs7QUFYQTtFQUFhLGtCQUFBO0FBZWI7O0FBZEE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBaUJGOztBQWZBO0VBQ0UseUNBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsZ0JBQUE7RUFBa0IsbUJBQUE7QUFvQnBCOztBQWxCQTtFQUNFLDBDQUFBO0FBcUJGOztBQW5CQTtFQUFRLGdCQUFBO0VBQWtCLGdCQUFBO0FBd0IxQjs7QUF2QkE7RUFBUyxXQUFBO0VBQWEsZUFBQTtFQUFnQixxQkFBQTtBQTZCdEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwgaDJ7IGNvbG9yOiM0NDQ0NDQ7IGZvbnQtc2l6ZToxOHB4OyBtYXJnaW46MCAwIDhweCAwO31cclxuLnBhbmVsIHAgeyBjb2xvcjojNzc3Nzc3OyBmb250LXNpemU6MTRweDsgbWFyZ2luLWJvdHRvbTozMHB4OyBsaW5lLWhlaWdodDoyNHB4O31cclxuLmxvZ2luLWZvcm0gLmZvcm0tY29udHJvbCB7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNyBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuLm1haW4tZGl2IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvIDMwcHg7XHJcbiAgbWF4LXdpZHRoOiAzOCU7XHJcbiAgcGFkZGluZzogNTBweCA3MHB4IDcwcHggNzFweDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0gLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206MTBweDtcclxufVxyXG4ubG9naW4tZm9ybXsgdGV4dC1hbGlnbjpjZW50ZXI7fVxyXG4uZm9yZ290IGEge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4ubG9naW4tZm9ybSAgLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogb3JhbmdlIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5mb3Jnb3Qge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7IG1hcmdpbi1ib3R0b206MzBweDtcclxufVxyXG4ubG9naW4tZm9ybSAuYnRuLmJ0bi1wcmltYXJ5LnJlc2V0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmY5OTAwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbn1cclxuLmJhY2sgeyB0ZXh0LWFsaWduOiBsZWZ0OyBtYXJnaW4tdG9wOjEwcHg7fVxyXG4uYmFjayBhIHtjb2xvcjogIzMzMzsgZm9udC1zaXplOiAxM3B4O3RleHQtZGVjb3JhdGlvbjogbm9uZTt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_sevices_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "/N0k":
/*!****************************************!*\
  !*** ./src/app/models/paymentModel.ts ***!
  \****************************************/
/*! exports provided: PaymentModel, KeyValuePair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModel", function() { return PaymentModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyValuePair", function() { return KeyValuePair; });
class PaymentModel {
    constructor(cartItems, paymentMethod) {
        this.cart = this.parseCartItems(cartItems);
        this.amount = this.getCartAmount(cartItems);
        this.paymentMethod = paymentMethod;
    }
    parseCartItems(cartItems) {
        var cartArray = new Array();
        cartItems.forEach((item) => {
            cartArray.push(new KeyValuePair(Number.parseInt(item.id.toString()), item.kolicina.toString()));
        });
        return cartArray;
    }
    getCartAmount(cartItems) {
        var totalPrice = 0.0;
        cartItems.forEach((item) => {
            var productPrice = 0;
            productPrice = (Number.parseFloat(item.cijena.toString()) * Number.parseFloat(item.kolicina.toString()));
            totalPrice += productPrice;
        });
        return totalPrice;
    }
}
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}


/***/ }),

/***/ "/co8":
/*!*********************************!*\
  !*** ./src/app/models/email.ts ***!
  \*********************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
class Email {
    /**
     *
     */
    constructor(email) {
        this.email = email;
    }
}


/***/ }),

/***/ "/wRq":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin/admin-category/admin-category.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCategoryComponent", function() { return AdminCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/category */ "HLRD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_sevices_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sevices/categories.service */ "WLZD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AdminCategoryComponent_tr_24_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "event_busy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminCategoryComponent_tr_24_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "event_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminCategoryComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminCategoryComponent_tr_24_div_6_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminCategoryComponent_tr_24_ng_template_7_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminCategoryComponent_tr_24_Template_button_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const cat_r4 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.editCategoryBtn($event, cat_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminCategoryComponent_tr_24_Template_button_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const cat_r4 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.removeCategoryBtn($event, cat_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r4.naziv);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cat_r4.izbrisano)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "editCategoryBtn", cat_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", cat_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "removeCategoryBtn", cat_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", cat_r4.id);
} }
function AdminCategoryComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add New Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Category Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminCategoryComponent_div_26_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.OnAddCategoryCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminCategoryComponent_div_26_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.OnAddCategoryConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.addCategoryForm);
} }
function AdminCategoryComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminCategoryComponent_div_27_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.OnEditCategoryCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminCategoryComponent_div_27_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.OnEditCategoryConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.editCategoryForm);
} }
function AdminCategoryComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Remove item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Inactive \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "(if checked - item will not be used)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "You won't be able to undo this action. Please check if this item is the one you want to remove.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminCategoryComponent_div_28_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.OnRemoveCategoryCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminCategoryComponent_div_28_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.OnRemoveCategoryConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.removeCategoryForm);
} }
class AdminCategoryComponent {
    constructor(categoriesService, formBuilder) {
        this.categoriesService = categoriesService;
        this.formBuilder = formBuilder;
        this.title = "Admin - Categories";
        this.showInactive = false;
        this.OnReloadClick();
    }
    ngOnInit() {
        this.initForms();
        document.title = this.title;
        this.addCategoryFormShown = false;
        this.editCategoryFormShown = false;
        this.removeCategoryFormShown = false;
    }
    OnShowActiveChange(event) {
        this.showInactive = !this.showInactive;
        this.OnReloadClick();
    }
    OnReloadClick() {
        if (this.showInactive) {
            this.categories = this.categoriesService.getAllCategories();
        }
        else {
            this.categories = this.categoriesService.getActiveCategories();
        }
        if (this.disabledBtn != null) {
            this.disabledBtn.disabled = false;
            this.resetAllForms();
            this.hideAllForms();
        }
        this.ngOnInit();
    }
    initForms() {
        this.addCategoryForm = this.formBuilder.group({
            addName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.editCategoryForm = this.formBuilder.group({
            editId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            editName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            editActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.removeCategoryForm = this.formBuilder.group({
            removeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            removeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            removeActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    resetAllForms() {
        this.addCategoryForm.reset();
        this.removeCategoryForm.reset();
        this.editCategoryForm.reset();
    }
    hideAllForms() {
        this.addCategoryFormShown = false;
        this.editCategoryFormShown = false;
        this.removeCategoryFormShown = false;
    }
    // Add function
    addCategoryBtn(event) {
        //console.log('add category btn clicked');
        this.resetAllForms();
        this.hideAllForms();
        this.addCategoryFormShown = true;
        this.disabledBtn = event.target;
        this.disabledBtn.disabled = true;
    }
    OnAddCategoryCancel() {
        //console.log('adding category canceled');
        this.resetAllForms();
        this.hideAllForms();
        this.disabledBtn.disabled = false;
    }
    OnAddCategoryConfirm() {
        //console.log('adding category submitted');
        this.addCategoryFormShown = false;
        this.disabledBtn.disabled = false;
        if (this.addCategoryForm.valid) {
            let cat = new src_app_models_category__WEBPACK_IMPORTED_MODULE_1__["Category"]();
            cat.Naziv = this.addCategoryForm.get('addName').value;
            this.categoriesService
                .addCategory(cat)
                .subscribe(result => {
                //alert(result);
                window.location.reload();
            });
        }
    }
    //Edit function
    editCategoryBtn(event, id) {
        //console.log('add category btn clicked');
        this.resetAllForms();
        this.hideAllForms();
        this.fillEditCategoryForm(id);
    }
    fillEditCategoryForm(id) {
        this.categoriesService.getCategoryById(id)
            .subscribe(result => {
            this.category = Object.assign(new src_app_models_category__WEBPACK_IMPORTED_MODULE_1__["Category"](), result);
            //console.log(this.category);
            let id = this.category['id'];
            let name = this.category['naziv'];
            let active = this.category['izbrisano'];
            this.editCategoryForm = this.formBuilder.group({
                editId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: id, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                editName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                editActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](active)
            });
            this.editCategoryFormShown = true;
            this.disabledBtn = event.target;
            this.disabledBtn.disabled = true;
        });
    }
    OnEditCategoryConfirm() {
        let cat = new src_app_models_category__WEBPACK_IMPORTED_MODULE_1__["Category"]();
        cat.Id = this.editCategoryForm.get('editId').value;
        cat.Izbrisano = this.editCategoryForm.get('editActive').value;
        cat.Naziv = this.editCategoryForm.get('editName').value;
        this.categoriesService
            .editCategory(cat)
            .subscribe(result => {
            alert(result);
            window.location.reload();
        });
    }
    OnEditCategoryCancel() {
        this.disabledBtn.disabled = false;
        this.resetAllForms();
        this.hideAllForms();
    }
    //Remove function
    removeCategoryBtn(event, id) {
        //console.log('add category btn clicked');
        this.resetAllForms();
        this.hideAllForms();
        this.fillRemoveCategoryForm(id);
    }
    OnRemoveCategoryCancel() {
        //console.log('removing category canceled');
        this.disabledBtn.disabled = false;
        this.resetAllForms();
        this.hideAllForms();
    }
    OnRemoveCategoryConfirm() {
        //console.log('Remove confirmed - id: ' + this.category['id']);
        this.categoriesService
            .deleteCategory(this.category['id'])
            .subscribe(result => {
            this.resetAllForms();
            this.hideAllForms();
            window.location.reload();
        });
    }
    fillRemoveCategoryForm(id) {
        this.categoriesService.getCategoryById(id)
            .subscribe(result => {
            this.category = Object.assign(new src_app_models_category__WEBPACK_IMPORTED_MODULE_1__["Category"](), result);
            //console.log(this.category);
            let id = this.category['id'];
            let name = this.category['naziv'];
            let active = this.category['izbrisano'];
            this.removeCategoryForm = this.formBuilder.group({
                removeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: id, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                removeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: name, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                removeActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: active, disabled: true })
            });
            this.removeCategoryFormShown = true;
            this.disabledBtn = event.target;
            this.disabledBtn.disabled = true;
        });
    }
}
AdminCategoryComponent.ɵfac = function AdminCategoryComponent_Factory(t) { return new (t || AdminCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sevices_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
AdminCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminCategoryComponent, selectors: [["app-admin-category"]], decls: 29, vars: 6, consts: [[1, "row"], [1, "col-8", "text-center"], ["type", "checkbox", "id", "toggleActive", 1, "checkbox", 3, "change"], ["id", "lblToggleActive", "for", "toggleActive"], ["id", "addCategoryBtn", 1, "btn", "btn-lg", "btn-primary", "col-xs-12", 3, "click"], ["id", "productsTable", 1, "table", "table-responsive", "table-hover", "text-center", "m-0", "p-0", 2, "overflow-y", "scroll", "height", "80vh", "width", "60%"], [2, "background-color", "#333", "color", "orange"], ["id", "tableBody"], [4, "ngFor", "ngForOf"], ["id", "addCategoryForm", "class", "card card-body m-2 col-3", 4, "ngIf"], ["id", "editCategoryForm", "class", "card card-body m-2  my-0 col-3", 4, "ngIf"], ["id", "removeCategoryForm", "class", "card card-body m-2 my-0 col-3", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["other_active_state", ""], [1, "btn-group"], [1, "btn", "btn-sm", "btn-outline-success", 3, "id", "value", "click"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "id", "value", "click"], [1, "material-icons", "red"], [1, "material-icons", "green"], ["id", "addCategoryForm", 1, "card", "card-body", "m-2", "col-3"], [3, "formGroup"], [1, "card-header"], [1, "card-body"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], ["formControlName", "addName", "required", "", "type", "text", "minlength", "3", "maxlength", "50", "name", "name", "id", "AddName", "aria-describedby", "basic-addon3", 1, "form-control"], [1, "card-footer"], ["id", "addCategoryFormCancel", "type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "addCategoryFormConfirm", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "editCategoryForm", 1, "card", "card-body", "m-2", "my-0", "col-3"], [1, "col-12"], ["id", "editModalItemInfo"], ["readonly", "", "type", "text", "minlength", "1", "maxlength", "50", "name", "id", "id", "editId", "formControlName", "editId", "name", "editId", "aria-describedby", "basic-addon3", 1, "form-control"], ["type", "text", "minlength", "3", "maxlength", "50", "formControlName", "editName", "name", "editName", "id", "editName", "aria-describedby", "basic-addon3", 1, "form-control"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "name", "editActive", "formControlName", "editActive", "id", "editActive", 1, "custom-control-input"], ["for", "editActive", 1, "custom-control-label"], ["id", "btnEditCancel", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "btnEditSubmit", 1, "btn", "btn-success", 3, "click"], ["id", "removeCategoryForm", 1, "card", "card-body", "m-2", "my-0", "col-3"], ["readonly", "", "formControlName", "removeId", "type", "text", "minlength", "1", "maxlength", "50", "name", "removeId", "id", "removeId", "aria-describedby", "basic-addon3", "value", "", "placeholder", "", 1, "form-control"], ["readonly", "", "required", "", "formControlName", "removeName", "type", "text", "minlength", "3", "maxlength", "50", "name", "removeName", "id", "removeName", "value", "", "aria-describedby", "basic-addon3", 1, "form-control"], ["readonly", "", "type", "checkbox", "formControlName", "removeActive", "name", "removeActive", "id", "removeActive", 1, "custom-control-input"], ["for", "removeActive", 1, "custom-control-label"], [1, "text-danger"], ["id", "btnRemoveCancel", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "btnRemoveSubmit", "type", "submit", 1, "btn", "btn-danger", 3, "click"]], template: function AdminCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdminCategoryComponent_Template_input_change_6_listener($event) { return ctx.OnShowActiveChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Show inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminCategoryComponent_Template_button_click_10_listener($event) { return ctx.addCategoryBtn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "New Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Category name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AdminCategoryComponent_tr_24_Template, 15, 8, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AdminCategoryComponent_div_26_Template, 16, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AdminCategoryComponent_div_27_Template, 28, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AdminCategoryComponent_div_28_Template, 29, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 4, ctx.categories));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addCategoryFormShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editCategoryFormShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.removeCategoryFormShown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".table-wrapper[_ngcontent-%COMP%] {\n  width: 700px;\n  margin: 30px auto;\n  background: #fff;\n  padding: 20px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.table-title[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n  margin: 0 0 10px;\n}\n\n.table-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 22px;\n}\n\n.table-title[_ngcontent-%COMP%]   .add-new[_ngcontent-%COMP%] {\n  float: right;\n  height: 30px;\n  font-weight: bold;\n  font-size: 12px;\n  text-shadow: none;\n  min-width: 100px;\n  border-radius: 50px;\n  line-height: 13px;\n}\n\n.table-title[_ngcontent-%COMP%]   .add-new[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n\ntable.table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n\ntable.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-color: #e9e9e9;\n}\n\ntable.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0 5px;\n  cursor: pointer;\n}\n\ntable.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  width: 100px;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  margin: 0 5px;\n  min-width: 24px;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.add[_ngcontent-%COMP%] {\n  color: #27C46B;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.edit[_ngcontent-%COMP%] {\n  color: #FFC107;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.delete[_ngcontent-%COMP%] {\n  color: #E34724;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.add[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-right: -1px;\n  position: relative;\n  top: 3px;\n}\n\ntable.table[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 32px;\n  line-height: 32px;\n  box-shadow: none;\n  border-radius: 2px;\n}\n\ntable.table[_ngcontent-%COMP%]   .form-control.error[_ngcontent-%COMP%] {\n  border-color: #f50000;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.fixedTableHead[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 30vh;\n}\n\n.fixedTableHead[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1jYXRlZ29yeS9hZG1pbi1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0FBQUo7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURBO0VBQ0ksaUJBQUE7QUFJSjs7QUFGQTtFQUNJLG1CQUFBO0FBS0o7O0FBSEE7RUFDSSxxQkFBQTtBQU1KOztBQUpBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBT0o7O0FBTEE7RUFDSSxZQUFBO0FBUUo7O0FBTkE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQVNKOztBQVBBO0VBQ0ksY0FBQTtBQVVKOztBQVJBO0VBQ0ksY0FBQTtBQVdKOztBQVRBO0VBQ0ksY0FBQTtBQVlKOztBQVZBO0VBQ0ksZUFBQTtBQWFKOztBQVhBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBY0o7O0FBWkE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBZUo7O0FBYkE7RUFDSSxxQkFBQTtBQWdCSjs7QUFkQTtFQUNJLGFBQUE7QUFpQko7O0FBZkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFrQko7O0FBaEJBO0VBQ0ksZ0JBQUE7RUFDQSxNQUFBO0FBbUJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1jYXRlZ29yeS9hZG1pbi1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGFibGUtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1x0XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpO1xyXG59XHJcbi50YWJsZS10aXRsZSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxuLnRhYmxlLXRpdGxlIGgyIHtcclxuICAgIG1hcmdpbjogNnB4IDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4udGFibGUtdGl0bGUgLmFkZC1uZXcge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbn1cclxuLnRhYmxlLXRpdGxlIC5hZGQtbmV3IGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxudGFibGUudGFibGUge1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG50YWJsZS50YWJsZSB0ciB0aCwgdGFibGUudGFibGUgdHIgdGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTllOWU5O1xyXG59XHJcbnRhYmxlLnRhYmxlIHRoIGkge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG50YWJsZS50YWJsZSB0aDpsYXN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBtaW4td2lkdGg6IDI0cHg7XHJcbn0gICAgXHJcbnRhYmxlLnRhYmxlIHRkIGEuYWRkIHtcclxuICAgIGNvbG9yOiAjMjdDNDZCO1xyXG59XHJcbnRhYmxlLnRhYmxlIHRkIGEuZWRpdCB7XHJcbiAgICBjb2xvcjogI0ZGQzEwNztcclxufVxyXG50YWJsZS50YWJsZSB0ZCBhLmRlbGV0ZSB7XHJcbiAgICBjb2xvcjogI0UzNDcyNDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBhLmFkZCBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTFweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogM3B4O1xyXG59ICAgIFxyXG50YWJsZS50YWJsZSAuZm9ybS1jb250cm9sIHtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG50YWJsZS50YWJsZSAuZm9ybS1jb250cm9sLmVycm9yIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y1MDAwMDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCAuYWRkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmZpeGVkVGFibGVIZWFkIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGhlaWdodDogMzB2aDtcclxufVxyXG4uZml4ZWRUYWJsZUhlYWQgdGhlYWQgdGgge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-category',
                templateUrl: './admin-category.component.html',
                styleUrls: ['./admin-category.component.scss']
            }]
    }], function () { return [{ type: src_app_sevices_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\r3nb0\source\repos\Cascadus\cascadus\ng-cascadus\src\main.ts */"zUnb");


/***/ }),

/***/ "0+sa":
/*!*********************************!*\
  !*** ./src/app/models/buyer.ts ***!
  \*********************************/
/*! exports provided: Buyer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buyer", function() { return Buyer; });
class Buyer {
}


/***/ }),

/***/ "007D":
/*!****************************************************************************!*\
  !*** ./src/app/components/public/corvus-cancel/corvus-cancel.component.ts ***!
  \****************************************************************************/
/*! exports provided: CorvusCancelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorvusCancelComponent", function() { return CorvusCancelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_sevices_payment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sevices/payment.service */ "yynU");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CorvusCancelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Jurim!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CorvusCancelComponent {
    constructor(route, _paymentService, toastr, router) {
        this.route = route;
        this._paymentService = _paymentService;
        this.toastr = toastr;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.orderNumber = params['order_number'];
            this.signature = params['signature'];
            this.language = params['language'];
            this.approvalCode = params['approval_code'];
        });
        var token = localStorage.getItem('X-XSRF-TOKEN').toString();
        console.log('orderNumber: ' +
            this.orderNumber +
            ' lang:' +
            this.language +
            ' approvalCode:' +
            this.approvalCode +
            ' signature:' +
            this.signature +
            ' xsrfToken:' +
            token);
        this._paymentService
            .cancelCorvusPayment(this.orderNumber, this.language, token)
            .subscribe((data) => {
            window.location.href = 'order-fail/' + data['value']['buyerId'].toString();
            // this.router.navigate([
            //   'order-fail/' + data['value']['buyerId'].toString(),
            // ]);
        });
    }
}
CorvusCancelComponent.ɵfac = function CorvusCancelComponent_Factory(t) { return new (t || CorvusCancelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sevices_payment_service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CorvusCancelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CorvusCancelComponent, selectors: [["app-corvus-cancel"]], decls: 1, vars: 1, consts: [["class", "loading-overlay", 4, "ngIf"], [1, "loading-overlay"], ["aria-hidden", "false", "role", "status", 1, "text-center"], ["alt", "cascadus pinguin with rocket - loading", "src", "../../../../assets/pinguin-rocket.png", 1, "spinner-pinguin", 2, "height", "100px", "width", "100px"], [1, "grey-text", "d-block"]], template: function CorvusCancelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CorvusCancelComponent_div_0_Template, 5, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL2NvcnZ1cy1jYW5jZWwvY29ydnVzLWNhbmNlbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CorvusCancelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-corvus-cancel',
                templateUrl: './corvus-cancel.component.html',
                styleUrls: ['./corvus-cancel.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_sevices_payment_service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "3loq":
/*!******************************************************************!*\
  !*** ./src/app/components/public/checkout/checkout.component.ts ***!
  \******************************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_paymentModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/paymentModel */ "/N0k");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/order */ "Rb4e");
/* harmony import */ var _models_buyer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../models/buyer */ "0+sa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_discountCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/discountCode */ "HYO+");
/* harmony import */ var src_app_sevices_payment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sevices/payment.service */ "yynU");
/* harmony import */ var _sevices_invoices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../sevices/invoices.service */ "vvq5");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_sevices_products_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sevices/products.service */ "IsAJ");
/* harmony import */ var src_app_sevices_discounts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/sevices/discounts.service */ "5y8b");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_sevices_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/sevices/cookie.service */ "vLfE");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");

















function CheckoutComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h4", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Naru\u010Dujete:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "U ko\u0161arici se ne nalaze proizvodi. Nije mogu\u0107e nastaviti s naplatom!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CheckoutComponent_ng_template_75_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "strong", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Cijena: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CheckoutComponent_ng_template_75_div_5_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const item_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r10.onDecreaseCartItem(item_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CheckoutComponent_ng_template_75_div_5_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const item_r9 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r12.onIncreaseCartItem(item_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CheckoutComponent_ng_template_75_div_5_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const item_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r13.onRemoveCartItem(item_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", "cartItem" + item_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r9.kolicina, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/product/" + item_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r9.naziv, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](10, 6, item_r9.cijena, "1.2-2"), " kn)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](15, 9, item_r9.cijena * item_r9.kolicina, "1.2-2"), " kn");
} }
function CheckoutComponent_ng_template_75_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CheckoutComponent_ng_template_75_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "b", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Jedno ili vi\u0161e polja nisu ispravno popunjeni. Molimo Vas da provjerite podatke, a zatim poku\u0161ajte ponovo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CheckoutComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h4", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Naru\u010Dujete:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CheckoutComponent_ng_template_75_div_5_Template, 27, 12, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Ukupna cijena svih proizvoda: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "b", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " kn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Cijena usluge slanja paketa: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "b", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "kn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Popust kod:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CheckoutComponent_ng_template_75_Template_input_change_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.changeDiscountCodeBlockState(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CheckoutComponent_ng_template_75_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.checkCouponCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Provjeri");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, CheckoutComponent_ng_template_75_div_37_Template, 3, 0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Ukupno: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "b", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](42, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, " kn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, CheckoutComponent_ng_template_75_div_44_Template, 3, 0, "div", 69);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.cartItemsArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 6, ctx_r2.totalPriceNoShipping, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](17, 9, ctx_r2.shippingCost, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.discountCodeLoading && ctx_r2.discountCodeInputShown);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](42, 12, ctx_r2.totalPrice, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isFormCorrect);
} }
function CheckoutComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Naru\u010Di odmah");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CheckoutComponent_ng_template_78_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Naru\u010Di odmah");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CheckoutComponent_ng_template_78_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Slanje...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CheckoutComponent_ng_template_78_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CheckoutComponent_ng_template_78_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.OnPlaceInstantOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CheckoutComponent_ng_template_78_div_1_Template, 5, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CheckoutComponent_ng_template_78_ng_template_2_Template, 5, 0, "ng-template", null, 87, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r5.sending)("ngIfElse", _r18);
} }
class CheckoutComponent {
    constructor(fb, paymentService, invoiceService, toastr, productService, discountsService, router, cookieService, titleService) {
        this.fb = fb;
        this.paymentService = paymentService;
        this.invoiceService = invoiceService;
        this.toastr = toastr;
        this.productService = productService;
        this.discountsService = discountsService;
        this.router = router;
        this.cookieService = cookieService;
        this.titleService = titleService;
        this.totalPrice = 0;
        this.totalPriceNoShipping = 0;
        this.isFormCorrect = true;
        this.cartItemsArray = new Array();
        this.numOfCartItems = 0;
        this.shippingCost = 30;
        this.cartEmpty = true;
        this.discountCode = null;
        this.discountCodeLoading = false;
        this.discountCodeInputShown = false;
        this.sending = false;
        this.titleService.setTitle('Cascadus - Naplata');
    }
    ngOnInit() {
        this.initForms();
        this.checkCart();
    }
    initForms() {
        this.buyerForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2)]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2),
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8),
            ]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8),
            ]),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3),
            ]),
            houseNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1),
            ]),
            postCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5),
            ]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2)]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2),
            ]),
            paymentMethod: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('OnDelivery', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    resetForms() {
        this.buyerForm.reset();
        this.isFormCorrect = true;
    }
    checkCart() {
        this.numOfCartItems = 0;
        var cart = localStorage.getItem('cart');
        if (cart != null || cart != undefined) {
            this.cartItemsArray = JSON.parse(cart);
            this.cartItemsArray.forEach((item) => {
                this.numOfCartItems =
                    Number.parseInt(this.numOfCartItems.toString()) +
                        Number.parseInt(item.kolicina.toString());
            });
        }
        if (this.numOfCartItems != 0) {
            this.cartEmpty = false;
        }
        this.updateTotalPrice();
    }
    OnPlaceInstantOrder() {
        this.buyer = this.getBuyerFromForm();
        var message = this.buyerForm.get('message').value;
        var paymentMethod = this.buyerForm.get('paymentMethod').value;
        if (this.isFormCorrect &&
            this.cartItemsArray.length >= 1 &&
            this.buyer != null) {
            document.getElementById('instantOrderBtn').disabled = true;
            this.sending = true;
            this.orderCartItems(this.cartItemsArray, this.buyer, message, paymentMethod);
        }
        else {
            this.toastr.show('Niste unijeli sve podatke! Za uspješno izvršavanje narudžbe je potrebno ispravno popuniti sva polja.', 'Naručivanje');
            this.sending = false;
            // setTimeout(() => {
            //   window.location.reload();
            // }, 2500);
        }
    }
    onDecreaseCartItem(itemId) {
        this.cartItemsArray.forEach((el) => {
            if (el.id == itemId) {
                if (el.kolicina > 1) {
                    el.kolicina = el.kolicina - 1;
                }
                else {
                    this.onRemoveCartItem(itemId);
                }
            }
        });
        this.animateCartItem(itemId, '-');
        this.updateCartItems();
    }
    onIncreaseCartItem(itemId) {
        this.cartItemsArray.forEach((el) => {
            if (el.id == itemId) {
                if (el.kolicina <= 98) {
                    el.kolicina = el.kolicina + 1;
                }
                else {
                    setTimeout(() => {
                        this.toastr.success('Nije moguće dodati više od 99 komada proizvoda: ' +
                            el.naziv +
                            '.', 'Košarica');
                    }, 900);
                }
            }
        });
        this.animateCartItem(itemId, '+');
        this.updateCartItems();
    }
    onRemoveCartItem(itemId) {
        var newCartItemsArray = new Array();
        this.cartItemsArray.forEach((el) => {
            if (el.id != itemId) {
                newCartItemsArray.push(el);
            }
        });
        this.cartItemsArray = newCartItemsArray;
        this.animateCartItem(itemId, 'del');
        setTimeout(() => {
            this.toastr.success('Proizvod je uspješno uklonjen iz vaše košarice.', 'Košarica');
        }, 900);
        this.updateCartItems();
    }
    updateCartItems() {
        localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify(this.cartItemsArray));
        this.checkCart();
    }
    orderCartItems(cartItems, buyer, message, paymentMethod) {
        if (this.numOfCartItems != 0) {
            document.getElementById('instantOrderBtn').disabled = true;
            this.sending = true;
            var paymentModel = new src_app_models_paymentModel__WEBPACK_IMPORTED_MODULE_1__["PaymentModel"](cartItems, paymentMethod);
            var order = new src_app_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](buyer, message, paymentModel);
            if (this.discountCode != null &&
                this.discountCode != undefined &&
                this.discountCode != null) {
                order.discountCode = this.discountCode.popustKod;
            }
            this.paymentService.pay(order).subscribe((response) => {
                var data = response['body'];
                //status codes: 0 - success, 1 - fail, 2 - pending
                //ondelivery success
                if (data['value']['statusCode'] == 0) {
                    setTimeout(() => {
                        this.toastr.success('Tvoja narudžba je uspješno zaprimljena!', 'Košarica');
                    }, 500);
                    setTimeout(() => {
                        this.router.navigate([
                            'order-success/' + data['value']['buyerId'].toString(),
                        ]);
                    }, 1500);
                }
                //corvus pay
                else if (data['value']['statusCode'] == 2) {
                    var paymentUrl = data['value']['paymentUrl'].toString();
                    var parameters = data['value']['parameters'];
                    var token = response.headers.get('X-XSRF-TOKEN');
                    localStorage.setItem('X-XSRF-TOKEN', token);
                    setTimeout(() => {
                        this.toastr.success('Sve što je ostalo za napraviti je to da platiš svoju narudžbu preko Corvus Pay platnog sistema. ' +
                            'Čim završiš plaćanje, odmah se bacamo na posao i pripremamo tvoju narudžbu za kurirsku službu!', 'Košarica');
                    }, 500);
                    setTimeout(() => {
                        //redirecting client to CorvusPay payment gateway
                        const mapForm = document.createElement('form');
                        mapForm.target = '_self';
                        mapForm.method = 'POST';
                        mapForm.action = paymentUrl;
                        mapForm.id = 'corvusPayForm';
                        mapForm.name = 'corvusPayForm';
                        mapForm.style.display = 'none';
                        //adding xsrf token
                        const xsrfElement = document.createElement('input');
                        xsrfElement.type = 'hidden';
                        xsrfElement.name = '_csrf';
                        xsrfElement.setAttribute('value', token);
                        mapForm.append(xsrfElement);
                        //adding hidden form inputs
                        for (let i = 0; i < parameters.length; i++) {
                            const param = parameters[i];
                            const mapInput = document.createElement('input');
                            mapInput.type = 'hidden';
                            mapInput.name = param['Key'].toString();
                            mapInput.setAttribute('value', param['Value'].toString());
                            mapForm.appendChild(mapInput);
                        }
                        //adding, submitting and removing form
                        document.body.appendChild(mapForm);
                        console.log(mapForm);
                        mapForm.submit();
                        mapForm.remove();
                    }, 1500);
                }
                //fail
                else {
                    setTimeout(() => {
                        this.toastr.info('Nažalost tvoja narudžba nije prošla. Molimo te da provjeriš sve podatke, količine proizvoda, te da pokušaš ponovo naručiti stvari iz košarice.', 'Košarica');
                    }, 500);
                    setTimeout(() => {
                        this.router.navigate([
                            'order-fail/' + data['value']['buyerId'].toString(),
                        ]);
                    }, 1500);
                }
                document.getElementById('instantOrderBtn').disabled = false;
                this.sending = false;
            }),
                (error) => {
                    //console.log(error);
                    document.getElementById('instantOrderBtn').disabled = false;
                    this.sending = false;
                    setTimeout(() => {
                        this.toastr.error('Ispričavamo se na neugodnosti, no izgleda da je došlo do greške. Molimo te da pokušaš ponovo. Ukoliko se problem nastavi pojavljivati, kontaktiraj našu podršku!', 'Ups, Greška!');
                    }, 1000);
                    window.location.reload();
                };
        }
        else if (this.numOfCartItems == 0) {
            this.toastr.show('Ups! U ovoj košarici ne postoje proizvodi. Prvo dodajte proizvod/e u košaricu, a zatim pokušajte ponovo.', 'Košarica');
        }
        else {
            this.toastr.show('Ispričavamo se na neugodnosti, no izgleda da je došlo do greške. Molimo te da pokušaš ponovo. Ukoliko se problem nastavi pojavljivati, kontaktiraj našu podršku!', 'Ups, Greška!');
        }
    }
    getBuyerFromForm() {
        var data = new _models_buyer__WEBPACK_IMPORTED_MODULE_3__["Buyer"]();
        data.ime = this.buyerForm.get('name').value;
        data.prezime = this.buyerForm.get('surname').value;
        data.email = this.buyerForm.get('email').value;
        data.kontakt = this.buyerForm.get('phone').value;
        data.ulica = this.buyerForm.get('street').value;
        data.kucniBroj = this.buyerForm.get('houseNumber').value;
        data.postanskiBroj = this.buyerForm.get('postCode').value;
        data.grad = this.buyerForm.get('city').value;
        if (data.ime.length < 1 ||
            data.prezime.length < 1 ||
            data.email.length < 7 ||
            data.kontakt.length < 7 ||
            data.ulica.length < 2 ||
            data.kucniBroj.length < 0 ||
            data.postanskiBroj.length <= 5 ||
            data.grad.length < 1) {
            this.isFormCorrect = false;
            return null;
        }
        else {
            this.isFormCorrect = true;
            return data;
        }
    }
    animateCartItem(itemId, state) {
        var divId = 'cartItem' + itemId;
        switch (state) {
            case '+':
                document.getElementById(divId).classList.add('alert', 'alert-success');
                setTimeout(() => {
                    document
                        .getElementById(divId)
                        .classList.remove('alert', 'alert-success');
                }, 750);
                break;
            case '-':
                document.getElementById(divId).classList.add('alert', 'alert-danger');
                setTimeout(() => {
                    document
                        .getElementById(divId)
                        .classList.remove('alert', 'alert-danger');
                }, 750);
                break;
            case 'del':
                document.getElementById(divId).classList.add('alert', 'red');
                break;
        }
    }
    changeDiscountCodeBlockState() {
        var cbDiscountCodeSwitch = document.getElementById('cbDiscountCodeSwitch');
        var divDiscountCode = document.getElementById('divDiscountCode');
        if (cbDiscountCodeSwitch.checked) {
            divDiscountCode.style.display = 'block';
            this.discountCodeInputShown = true;
        }
        else {
            this.discountCodeInputShown = false;
            divDiscountCode.style.display = 'none';
        }
    }
    checkCouponCode() {
        var code = document.getElementById('txtDiscountCode');
        var lblDiscountStatus = document.getElementById('lblDiscountStatus');
        if (code.value.length >= 3) {
            this.discountCodeLoading = true;
            this.discountsService.checkDiscountCode(code.value).subscribe((result) => {
                if (result != null) {
                    this.discountCode = new src_app_models_discountCode__WEBPACK_IMPORTED_MODULE_5__["DiscountCode"]();
                    Object.assign(this.discountCode, result);
                    lblDiscountStatus.style.color = 'green';
                    lblDiscountStatus.textContent =
                        'Popust kod je valjan! Omogućen vam je popust od: ' +
                            this.discountCode['popustUpostocima'] +
                            '%!';
                }
                else {
                    lblDiscountStatus.style.color = 'red';
                    lblDiscountStatus.textContent =
                        'Popust kod je istekao ili je neispravan!';
                    code.value = '';
                    this.discountCode = null;
                }
                this.discountCodeLoading = false;
                this.updateTotalPrice();
            }, (error) => {
                this.toastr.error('Došlo je do greške s provjerom koda. Molimo te da provjeriš kod i da pokušaš ponovo. Ukoliko se problem nastavi pojavljivati, javi se podršci. Hvala!', 'Popust kod - Naručivanje');
                this.discountCodeLoading = false;
                code.value = '';
                this.discountCode = null;
                this.updateTotalPrice();
            });
        }
        else {
            this.discountCode = null;
            lblDiscountStatus.style.color = 'red';
            lblDiscountStatus.textContent = 'Neispravan popust kod!';
            code.value = '';
        }
        this.updateTotalPrice();
    }
    updateTotalPrice() {
        var lblOldPrice = document.getElementById('lblOldPrice');
        this.totalPriceNoShipping = 0;
        this.cartItemsArray.forEach((el) => {
            this.totalPriceNoShipping +=
                Number.parseFloat(el.cijena.toString()) *
                    Number.parseInt(el.kolicina.toString());
        });
        if (this.discountCode == null) {
            this.totalPrice = this.totalPriceNoShipping + this.shippingCost;
            lblOldPrice.textContent = '';
        }
        else {
            var discount = Number.parseInt(this.discountCode['popustUpostocima'].toString()) / 100;
            lblOldPrice.style.display = 'block';
            lblOldPrice.style.color = 'green';
            lblOldPrice.textContent =
                'Stara cijena: ' + this.totalPriceNoShipping + ' kn';
            this.totalPrice =
                this.totalPriceNoShipping -
                    this.totalPriceNoShipping * discount +
                    this.shippingCost;
        }
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sevices_payment_service__WEBPACK_IMPORTED_MODULE_6__["PaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_sevices_invoices_service__WEBPACK_IMPORTED_MODULE_7__["InvoicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sevices_products_service__WEBPACK_IMPORTED_MODULE_9__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sevices_discounts_service__WEBPACK_IMPORTED_MODULE_10__["DiscountsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sevices_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["Title"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 80, vars: 5, consts: [["id", "order-product", 1, "py-5", "mt-5", 2, "background", "url('../../../../assets/svg/undraw_checkout.svg') no-repeat center center/contain"], [1, "row", "m-0", "p-0", "mt-5"], [1, "col-12", "text-center", "m-0", "p-0"], [1, "pb-3"], ["id", "orderForm", 3, "formGroup"], [1, "row", "text-center", "px-2"], [1, "col-xs-12", "col-md-6"], [1, ""], ["id", "account-circle-image", 1, "input-group-text", "border-dark", "bg-dark", "orange-text"], [1, "material-icons", "orange-text", "pull-left", "mr-1"], [1, "input-group", "mb-3"], ["required", "", "type", "text", "minlength", "2", "maxlength", "50", "placeholder", "Josip", "name", "name", "formControlName", "name", "id", "name", "aria-describedby", "name", 1, "form-control", "d-block"], ["required", "", "type", "text", "minlength", "2", "maxlength", "50", "placeholder", "Horvat", "name", "surname", "formControlName", "surname", "id", "surname", "aria-describedby", "surname", 1, "form-control", "d-block"], ["id", "email", 1, "input-group-text", "border-dark", "bg-dark", "orange-text"], ["required", "", "type", "email", "minlength", "6", "maxlength", "50", "placeholder", "myEmail@mail.com", "name", "email", "formControlName", "email", "id", "email", "aria-describedby", "email", 1, "form-control"], ["id", "phone-number", 1, "input-group-text", "border-dark", "bg-dark", "orange-text"], ["required", "", "type", "tel", "minlength", "8", "maxlength", "12", "placeholder", "0987654321", "name", "phone", "formControlName", "phone", "id", "phone", "aria-describedby", "phone-number", 1, "form-control"], [1, "card", "p-auto", "mb-3"], ["id", "address", 1, "input-group-text", "border-dark", "bg-dark", "orange-text"], [1, "input-group"], ["required", "", "type", "text", "minlength", "2", "maxlength", "50", "placeholder", "Zagreba\u010Dka cesta", "name", "street", "formControlName", "street", "id", "street", "aria-describedby", "address", 1, "form-control"], ["required", "", "type", "text", "minlength", "1", "maxlength", "5", "placeholder", "12b", "name", "houseNumber", "formControlName", "houseNumber", "id", "houseNumber", "aria-describedby", "address", 1, "form-control"], ["id", "post-code", 1, "input-group-text", "border-dark", "bg-dark", "orange-text"], ["required", "", "type", "number", "min", "10000", "max", "53296", "placeholder", "10000", "name", "postCode", "formControlName", "postCode", "id", "postCode", "aria-describedby", "post-code", 1, "form-control"], ["id", "city", 1, "input-group-text", "border-dark", "bg-dark", "orange-text"], ["required", "", "type", "text", "minlength", "3", "maxlength", "50", "placeholder", "Zagreb", "name", "city", "formControlName", "city", "id", "city", "aria-describedby", "city", 1, "form-control"], [1, "card", "p-auto", "pb-2", "mb-3"], ["id", "nacinPlacanja", 1, "input-group-text", "border-dark", "bg-dark", "orange-text"], [1, "form-check", "d-inline"], ["id", "paymentMethodDelivery", "checked", "", "name", "paymentMethod", "type", "radio", "value", "OnDelivery", "formControlName", "paymentMethod", 1, "form-check-input", "checked"], ["for", "paymentMethodDelivery", 1, "form-check-label", "lead"], ["id", "paymentMethodNow", "name", "paymentMethod", "type", "radio", "value", "CorvusPay", "formControlName", "paymentMethod", 1, "form-check-input"], ["for", "paymentMethodNow", 1, "form-check-label", "lead"], [1, "card", "p-auto"], [1, "input-group-text", "border-dark", "bg-dark", "orange-text"], [1, "material-icons", "orange-text", "mr-1", "pull-left"], ["minlength", "0", "formControlName", "message", "maxlength", "250", "aria-label", "textarea", "placeholder", "Ovdje mo\u017Eete ostaviti poruku za prodava\u010Da...", "aria-describedby", "message-to-seller", 1, "form-control"], ["id", "cartEmptyCard", 4, "ngIf", "ngIfElse"], ["cartItems", ""], [4, "ngIf", "ngIfElse"], ["payButton", ""], ["id", "cartEmptyCard"], [1, "card"], [1, "card-header"], [1, "my-auto", "pt-2"], [1, "card-body"], [1, "p-2", "text-center", "mb-2"], [1, "d-flex", "justify-content-between", "alert", "alert-danger", "align-items-center"], [1, "red-text"], ["class", "card p-2 text-center mb-2", 3, "id", 4, "ngFor", "ngForOf"], [1, "card-footer"], ["id", "cartTotalNoShipping"], [1, "idShippingCost"], [1, "row"], [1, "col-md-6", "col-xs-12"], [1, "d-inline", "mr-3"], [1, "d-inline"], [1, "switch"], ["type", "checkbox", "id", "cbDiscountCodeSwitch", 3, "change"], [1, "slider", "round"], ["id", "divDiscountCode", 2, "display", "none"], ["type", "text", "id", "txtDiscountCode", "aria-label", "Popust kod", 1, "col-md-6", "col-xs-12", "mx-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-elegant", "col-md-6", "col-xs-12", "mx-2", 3, "click"], [1, "col-12", "text-center"], ["id", "lblOldPrice", 2, "display", "none"], ["id", "lblDiscountStatus"], [1, "col-12"], ["class", "loading-overlay-for-this-div", "style", "z-index: 1 !important;", 4, "ngIf"], ["id", "cartTotal"], ["class", "alert alert-danger m-1 p-1", 4, "ngIf"], [1, "card", "p-2", "text-center", "mb-2", 3, "id"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "font-weight-bold"], [3, "routerLink"], [1, "btn-group"], [1, "btn", "btn-sm", "btn-outline-info", "m-0", "py-1", "px-2", 3, "click"], [1, "material-icons", "orange-text", "p-0"], [1, "btn", "btn-sm", "btn-outline-success", "m-0", "py-1", "px-2", 3, "click"], [1, "btn", "btn-sm", "btn-outline-danger", "m-0", "py-1", "px-2", 3, "click"], [1, "loading-overlay-for-this-div", 2, "z-index", "1 !important"], ["aria-hidden", "false", "role", "status", 1, "d-flex", "justify-content-center"], ["alt", "cascadus pinguin with rocket - loading", "src", "../../../../assets/pinguin-rocket.png", "width", "75px", "height", "75px", 1, "spinner-pinguin", "m-0", "p-0", "align-self-center"], [1, "alert", "alert-danger", "m-1", "p-1"], ["type", "button", "disabled", "", 1, "btn", "btn-lg", "btn-elegant"], [1, "material-icons", "orange-text", "pull-left"], [1, "orange-text"], ["type", "button", "id", "instantOrderBtn", 1, "btn", "btn-lg", "btn-elegant", 2, "width", "50%", 3, "click"], ["isSending", ""], [1, "fa", "fa-spinner", "fa-spin"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Va\u0161u narud\u017Ebu izvr\u0161ite ovdje:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Ime i prezime:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Kontakt broj:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Adresa:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "money");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Po\u0161tanski broj:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "account_balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Grad:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "local_shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Na\u010Din pla\u0107anja:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, " Pla\u0107anje pouze\u0107em ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, " Plati internet bankarstvom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "gesture");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Poruka prodava\u010Du:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "textarea", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, CheckoutComponent_div_74_Template, 10, 0, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](75, CheckoutComponent_ng_template_75_Template, 45, 15, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, CheckoutComponent_div_77_Template, 6, 0, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](78, CheckoutComponent_ng_template_78_Template, 4, 2, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](76);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.buyerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cartEmpty || ctx.numOfCartItems == 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cartEmpty || ctx.numOfCartItems == 0)("ngIfElse", _r4);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'app-checkout',
                templateUrl: './checkout.component.html',
                styleUrls: ['./checkout.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: src_app_sevices_payment_service__WEBPACK_IMPORTED_MODULE_6__["PaymentService"] }, { type: _sevices_invoices_service__WEBPACK_IMPORTED_MODULE_7__["InvoicesService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }, { type: src_app_sevices_products_service__WEBPACK_IMPORTED_MODULE_9__["ProductsService"] }, { type: src_app_sevices_discounts_service__WEBPACK_IMPORTED_MODULE_10__["DiscountsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }, { type: src_app_sevices_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["Title"] }]; }, null); })();


/***/ }),

/***/ "5y8b":
/*!**********************************************!*\
  !*** ./src/app/sevices/discounts.service.ts ***!
  \**********************************************/
/*! exports provided: DiscountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountsService", function() { return DiscountsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class DiscountsService {
    constructor(http) {
        this.http = http;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].domain + "admin/discounts";
        this.token = localStorage.getItem("jwt");
    }
    getAll() {
        return this.http
            .get(this.URL + "/all", { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    getActive() {
        return this.http.get(this.URL + "/active", { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    getById(id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.token);
        return this.http.get(this.URL + "/get/" + id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    checkDiscountCode(code) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.token);
        return this.http.get(this.URL + "/lookup/" + code, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    add(code) {
        const data = {
            id: code.id,
            popustKod: code.popustKod,
            popustUPostocima: code.popustUPostocima,
            vrijediDo: code.vrijediDo,
            izbrisano: code.izbrisano
        };
        return this.http.post(this.URL + "/add", data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    edit(code) {
        const data = {
            id: code.id,
            popustKod: code.popustKod,
            popustUPostocima: code.popustUPostocima,
            vrijediDo: code.vrijediDo,
            izbrisano: code.izbrisano
        };
        return this.http.post(this.URL + "/update/" + code.id, data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    delete(id) {
        return this.http.get(this.URL + "/delete/" + id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
}
DiscountsService.ɵfac = function DiscountsService_Factory(t) { return new (t || DiscountsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DiscountsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DiscountsService, factory: DiscountsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DiscountsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "8QaN":
/*!****************************************************************!*\
  !*** ./src/app/components/public/privacy/privacy.component.ts ***!
  \****************************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class PrivacyComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle("Cascadus - Izjava o privatnosti");
    }
    ngOnInit() {
    }
}
PrivacyComponent.ɵfac = function PrivacyComponent_Factory(t) { return new (t || PrivacyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
PrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyComponent, selectors: [["app-privacy-statement"]], decls: 117, vars: 0, consts: [[1, "row", "mt-5", "pt-5", "justify-content-end", "privacy-img", "privacy-img-1"], [1, "col-md-6", "col-xs-10"], [1, "card", "p-3", "m-5", "opacity-1"], [1, "text-center"], ["href", "tel:+38598713228"], ["href", "mailto:info@cascadus.hr"]], template: function PrivacyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Za\u0161tita osobnih podataka i politika privatnosti Prema zakonu Republike Hrvatske o za\u0161titi osobnih podataka, osobni podatak definiran je kao svaka informacija, koja se odnosi na identificiranu fizi\u010Dku osobu ili podatak kojim se mo\u017Ee identificirati osoba, utvrditi identitet izravno ili neizravno. Te podatke tretiramo kao osobne podatke. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Obrada podataka je bilo koja radnja izvr\u0161ena na osobnim podacima, poput primjerice prikupljanja, pohrane, upotrebe, uvida i prijenosa osobnih podataka. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pravne osnove za obradu osobnih podataka sukladno propisima EU i Zakon o provedbi Op\u0107e uredbe o za\u0161titi podataka su sljede\u0107e: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " kada ste pristali na obradu (privola), ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " kada je to potrebno za sklapanje ili izvr\u0161avanje ugovora, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " u svrhu ispunjavanja zakonskih obveza, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " kada je to potrebno u pravne svrhe. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Kada i kako Cascadus prikuplja podatke korisnika? Cascadus prikuplja osobne podatke Kupaca samo u mjeri koji su nu\u017Eni za ispunjenje svoje obveze odnosno za koje postoji legitimni interes te za koje ima privolu Kupca u svrhu informiranja, podr\u0161ke kupcima i marketing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Cascadus se obvezuje \u0161titi osobne podatke Kupaca u skladu sa Zakon o provedbi Op\u0107e uredbe o za\u0161titi podataka te se obvezuje da osobne podatke ne\u0107e ni na koji na\u010Din ustupiti tre\u0107im osobama bez pristanka Kupca (osim podataka za koje postoji legitimni interes u svrhu izvr\u0161avanja dostave kupljenog proizvoda). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Obrada osobnih podataka koja se temelji na legitimnom interesu ili predstavlja ugovornu obvezu obavlja se odr\u017Eavanjem najvi\u0161i standarda sigurnosti i poslovanja. Kupac u svakom trenutku mo\u017Ee izjaviti prigovor na obradu svojih osobnih podataka na temelju svoje specifi\u010Dne situacije. Kupac ima pravo zatra\u017Eiti nadopunu, ispravak ili izmjenu neto\u010Dnih osobnih podataka. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Od ovog se izuzimaju slu\u010Dajevi u kojima je Prodavatelj po valjanom nalogu ovla\u0161tenih dr\u017Eavnih tijela, u skladu sa zakonom, du\u017Ean dostaviti ili dopustiti uvid u osobne podatke Kupaca. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Ako Kupac pru\u017Ea podatke u ime druge osobe, mora se pobrinuti da je ta osoba upoznata s ovim pravilima o za\u0161titi privatnosti prije no \u0161to to u\u010Dini. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "1. Podatke prikupljamo prilikom kupovine u Cascadus trgovini u svrhu dostave proizvoda Prilikom kupovine u Cascadus internetskoj trgovini tra\u017Eimo od vas odre\u0111ene osobne podatke koje su nu\u017Ene za ispunjenje usluge i kupovinu. Pru\u017Eanje osobnih podataka u svrhu prodaje predstavlja ugovornu obvezu te ako ih ne pru\u017Eite, to \u0107e utjecati na ispravno izvr\u0161enje ugovora ili ga \u010Dak onemogu\u0107iti.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " U svrhu dostave proizvoda naru\u010Denog putem Cascadus internetske trgovine potrebno je unijeti va\u0161e osobne podatke (ime, prezime, adresu dostave, broj telefona i email adresu). Legitiman pristup podacima kupca koje uklju\u010Duju ime i prezime te adresu dostave imaju pristup djelatnici dostavnih slu\u017Ebi s kojima Cascadus ima sklopljen ugovor o dostavi naru\u010Denih proizvoda putem Cascadus internetske trgovine. Cascadus ne bilje\u017Ei broj va\u0161e kreditne kartice niti pohranjuje transakcijske podatke. Cascadus za naplatu kreditnih kartica koristi usluge tre\u0107e strane, ovla\u0161tene banke, koja enkripcijom \u0161titi va\u0161e podatke. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " 2. Podatke prikupljamo i obra\u0111ujemo ako nas izravno kontaktirate putem obrasca na internetskoj stranici bio-dekor.com direktno mailom telefonskim pozivom Tako prikupljene podatke koristimo samo za obradu tra\u017Eenih informacija i upita korisnika te u svrhu osiguravanja kvalitetnog korisni\u010Dkog iskustva. Kupci i korisnici internetske stranice cascadus.hr suglasni su da u skladu sa Zakonom o provedbi Op\u0107e uredbe o za\u0161titi podataka te u skladu s tra\u017Eenim upitom obra\u0111ujemo osobne podatke. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " 3. Prilikom slanja newslettera pretplatnicima Cascadus prikuplja e-mail adrese korisnika koje koristi za slanje newslettera odnosno elektroni\u010Dkih poruka koje sadr\u017Ee promotivne poruke, ponude i vijesti iz svijeta mobilne tehnologije. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " 4. Prikupljanje u svrhu osiguravanja podr\u0161ke kupcima i marketing Cascadus uz privolu Kupca mo\u017Ee koristiti osobne podatke za informiranje o novim i akcijskim proizvodima te dostavu promotivnih materijala, newslettera te unaprje\u0111enja odnosa s Kupcima. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Ukoliko pristup podacima u svrhe marketin\u0161ke obrade imaju tre\u0107i pru\u017Eatelji usluga, oni su detaljno opisani u odlomku 1.2. ovog teksta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Tko su subjekti s kojima Cascadus mo\u017Ee dijeliti osobne podatke? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " 1. Pru\u017Eatelji usluga dru\u0161tvenih mre\u017Ea Prilikom kreiranja Cascadus ra\u010Duna na Cascadus trgovini potrebno je unijeti svoje podatke (e-mail, ime i prezime). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Prilikom prijave putem dru\u0161tvenih mre\u017Ea, odnosno Google i Facebook ra\u010Duna, Cascadus ne zadr\u017Eava podatke prikupljene takvom prijavom.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " 2. Pru\u017Eatelji usluga za slanje e-mail promotivnih poruka Cascadus sura\u0111uje s pru\u017Eateljima usluga tre\u0107im stranama kako bi se mogle provesti aktivnosti slanja e-po\u0161te, ogla\u0161avanja i analiziranja upotrebe na\u0161ih web mjesta i aplikacija te pra\u0107enja u\u010Dinkovitosti kampanja. Osobne podatke dijelimo samo u onoj mjeri potrebnoj za izvr\u0161avanje usluge u na\u0161e ime. U nastavku mo\u017Eete provjeriti tko su davatelji usluga tre\u0107ih strana potrebnih za suradnju: Mailchimp \u2013 automatizirana platforma za slanje elektroni\u010Dke po\u0161te koja nam omogu\u0107ava slanje newslettera Google \u2013 Google Analytics koji se upotrebljava za pra\u0107enje web statistike i demografskih podataka i pona\u0161anja web korisnika. Koristimo ju za pra\u0107enje u\u010Dinkovitosti na\u0161ih marketin\u0161kih kampanja. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " 3. Pru\u017Eatelji usluga potrebnih za sklapanje ili izvr\u0161avanje ugovora Pristup bazi Kupaca s osobnim podacima Kupaca uz Cascadus u svrhu sklapanja ili izvr\u0161avanja ugovora, odnosno kupovine u Cascadus trgovini i dostavu proizvoda trenutno imaju: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Politika kola\u010Di\u0107a Kako bi stranice Cascadus ispravno radile, one moraju na ra\u010Dunalo korisnika spremiti malenu koli\u010Dinu informacija (Cookies). Prema regulacijama EU, Cascadus prije spremanja Cookiea mora zatra\u017Eiti pristanak korisnika. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Kori\u0161tenjem web stranice cascadus.hr internet trgovina korisnik pristaje na upotrebu Cookiea. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Korisnik isklju\u010Divanjem kola\u010Di\u0107a odlu\u010Duje ho\u0107e li dopustiti pohranjivanje kola\u010Di\u0107a na svom ra\u010Dunalu. Postavke kola\u010Di\u0107a mogu se kontrolirati i konfigurirati u web pregledniku koji korisnik koristi za pregledavanje web stranica. Ukoliko korisnik onemogu\u0107i kola\u010Di\u0107e postoji mogu\u0107nost da stranica ne\u0107e mo\u0107i koristiti neke od funkcionalnosti koje daje Cascadus web trgovina. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Ovo su primjeri tre\u0107ih strana koje pru\u017Eaju usluge analize i marketin\u0161ke obrade podataka: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Google \u2013 Google Analytics koji se upotrebljava za pra\u0107enje web statistike i demografskih podataka i pona\u0161anja web korisnika. Koristimo ju za pra\u0107enje u\u010Dinkovitosti na\u0161ih marketin\u0161kih kampanja. Facebook \u2013 Facebook dru\u0161tvena mre\u017Ea prikuplja podatke u svrhu pra\u0107enja i mjerenja uspje\u0161nosti marketin\u0161kih kampanja, pona\u0161anja web korisnika i kreiranja prilago\u0111enih oglasa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Kako korisnici mogu a\u017Eurirati, urediti ili obrisati svoje osobne podatke? Tvrtka Cascadus d.o.o. \u2013 internet trgovina. prikuplja podatke korisnika u skladu propisima EU i Zakon o provedbi Op\u0107e uredbe o za\u0161titi podataka. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Svaki korisnik mo\u017Ee u svakom trenutku mo\u017Ee: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Zatra\u017Eiti pristup svojim osobnim podacima i zatra\u017Eiti a\u017Euriranje osobnih podataka i eventualnih neto\u010Dnosti. tra\u017Eiti nas da vam pru\u017Eimo dodatne informacije o na\u010Dinu na koji koristimo va\u0161e podatke. zaprimiti osobne podatke o vama koje ste nam dali u strukturiranom, uobi\u010Dajeno upotrebljavanom i strojno \u010Ditljivom formatu te \u2013 gdje je to tehni\u010Dki mogu\u0107e \u2013 da prenesemo te podatke drugom voditelju obrade bez zapreka ako se obrada va\u0161ih podataka temelji na va\u0161oj suglasnosti te se provodi na automatizirani na\u010Din. zatra\u017Eiti brisanje osobnih podataka korisnika te zatra\u017Eiti brisanje podataka za koje vi\u0161e ne postoji zakonska osnova za upotrebu. Budu\u0107i da korisnici mogu zatra\u017Eiti brisanje samo svojih osobnih podataka, radi za\u0161tite korisnika mo\u017Eemo vas zatra\u017Eiti provjeru identiteta prije provo\u0111enja zahtjeva. u slu\u010Dajevima gdje se obrada temelji na suglasnosti te vezano za svaki direktni marketing, povu\u0107i svoju suglasnost s u\u010Dinkom u budu\u0107nosti kako bismo prestali s takvom odre\u0111enom obradom. dati prigovor na svaku obradu (uklju\u010Duju\u0107i profiliranje) koja se temelji na legitimnom interesu zbog va\u0161e specifi\u010Dne situacije, osim ako su razlozi za izvr\u0161enje takve obrade ja\u010Di od prava na za\u0161titu osobnih podataka. tra\u017Eiti nas da ograni\u010Dimo na\u010Din na koji koristimo va\u0161e podatke, npr. dok se prigovor obra\u0111uje. Cascadus mo\u017Ee odbiti provo\u0111enja zahtjeva ukoliko se time ugro\u017Eava privatnost korisnika ili drugih korisnika, ako primjena zahtjeva je suprotna zakonu, u izuzecima radi za\u0161tite javnog interesa (npr. sprje\u010Davanje ili otkrivanje zlo\u010Dina), pravnih obveza ili prava i sloboda drugih. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Zahtjeve za pristup, ispravljanje ili brisanje podataka mo\u017Eete uputiti na: info@cascadus.hr ili pismenim putem na adresu sjedi\u0161ta: Breg 22, 10362 Zagreb, Hrvatska. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Obrada takvog zahtjeva mo\u017Ee biti tehni\u010Dki i vremenski slo\u017Een proces te je u slo\u017Eenim slu\u010Dajevima ili u slu\u010Daju ve\u0107eg broja zahtjeva potrebno du\u017Ee vrijeme potrebno za obradu podataka o \u010Demu \u0107emo vas obavijestiti na zakonit i siguran na\u010Din.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Kako \u010Duvamo sigurnost va\u0161ih podataka? U svrhu o\u010Duvanja sigurnosti, integriteta i dostupnosti osobnih podataka kupaca, podatke osiguravamo nizom sigurnosnih mjera koje uklju\u010Duju enkripciju, autentifikaciju i strogo ograni\u010Deni pristup podacima. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Neke od mjera koje koristimo uklju\u010Duju: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "strogo ograni\u010Den pristup osobnim podacima temeljen na na\u010Delu \u201Enu\u017Enog poznavanja\u201C kori\u0161tenje podataka isklju\u010Divo u skladu s legitimnim interesom, ugovornom obavezom ili danom privolom Kupca sigurnosni prijenos podataka postavljanje antivirusnih programa i vatrozida na IT sustave u svrhu detekcije, sprje\u010Davanja zloupotrebe osobnih podataka i neovla\u0161tenog pristupa podacima.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Koliko dugo zadr\u017Eavamo va\u0161e osobne podatke? Osobne podatke pohranjujemo i obra\u0111ujemo onoliko dugo koliko je potrebno za izvr\u0161enje odre\u0111ene legitimne svrhe, osim ako va\u017Ee\u0107im propisima nije za pojedinu svrhu predvi\u0111eno du\u017Ee vrijeme \u010Duvanja. U slu\u010Daju davanja privole za marketing, podatke \u010Duvamo onoliko dugo dok se privola ne povu\u010De. Osobni podaci koji vi\u0161e nisu potrebni se ili nepovratno anonimiziraju ili se uni\u0161tavaju na siguran na\u010Din. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Za sve informacije, pohvale, primjedbe, reklamacije kao i svake druge obavijesti Kupci se mogu obratiti pismenim putem prodavatelju na adresu Breg 22, 10 362 Ka\u0161ina, Hrvatska. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Telefon: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "+385 98 713 228");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " E-mail: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "info@cascadus.hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".privacy-img[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  image-rendering: optimizeSpeed;\n  background-size: contain;\n  width: 100%;\n  background-position: center;\n  background-attachment: fixed;\n}\n\n.privacy-img-1[_ngcontent-%COMP%] {\n  background-image: url('undraw_statement.svg');\n  image-rendering: optimizeSpeed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvcHJpdmFjeS9wcml2YWN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFDQTtFQUNJLDZDQUFBO0VBQ0EsOEJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcml2YWN5LWltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59XHJcbi5wcml2YWN5LWltZy0xe1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy91bmRyYXdfc3RhdGVtZW50LnN2Z1wiKTtcclxuICAgIGltYWdlLXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy-statement',
                templateUrl: './privacy.component.html',
                styleUrls: ['./privacy.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    domain: "https://localhost:44326/api/",
    //domain: "https://api.cascadus.hr/api/",
    tokenKey: "jwt",
    roleKey: "role"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BXCQ":
/*!**************************************************************!*\
  !*** ./src/app/components/public/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_sevices_emails_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sevices/emails.service */ "tPiu");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







class FooterComponent {
    constructor(fb, emailsService, toastr) {
        this.fb = fb;
        this.emailsService = emailsService;
        this.toastr = toastr;
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
        this.initForms();
    }
    initForms() {
        this.subscribeForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    subscribe() {
        if (this.subscribeForm.valid) {
            var email = this.subscribeForm.get('email').value;
            this.emailsService.subscribe(email).subscribe((result) => {
                if (result.toString() == "true") {
                    this.toastr.success('Od sada si služebno pretplaćen/a na naš newsletter. Nitko neće prije tebe saznati za opasne popuste!', 'Newsletter', { timeOut: 1500 });
                }
                else if (result.toString() == "false") {
                    this.toastr.warning('Već ti pretplaćen/a na naš newsletter. No cijenimo to što bi se pretplatio/la i dva puta!', 'Newsletter', { timeOut: 1500 });
                }
                else {
                    this.toastr.warning('Neuspješna pretplata na newsletter!', 'Newsletter', { timeOut: 1500 });
                }
            });
        }
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sevices_emails_service__WEBPACK_IMPORTED_MODULE_2__["EmailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["footer"]], decls: 59, vars: 6, consts: [[1, "sticky-bottom", "font-small", "bg-dark", "m-auto", "cascadus-footer"], [1, "row", "m-0", "p-4"], [1, "col-sm-12", "col-md-6", "px-3"], [3, "formGroup", "ngSubmit"], [1, "mt-3"], [1, "orange"], [1, "input-group"], ["type", "email", "formControlName", "email", "id", "subscriberEmail", "placeholder", "Va\u0161a email adresa", 1, "form-control", "m-auto"], [1, "input-group-btn"], ["type", "submit", 1, "btn", "btn-elegant", "m-auto", "orange-text"], ["id", "payment", 1, "row"], [1, "col-lg-6", "col-xs-12"], [1, "corvus-pay-card", "my-2", "mx-auto", "p-auto", "rounded", "img-responsive"], [1, "col-12", "d-flex", "justify-content-center"], [1, "badge", "badge-warning", "m-1", 3, "routerLink"], [1, "black-text", "p-0", "m-0"], [1, "col-sm-12", "col-md-3", "px-3"], [1, "text-center", "mt-3"], [1, "m-0", "p-0", "d-flex", "justify-content-around"], ["target", "_null", "rel", "noopener noreferrer", "href", "https://www.facebook.com", 1, "fb-ic", "mx-auto", "m-2"], [1, "fab", "fa-facebook-f", "fa-lg", "orange-text", "fa-2x"], ["target", "_null", "rel", "noopener noreferrer", "href", "https://www.instagram.com/cascadus1/", 1, "ins-ic", "mx-auto", "m-2"], [1, "fab", "fa-instagram", "fa-lg", "orange-text", "fa-2x"], ["target", "_null", "rel", "noopener noreferrer", "href", "https://www.twitter.com", 1, "tw-ic", "mx-auto", "m-2"], [1, "fab", "fa-twitter", "bg-transparent", "fa-lg", "orange-text", "fa-2x"], [1, "row", "py-3"], [1, "col-12", "my-2", "d-flex", "justify-content-center", "my-auto", "align-items-center"], [1, "my-2"], [1, "material-icons", "mx-auto", "md-48", "d-inline"], [1, "mx-auto", "d-inline", 3, "href"], [1, "material-icons", "m-auto", "md-48", "d-inline"], [1, "mx-auto", "d-inline"], [1, "row", "justify-content-center", "orange", "text-center", "m-0", "p-0"], [1, "col"], [1, "black-text", "my-1", "col-md-12", "col-xs-12"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FooterComponent_Template_form_ngSubmit_3_listener() { return ctx.subscribe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pretplatite se");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pretplati me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Pretplatom prihva\u0107ate da Vam Cascadus \u0161alje obavijesti o novim proizvodima i ostalih informacija vezanih uz Cascadus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Politika o privatnosti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sigurnost o online pla\u0107anju");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Uvjeti kupnje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Potra\u017Eite nas online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "podrska@cascadus.hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "location_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "address", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Breg 22, 10362 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Ka\u0161ina, Hrvatska ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "small", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.subscribeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/privacy-statement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/payment-statement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/purchase-statement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "mailto:podrska@cascadus.hr", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sva prava pridr\u017Eana - Cascadus ", ctx.year, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".fa[_ngcontent-%COMP%] {\n  padding: 20px;\n  font-size: 30px;\n  width: 30px;\n  text-align: center;\n  text-decoration: none;\n}\n\n.fa[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.fa-facebook[_ngcontent-%COMP%] {\n  background: #3B5998;\n  color: white;\n}\n\n.fa-twitter[_ngcontent-%COMP%] {\n  background: #55ACEE;\n  color: white;\n}\n\n.footer-box-border[_ngcontent-%COMP%] {\n  border: #ffcc00 1px solid;\n  border-radius: 0.5em;\n  height: 100%;\n  width: 100%;\n}\n\n.cascadus-footer[_ngcontent-%COMP%] {\n  color: #ffcc00;\n}\n\n.corvus-pay-card[_ngcontent-%COMP%] {\n  background-image: url('corvus_payments.jpg');\n  image-rendering: optimizeSpeed;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-color: white;\n  min-width: auto;\n  min-height: 17.5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREU7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFJSjs7QUFGRTtFQUNFLGNBQUE7QUFLSjs7QUFGRTtFQUNFLDRDQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZmE6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuICAuZmEtZmFjZWJvb2sge1xyXG4gICAgYmFja2dyb3VuZDogIzNCNTk5ODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmZhLXR3aXR0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzU1QUNFRTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmZvb3Rlci1ib3gtYm9yZGVyIHtcclxuICAgIGJvcmRlcjogI2ZmY2MwMCAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuY2FzY2FkdXMtZm9vdGVyIHtcclxuICAgIGNvbG9yOiAjZmZjYzAwO1xyXG4gIH1cclxuXHJcbiAgLmNvcnZ1cy1wYXktY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9jb3J2dXlQYXkvY29ydnVzX3BheW1lbnRzLmpwZycpO1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMTcuNXZoO1xyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_sevices_emails_service__WEBPACK_IMPORTED_MODULE_2__["EmailsService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "DVJy":
/*!****************************************************************!*\
  !*** ./src/app/components/public/contact/contact.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class ContactComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle("Cascadus - Početna stranica");
    }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 37, vars: 0, consts: [["id", "contact", 1, "py-5", "contact-img", "contact-img-1"], [1, "p-5"], [1, "row", "mt-md-5", "text-center"], [1, "col-12", "mt-5"], [1, "px-5", "card", "card-body", "opacity-1", "mx-auto", "d-none", "d-md-block"], [1, "opacity-1", "mx-auto", "d-block", "d-md-none"], [1, "row", "justify-content-center"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "card", "tile", "shadow", "m-3", "opacity-1"], [1, "card-header", "shadow", "text-center"], [1, "card-body", "shadow", "d-flex"], ["href", "tel:+38598713228", 1, "m-auto", "zoom-on-hover"], [1, "material-icons", 2, "font-size", "10vh", "color", "#333"], ["href", "https://api.whatsapp.com/send?phone=+38598713228", 1, "m-auto", "zoom-on-hover"], ["aria-hidden", "true", 1, "fab", "fa-whatsapp", 2, "font-size", "5em", "color", "#333"], ["href", "mailto:podrska@cascadus.hr", 1, "m-auto", "zoom-on-hover"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Slobodno kontaktiraj na\u0161u podr\u0161ku ukoliko ima\u0161 neka pitanja vezana uz proizvode ili na\u0161u internet trgovinu!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Slobodno kontaktiraj na\u0161u podr\u0161ku ukoliko ima\u0161 neka pitanja vezana uz proizvode ili na\u0161u internet trgovinu!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nazovi nas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "WhatsApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Po\u0161alji nam email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".parallax[_ngcontent-%COMP%] {\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n  min-height: 100vh;\n  height: 100vh;\n  image-rendering: optimizeSpeed;\n  padding-bottom: 50px;\n  padding-top: 50px;\n}\n\n@media only screen and (max-device-width: 1366px) {\n  .parallax[_ngcontent-%COMP%] {\n    background-attachment: scroll;\n    min-height: 600px;\n  }\n}\n\n.tile[_ngcontent-%COMP%] {\n  height: 30vh;\n}\n\n.zoom-on-hover[_ngcontent-%COMP%] {\n  transition: all 2s ease-in-out;\n  color: orange;\n}\n\n.zoom-on-hover[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  transform: scale(1.12);\n  color: orange;\n}\n\n.contact-img[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  image-rendering: optimizeSpeed;\n  background-size: cover;\n  width: 100%;\n  background-position: center;\n  background-attachment: scroll;\n}\n\n.contact-img-1[_ngcontent-%COMP%] {\n  background-image: url('undraw_contact.svg');\n  image-rendering: optimizeSpeed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNFO0VBQ0U7SUFDRSw2QkFBQTtJQUNBLGlCQUFBO0VBRUo7QUFDRjs7QUFBRTtFQUNJLFlBQUE7QUFFTjs7QUFDRTtFQUNFLDhCQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFFO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0FBR0o7O0FBQ0U7RUFDRSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtBQUVKOztBQUFBO0VBQ0ksMkNBQUE7RUFDQSw4QkFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmFsbGF4IHtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4OyBcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogMTM2NnB4KSB7XHJcbiAgICAucGFyYWxsYXgge1xyXG4gICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcclxuICAgICAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50aWxlIHtcclxuICAgICAgaGVpZ2h0OiAzMHZoO1xyXG4gIH1cclxuXHJcbiAgLnpvb20tb24taG92ZXIge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0O1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICB9XHJcbiAgLnpvb20tb24taG92ZXIgOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEyKTtcclxuICAgIGNvbG9yOm9yYW5nZTtcclxuICB9XHJcblxyXG5cclxuICAuY29udGFjdC1pbWcge1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGltYWdlLXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xyXG59XHJcbi5jb250YWN0LWltZy0xe1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy91bmRyYXdfY29udGFjdC5zdmdcIik7XHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XHJcbn1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "FgzC":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/admin-buyers/admin-buyers.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminBuyersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminBuyersComponent", function() { return AdminBuyersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_buyer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/buyer */ "0+sa");
/* harmony import */ var _sevices_buyers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../sevices/buyers.service */ "SbDr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AdminBuyersComponent_tr_32_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "event_busy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminBuyersComponent_tr_32_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "event_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminBuyersComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AdminBuyersComponent_tr_32_div_17_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AdminBuyersComponent_tr_32_ng_template_18_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBuyersComponent_tr_32_Template_button_click_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const buyer_r4 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.editBuyerBtn($event, buyer_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBuyersComponent_tr_32_Template_button_click_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const buyer_r4 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.removeBuyerBtn($event, buyer_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const buyer_r4 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](buyer_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", buyer_r4.ime, " ", buyer_r4.prezime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](buyer_r4.kontakt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](buyer_r4.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", buyer_r4.ulica, " ", buyer_r4.kucniBroj, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](buyer_r4.grad);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](buyer_r4.postanskiBroj);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", buyer_r4.izbrisano)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "editBuyerBtn", buyer_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", buyer_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "removeBuyerBtn", buyer_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", buyer_r4.id);
} }
function AdminBuyersComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add New Buyer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Surname:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Street:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "House Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "City:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Post number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBuyersComponent_div_33_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.OnAddBuyerCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBuyersComponent_div_33_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.OnAddBuyerConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.addBuyerForm);
} }
function AdminBuyersComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Surname:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Contact:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Street:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "House Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "City:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Post number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBuyersComponent_div_34_Template_button_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.OnEditBuyerCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBuyersComponent_div_34_Template_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.OnEditBuyerConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.editBuyerForm);
} }
function AdminBuyersComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Remove item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Surname:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Street:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "House Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "City:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Post number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "You won't be able to undo this action. Please check if this item is the one you want to remove.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBuyersComponent_div_35_Template_button_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.OnRemoveBuyerCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBuyersComponent_div_35_Template_button_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.OnRemoveBuyerConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.removeBuyerForm);
} }
class AdminBuyersComponent {
    constructor(buyersService, fb) {
        this.buyersService = buyersService;
        this.fb = fb;
        this.title = "Admin - Buyers";
        this.showInactive = false;
        this.OnReloadClick();
    }
    ngOnInit() {
        this.initForms();
        document.title = this.title;
        this.addBuyerFormShown = false;
        this.editBuyerFormShown = false;
        this.removeBuyerFormShown = false;
    }
    OnShowActiveChange(event) {
        this.showInactive = !this.showInactive;
        this.OnReloadClick();
    }
    OnReloadClick() {
        if (this.showInactive) {
            this.buyersService
                .getAllBuyers()
                .subscribe(result => {
                this.buyers = result;
            });
        }
        else {
            this.buyersService
                .getActiveBuyers()
                .subscribe(result => {
                this.buyers = result;
            });
        }
        if (this.disabledBtn != null) {
            this.disabledBtn.disabled = false;
            this.resetAllForms();
            this.hideAllForms();
        }
        this.ngOnInit();
    }
    resetAllForms() {
        this.addBuyerForm.reset();
        this.editBuyerForm.reset();
        this.removeBuyerForm.reset();
    }
    hideAllForms() {
        this.addBuyerFormShown = false;
        this.editBuyerFormShown = false;
        this.removeBuyerFormShown = false;
    }
    //Add functions
    addBuyerBtn(event) {
        this.resetAllForms();
        this.hideAllForms();
        this.addBuyerFormShown = true;
        this.disabledBtn = event.target;
        this.disabledBtn.disabled = true;
    }
    OnAddBuyerCancel() {
        this.resetAllForms();
        this.hideAllForms();
        this.disabledBtn.disabled = false;
    }
    OnAddBuyerConfirm() {
        this.addBuyerFormShown = false;
        this.disabledBtn.disabled = false;
        let buy = new src_app_models_buyer__WEBPACK_IMPORTED_MODULE_2__["Buyer"]();
        buy.ime = this.addBuyerForm.get('addName').value;
        buy.prezime = this.addBuyerForm.get('addSurname').value;
        buy.kontakt = this.addBuyerForm.get('addContact').value;
        buy.email = this.addBuyerForm.get('addEmail').value;
        buy.ulica = this.addBuyerForm.get('addStreet').value;
        buy.kucniBroj = this.addBuyerForm.get('addHouseNumber').value;
        buy.grad = this.addBuyerForm.get('addCity').value;
        buy.postanskiBroj = this.addBuyerForm.get('addPostNumber').value;
        this.buyersService
            .addBuyer(buy)
            .subscribe(result => {
            alert(JSON.stringify(result));
            this.OnReloadClick();
        });
    }
    //Edit functions
    editBuyerBtn(event, id) {
        this.resetAllForms();
        this.hideAllForms();
        this.fillEditBuyerForm(id);
    }
    fillEditBuyerForm(id) {
        this.buyersService
            .getBuyerById(id)
            .subscribe(result => {
            this.buyer = Object.assign(new src_app_models_buyer__WEBPACK_IMPORTED_MODULE_2__["Buyer"], result);
            let id = this.buyer.id;
            let name = this.buyer.ime;
            let surname = this.buyer.prezime;
            let contact = this.buyer.kontakt;
            let email = this.buyer.email;
            let street = this.buyer.ulica;
            let houseNumber = this.buyer.kucniBroj;
            let city = this.buyer.grad;
            let postNumber = this.buyer.postanskiBroj;
            let active = this.buyer.izbrisano;
            this.editBuyerForm = this.fb.group({
                editId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: id, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                editName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                editSurname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](surname, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                editContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](contact, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                editEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                editStreet: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](street, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                editHouseNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](houseNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                editCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](city, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                editPostNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](postNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                editActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](active)
            });
            this.editBuyerFormShown = true;
            this.disabledBtn = event.target;
            this.disabledBtn.disabled = true;
        });
    }
    OnEditBuyerConfirm() {
        let buy = new src_app_models_buyer__WEBPACK_IMPORTED_MODULE_2__["Buyer"]();
        buy.id = this.editBuyerForm.get('editId').value;
        buy.ime = this.editBuyerForm.get('editName').value;
        buy.prezime = this.editBuyerForm.get('editSurname').value;
        buy.kontakt = this.editBuyerForm.get('editContact').value;
        buy.email = this.editBuyerForm.get('editEmail').value;
        buy.ulica = this.editBuyerForm.get('editStreet').value;
        buy.kucniBroj = this.editBuyerForm.get('editHouseNumber').value;
        buy.grad = this.editBuyerForm.get('editCity').value;
        buy.postanskiBroj = this.editBuyerForm.get('editPostNumber').value;
        this.buyersService
            .editBuyer(buy)
            .subscribe(result => {
            //alert(Object.assign(new Buyer(), result));
            this.OnReloadClick();
        });
    }
    OnEditBuyerCancel() {
        this.disabledBtn.disabled = false;
        this.resetAllForms();
        this.hideAllForms();
    }
    //Remove functions
    removeBuyerBtn(event, id) {
        this.resetAllForms();
        this.hideAllForms();
        this.fillRemoveBuyerForm(id);
    }
    fillRemoveBuyerForm(id) {
        this.buyersService
            .getBuyerById(id)
            .subscribe(result => {
            this.buyer = Object.assign(new src_app_models_buyer__WEBPACK_IMPORTED_MODULE_2__["Buyer"], result);
            let id = this.buyer.id;
            let name = this.buyer.ime;
            let surname = this.buyer.prezime;
            let contact = this.buyer.kontakt;
            let email = this.buyer.email;
            let street = this.buyer.ulica;
            let houseNumber = this.buyer.kucniBroj;
            let city = this.buyer.grad;
            let postNumber = this.buyer.postanskiBroj;
            let active = this.buyer.izbrisano;
            this.removeBuyerForm = this.fb.group({
                removeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: id, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                removeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: name, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                removeSurname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: surname, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                removeContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: contact, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                removeEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: email, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                removeStreet: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: street, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                removeHouseNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: houseNumber, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                removeCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: city, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                removePostNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: postNumber, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                removeActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: active, disabled: true })
            });
            this.removeBuyerFormShown = true;
            this.disabledBtn = event.target;
            this.disabledBtn.disabled = true;
        });
    }
    OnRemoveBuyerCancel() {
        this.disabledBtn.disabled = false;
        this.resetAllForms();
        this.hideAllForms();
    }
    OnRemoveBuyerConfirm() {
        this.buyersService
            .deleteBuyer(this.buyer.id)
            .subscribe(result => {
            this.resetAllForms();
            this.hideAllForms();
            this.OnReloadClick();
        });
    }
    initForms() {
        this.addBuyerForm = this.fb.group({
            addName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            addSurname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            addContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            addEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            addStreet: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            addHouseNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            addCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            addPostNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.editBuyerForm = this.fb.group({
            editName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editSurname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editStreet: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editHouseNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editPostNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.removeBuyerForm = this.fb.group({
            removeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeSurname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeStreet: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeHouseNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removePostNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
}
AdminBuyersComponent.ɵfac = function AdminBuyersComponent_Factory(t) { return new (t || AdminBuyersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sevices_buyers_service__WEBPACK_IMPORTED_MODULE_3__["BuyersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AdminBuyersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminBuyersComponent, selectors: [["app-admin-buyers"]], decls: 36, vars: 4, consts: [[1, "row"], [1, "col-8", "text-center"], [1, "justify-content-center", "text-center"], ["type", "checkbox", "id", "toggleActive", 1, "checkbox", 3, "change"], ["id", "lblToggleActive", "for", "toggleActive"], ["id", "addBuyerBtn", 1, "btn", "btn-lg", "btn-primary", "col-xs-12", 3, "click"], ["id", "productsTable", 1, "table", "text-center", "m-0", "p-0", "fixedTableHead"], ["id", "tableBody", 1, "scrollable-y"], [4, "ngFor", "ngForOf"], ["id", "addBuyerForm", "class", "card card-body m-2 col-3", 4, "ngIf"], ["id", "editBuyerForm", "class", "card card-body m-2  my-0 col-3", 4, "ngIf"], ["id", "removeBuyerForm", "class", "card card-body m-2 my-0 col-3", 4, "ngIf"], [1, "d-block"], [4, "ngIf", "ngIfElse"], ["other_active_state", ""], [1, "btn-group"], [1, "btn", "btn-sm", "btn-outline-success", 3, "id", "value", "click"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "id", "value", "click"], [1, "material-icons", "red"], [1, "material-icons", "green"], ["id", "addBuyerForm", 1, "card", "card-body", "m-2", "col-3"], [3, "formGroup"], [1, "card-header"], [1, "card-body"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], ["formControlName", "addName", "required", "", "type", "text", "minlength", "3", "maxlength", "50", "name", "addName", "id", "addName", "aria-describedby", "basic-addon3", 1, "form-control"], ["formControlName", "addSurname", "required", "", "type", "text", "minlength", "3", "maxlength", "50", "name", "addSurname", "id", "addSurname", "aria-describedby", "basic-addon3", 1, "form-control"], ["formControlName", "addContact", "required", "", "type", "text", "minlength", "3", "maxlength", "50", "name", "addContact", "id", "addContact", "aria-describedby", "basic-addon3", 1, "form-control"], ["type", "email", "formControlName", "addEmail", "required", "", "minlength", "5", "maxlength", "50", "name", "addEmail", "id", "addEmail", "aria-describedby", "basic-addon3", 1, "form-control"], ["type", "email", "formControlName", "addStreet", "required", "", "minlength", "5", "maxlength", "50", "name", "addStreet", "id", "addStreet", "aria-describedby", "basic-addon3", 1, "form-control"], ["type", "email", "formControlName", "addHouseNumber", "required", "", "minlength", "5", "maxlength", "50", "name", "addHouseNumber", "id", "addHouseNumber", "aria-describedby", "basic-addon3", 1, "form-control"], ["type", "email", "formControlName", "addCity", "required", "", "minlength", "5", "maxlength", "50", "name", "addCity", "id", "addCity", "aria-describedby", "basic-addon3", 1, "form-control"], ["type", "email", "formControlName", "addPostNumber", "required", "", "minlength", "5", "maxlength", "50", "name", "addPostNumber", "id", "addPostNumber", "aria-describedby", "basic-addon3", 1, "form-control"], [1, "card-footer"], ["id", "addBuyerFormCancel", "type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "addBuyerFormConfirm", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "editBuyerForm", 1, "card", "card-body", "m-2", "my-0", "col-3"], [1, "col-12"], ["id", "editModalItemInfo"], ["readonly", "", "type", "text", "minlength", "1", "maxlength", "50", "name", "id", "id", "editId", "formControlName", "editId", "name", "editId", "aria-describedby", "basic-addon3", 1, "form-control"], ["formControlName", "editName", "required", "", "type", "text", "minlength", "3", "maxlength", "50", "name", "editName", "id", "editName", "aria-describedby", "basic-addon3", 1, "form-control"], ["formControlName", "editSurname", "required", "", "type", "text", "minlength", "3", "maxlength", "50", "name", "editSurname", "id", "editSurname", "aria-describedby", "basic-addon3", 1, "form-control"], ["formControlName", "editContact", "required", "", "type", "text", "minlength", "3", "maxlength", "50", "name", "editContact", "id", "editContact", "aria-describedby", "basic-addon3", 1, "form-control"], ["type", "email", "formControlName", "editEmail", "required", "", "minlength", "5", "maxlength", "50", "name", "editEmail", "id", "editEmail", "aria-describedby", "basic-addon3", 1, "form-control"], ["type", "email", "formControlName", "editStreet", "required", "", "minlength", "5", "maxlength", "50", "name", "editStreet", "id", "editStreet", "aria-describedby", "basic-addon3", 1, "form-control"], ["type", "email", "formControlName", "editHouseNumber", "required", "", "minlength", "5", "maxlength", "50", "name", "editHouseNumber", "id", "editHouseNumber", "aria-describedby", "basic-addon3", 1, "form-control"], ["type", "email", "formControlName", "editCity", "required", "", "minlength", "5", "maxlength", "50", "name", "editCity", "id", "editCity", "aria-describedby", "basic-addon3", 1, "form-control"], ["type", "email", "formControlName", "editPostNumber", "required", "", "minlength", "5", "maxlength", "50", "name", "editPostNumber", "id", "editPostNumber", "aria-describedby", "basic-addon3", 1, "form-control"], [1, "custom-control", "custom-checkbox", "d-none"], ["type", "checkbox", "name", "editActive", "formControlName", "editActive", "id", "editActive", 1, "custom-control-input"], ["for", "editActive", 1, "custom-control-label"], ["id", "btnEditCancel", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "btnEditSubmit", 1, "btn", "btn-success", 3, "click"], ["id", "removeBuyerForm", 1, "card", "card-body", "m-2", "my-0", "col-3"], ["readonly", "", "formControlName", "removeId", "type", "text", "minlength", "1", "maxlength", "50", "name", "removeId", "id", "removeId", "aria-describedby", "basic-addon3", "value", "", "placeholder", "", 1, "form-control"], ["formControlName", "removeName", "required", "", "type", "text", "minlength", "3", "maxlength", "50", "name", "removeName", "id", "removeName", "aria-describedby", "basic-addon3", 1, "form-control"], ["formControlName", "removeSurname", "required", "", "type", "text", "minlength", "3", "maxlength", "50", "name", "removeSurname", "id", "removeSurname", "aria-describedby", "basic-addon3", 1, "form-control"], ["formControlName", "removeContact", "required", "", "type", "text", "minlength", "3", "maxlength", "50", "name", "removeContact", "id", "removeContact", "aria-describedby", "basic-addon3", 1, "form-control"], ["type", "email", "formControlName", "removeEmail", "required", "", "minlength", "5", "maxlength", "50", "name", "removeEmail", "id", "removeEmail", "aria-describedby", "basic-addon3", 1, "form-control"], ["type", "email", "formControlName", "removeStreet", "required", "", "minlength", "5", "maxlength", "50", "name", "removeStreet", "id", "removeStreet", "aria-describedby", "basic-addon3", 1, "form-control"], ["type", "email", "formControlName", "removeHouseNumber", "required", "", "minlength", "5", "maxlength", "50", "name", "removeHouseNumber", "id", "removeHouseNumber", "aria-describedby", "basic-addon3", 1, "form-control"], ["type", "email", "formControlName", "removeCity", "required", "", "minlength", "5", "maxlength", "50", "name", "removeCity", "id", "removeCity", "aria-describedby", "basic-addon3", 1, "form-control"], ["type", "email", "formControlName", "removePostNumber", "required", "", "minlength", "5", "maxlength", "50", "name", "removePostNumber", "id", "removePostNumber", "aria-describedby", "basic-addon3", 1, "form-control"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "name", "removeActive", "formControlName", "removeActive", "id", "removeActive", 1, "custom-control-input"], ["for", "removeActive", 1, "custom-control-label"], [1, "text-danger"], ["id", "btnRemoveCancel", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "btnRemoveSubmit", 1, "btn", "btn-danger", 3, "click"]], template: function AdminBuyersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Buyers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdminBuyersComponent_Template_input_change_6_listener($event) { return ctx.OnShowActiveChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Show inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBuyersComponent_Template_button_click_10_listener($event) { return ctx.addBuyerBtn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "New buyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Full name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Post Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tbody", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AdminBuyersComponent_tr_32_Template, 26, 15, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AdminBuyersComponent_div_33_Template, 51, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AdminBuyersComponent_div_34_Template, 63, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AdminBuyersComponent_div_35_Template, 62, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buyers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addBuyerFormShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editBuyerFormShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.removeBuyerFormShown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: [".scrollable-y[_ngcontent-%COMP%] {\n  height: 80vh;\n  overflow-y: scroll;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  width: 700px;\n  margin: 30px auto;\n  background: #fff;\n  padding: 20px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.table-title[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n  margin: 0 0 10px;\n}\n\n.table-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 22px;\n}\n\n.table-title[_ngcontent-%COMP%]   .add-new[_ngcontent-%COMP%] {\n  float: right;\n  height: 30px;\n  font-weight: bold;\n  font-size: 12px;\n  text-shadow: none;\n  min-width: 100px;\n  border-radius: 50px;\n  line-height: 13px;\n}\n\n.table-title[_ngcontent-%COMP%]   .add-new[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n\ntable.table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n\ntable.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-color: #e9e9e9;\n}\n\ntable.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0 5px;\n  cursor: pointer;\n}\n\ntable.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  width: 100px;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  margin: 0 5px;\n  min-width: 24px;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.add[_ngcontent-%COMP%] {\n  color: #27C46B;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.edit[_ngcontent-%COMP%] {\n  color: #FFC107;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.delete[_ngcontent-%COMP%] {\n  color: #E34724;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.add[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-right: -1px;\n  position: relative;\n  top: 3px;\n}\n\ntable.table[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 32px;\n  line-height: 32px;\n  box-shadow: none;\n  border-radius: 2px;\n}\n\ntable.table[_ngcontent-%COMP%]   .form-control.error[_ngcontent-%COMP%] {\n  border-color: #f50000;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.fixedTableHead[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 30vh;\n}\n\n.fixedTableHead[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1idXllcnMvYWRtaW4tYnV5ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtBQUVKOztBQUFBO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFIQTtFQUNJLGlCQUFBO0FBTUo7O0FBSkE7RUFDSSxtQkFBQTtBQU9KOztBQUxBO0VBQ0kscUJBQUE7QUFRSjs7QUFOQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQVNKOztBQVBBO0VBQ0ksWUFBQTtBQVVKOztBQVJBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFXSjs7QUFUQTtFQUNJLGNBQUE7QUFZSjs7QUFWQTtFQUNJLGNBQUE7QUFhSjs7QUFYQTtFQUNJLGNBQUE7QUFjSjs7QUFaQTtFQUNJLGVBQUE7QUFlSjs7QUFiQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQWdCSjs7QUFkQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFpQko7O0FBZkE7RUFDSSxxQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxhQUFBO0FBbUJKOztBQWpCQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQW9CSjs7QUFsQkE7RUFDSSxnQkFBQTtFQUNBLE1BQUE7QUFxQkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLWJ1eWVycy9hZG1pbi1idXllcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsYWJsZS15IHtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4udGFibGUtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1x0XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpO1xyXG59XHJcbi50YWJsZS10aXRsZSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxuLnRhYmxlLXRpdGxlIGgyIHtcclxuICAgIG1hcmdpbjogNnB4IDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4udGFibGUtdGl0bGUgLmFkZC1uZXcge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbn1cclxuLnRhYmxlLXRpdGxlIC5hZGQtbmV3IGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxudGFibGUudGFibGUge1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG50YWJsZS50YWJsZSB0ciB0aCwgdGFibGUudGFibGUgdHIgdGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTllOWU5O1xyXG59XHJcbnRhYmxlLnRhYmxlIHRoIGkge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG50YWJsZS50YWJsZSB0aDpsYXN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBtaW4td2lkdGg6IDI0cHg7XHJcbn0gICAgXHJcbnRhYmxlLnRhYmxlIHRkIGEuYWRkIHtcclxuICAgIGNvbG9yOiAjMjdDNDZCO1xyXG59XHJcbnRhYmxlLnRhYmxlIHRkIGEuZWRpdCB7XHJcbiAgICBjb2xvcjogI0ZGQzEwNztcclxufVxyXG50YWJsZS50YWJsZSB0ZCBhLmRlbGV0ZSB7XHJcbiAgICBjb2xvcjogI0UzNDcyNDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBhLmFkZCBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTFweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogM3B4O1xyXG59ICAgIFxyXG50YWJsZS50YWJsZSAuZm9ybS1jb250cm9sIHtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG50YWJsZS50YWJsZSAuZm9ybS1jb250cm9sLmVycm9yIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y1MDAwMDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCAuYWRkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmZpeGVkVGFibGVIZWFkIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGhlaWdodDogMzB2aDtcclxufVxyXG4uZml4ZWRUYWJsZUhlYWQgdGhlYWQgdGgge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminBuyersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-buyers',
                templateUrl: './admin-buyers.component.html',
                styleUrls: ['./admin-buyers.component.scss']
            }]
    }], function () { return [{ type: _sevices_buyers_service__WEBPACK_IMPORTED_MODULE_3__["BuyersService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "GIQH":
/*!**************************************************************************!*\
  !*** ./src/app/components/public/product-list/product-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/category */ "HLRD");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/product */ "yHTb");
/* harmony import */ var src_app_sevices_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sevices/products.service */ "IsAJ");
/* harmony import */ var src_app_sevices_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sevices/categories.service */ "WLZD");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product-card/product-card.component */ "M1FE");









function ProductListComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductListComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductListComponent_div_28_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onCategoryChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "radio-", cat_r6.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", cat_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "radio-", cat_r6.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r6.naziv);
} }
function ProductListComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductListComponent_ng_container_54_app_product_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-card", 57);
} if (rf & 2) {
    const product_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r9);
} }
function ProductListComponent_ng_container_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductListComponent_ng_container_54_app_product_card_1_Template, 1, 1, "app-product-card", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isInPriceRange(product_r9.cijena) && ctx_r3.isCategory(product_r9.kategorijaId));
} }
function ProductListComponent_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductListComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductListComponent_div_112_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onCategoryChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "radio-", cat_r12.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", cat_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "radio-", cat_r12.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r12.naziv);
} }
class ProductListComponent {
    constructor(productsService, categoriesService, titleService) {
        this.productsService = productsService;
        this.categoriesService = categoriesService;
        this.titleService = titleService;
    }
    ngOnInit() {
        this.titleService.setTitle("Cascadus - Proizvodi");
        this.clientPrice = 10000;
        this.clientSelectedCategory = -1;
        this.categories = [];
        this.products = [];
        this.categories = new Array();
        this.products = new Array();
        this.categoriesLoading = true;
        this.productsLoading = true;
        this.getData();
    }
    getData() {
        this.productsService.getActive()
            .subscribe(result => {
            result.forEach(r => {
                let pro = new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
                Object.assign(pro, r);
                this.products.push(pro);
            });
            this.productsLoading = false;
            //console.table(this.products);
        });
        this.categoriesService.getActiveCategories()
            .subscribe(result => {
            result.forEach(r => {
                let cat = new src_app_models_category__WEBPACK_IMPORTED_MODULE_1__["Category"]();
                Object.assign(cat, r);
                this.categories.push(cat);
            });
            this.categoriesLoading = false;
        });
    }
    onPriceSliderChange(event) {
        var slider = (event.target);
        this.clientPrice = Number.parseInt(slider.value);
    }
    onCategoryChanged(event) {
        var rb = (event.target);
        this.clientSelectedCategory = Number.parseInt(rb.value);
    }
    isInPriceRange(price) {
        if (price <= this.clientPrice) {
            return true;
        }
        return false;
    }
    isCategory(productCategory) {
        if (this.clientSelectedCategory == -1) {
            return true;
        }
        else if (productCategory == this.clientSelectedCategory) {
            return true;
        }
        else {
            return false;
        }
    }
    sortProducts(event) {
        var type = event.target.id;
        if (type == "nameaz") {
            this.products.sort((one, two) => (one.naziv.toLowerCase() < two.naziv.toLowerCase() ? -1 : 1));
        }
        else if (type == "nameza") {
            this.products.sort((one, two) => (one.naziv.toLowerCase() > two.naziv.toLowerCase() ? -1 : 1));
        }
        else if (type == "def") {
            this.products.sort((a, b) => a.id > b.id ? -1 : 1);
        }
        else if (type == "lth") {
            this.products.sort((a, b) => a.cijena > b.cijena ? -1 : 1);
        }
        else if (type == "htl") {
            this.products.sort((a, b) => a.cijena < b.cijena ? -1 : 1);
        }
    }
    showFilterModal(state) {
        if (state) {
            document.getElementById('filterModal').classList.remove('hide');
            document.getElementById('filterModal').classList.add('show');
        }
        else {
            document.getElementById('filterModal').classList.remove('show');
            document.getElementById('filterModal').classList.add('hide');
            document.getElementsByClassName('modal-backdrop')[0].remove();
        }
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sevices_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sevices_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"])); };
ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], decls: 116, vars: 8, consts: [[1, "mt-5", "pt-5"], [1, "row"], [1, "col-xs-12", "col-md-3", "col-xl-2", "shadow-right", "p-5", "d-none", "d-md-block"], [1, "d-none", "d-md-block", "mx-auto", "text-center"], [1, "mb-5"], [1, "font-weight-bold", "gray-text", "mb-3"], [1, "btn-group-vertical"], ["id", "def", 1, "btn", "btn-sm", "btn-outline-elegant", 3, "click"], ["id", "nameaz", 1, "btn", "btn-sm", "btn-outline-elegant", 3, "click"], ["id", "nameza", 1, "btn", "btn-sm", "btn-outline-elegant", 3, "click"], ["id", "htl", 1, "btn", "btn-sm", "btn-outline-elegant", 3, "click"], ["id", "lth", 1, "btn", "btn-sm", "btn-outline-elegant", 3, "click"], [1, "mb-5", "text-center"], [1, "font-weight-bold", "mb-3"], [1, "form-check", "pl-0", "mb-2"], ["type", "radio", "id", "radio-all", "name", "categoryFilters", "value", "-1", "checked", "", 1, "form-check-input", "orange", 3, "change"], ["for", "radio-all", 1, "form-check-label"], ["class", "loading-overlay-for-this-div", 4, "ngIf"], ["class", "form-check pl-0 mb-2", 4, "ngFor", "ngForOf"], [1, "range-field", "w-100"], ["type", "range", "step", "50", "value", "10000", "min", "0", "max", "10000", 3, "change"], [1, "row", "justify-content-center"], [1, "col-md-4", "text-left"], [1, "dark-grey-text"], ["id", "resellerEarnings"], [1, "col-md-4", "text-center"], [1, "orange-text"], ["id", "clientPrice"], [1, "col-md-4", "text-right"], ["id", "maximumPrice"], [1, "col-xs-12", "col-md-9", "col-xl-10", "gray-dark", "mt-3"], ["data-toggle", "modal", "data-target", "#filterModal", 1, "d-flex", "d-md-none", 2, "width", "50px", "height", "50px", "transform", "rotate(315deg)", "justify-content", "center", "align-items", "center", "display", "flex", "position", "fixed", "z-index", "1000", "bottom", "40px", "right", "40px", "background-color", "#333", "border", "1px solid #e1b91b", "border-radius", "50px", 3, "click"], [1, "material-icons", "material-icons-outline", "orange-text", 2, "font-size", "xx-large"], [4, "ngFor", "ngForOf"], ["id", "filterModal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade", "m-auto"], ["role", "shoppingCart", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLongTitle", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true", 1, "red-text"], [1, "modal-body"], [1, "mx-auto", "text-center"], [1, "btn-group", "mx-auto"], ["type", "range", "step", "50", "value", "999", "min", "0", "max", "10000", 3, "change"], [1, "row", "m-0", "p-0", "justify-content-center"], [1, "col-4"], [1, "muted"], [1, "modal-footer", "d-flex", "justify-content-center"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-sm", "btn-outline-danger"], [1, "loading-overlay-for-this-div"], ["aria-hidden", "false", "role", "status", 1, "text-warning"], ["alt", "cascadus pinguin with rocket - loading", "src", "../../../../assets/pinguin-rocket.png", "width", "75px", "height", "75px", 1, "spinner-pinguin"], ["type", "radio", "name", "categoryFilters", 1, "form-check-input", "orange", 3, "id", "value", "change"], [1, "form-check-label", 3, "for"], ["alt", "cascadus pinguin with rocket - loading", "src", "../../../../assets/pinguin-rocket.png", 1, "spinner-pinguin"], ["class", "col-xs-12 col-md-6 col-lg-4 col-xl-3 m-0 p-0", 3, "product", 4, "ngIf"], [1, "col-xs-12", "col-md-6", "col-lg-4", "col-xl-3", "m-0", "p-0", 3, "product"], ["aria-hidden", "true", "role", "status", 1, "spinner-pinguin", "text-warning"], [1, "sr-only"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sortiranje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_9_listener($event) { return ctx.sortProducts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Zadano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_11_listener($event) { return ctx.sortProducts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Naziv: a-\u017E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_13_listener($event) { return ctx.sortProducts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Naziv: \u017E-a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_15_listener($event) { return ctx.sortProducts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cijena: uzlazno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_17_listener($event) { return ctx.sortProducts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cijena: silazno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Kategorije");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductListComponent_Template_input_change_24_listener($event) { return ctx.onCategoryChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Prika\u017Ei sve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProductListComponent_div_27_Template, 3, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProductListComponent_div_28_Template, 4, 4, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cijena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductListComponent_Template_input_change_34_listener($event) { return ctx.onPriceSliderChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "0 kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "10 000 kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ProductListComponent_div_49_Template, 3, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_a_click_50_listener() { return ctx.showFilterModal(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "filter_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ProductListComponent_ng_container_54_Template, 2, 1, "ng-container", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Filtriranje proizvoda:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Sortiranje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_71_listener($event) { return ctx.sortProducts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Zadano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_73_listener($event) { return ctx.sortProducts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Naziv: a-\u017E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_75_listener($event) { return ctx.sortProducts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Naziv: \u017E-a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_78_listener($event) { return ctx.sortProducts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Cijena: uzlazno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_80_listener($event) { return ctx.sortProducts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Cijena: silazno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Cijena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductListComponent_Template_input_change_87_listener($event) { return ctx.onPriceSliderChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "strong", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "0 kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "strong", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "strong", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "10 000 kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "small", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Povucite slider do cijene koju \u017Eelite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Kategorije");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductListComponent_Template_input_change_108_listener($event) { return ctx.onCategoryChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Prika\u017Ei sve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, ProductListComponent_div_111_Template, 4, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, ProductListComponent_div_112_Template, 4, 4, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Zatvori filtere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categoriesLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.clientPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.clientPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categoriesLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_7__["ProductCardComponent"]], styles: [".link-black[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.link-black[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.link-black[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #0056b3;\n}\n\n.divider-small[_ngcontent-%COMP%] {\n  width: 30px;\n  background-color: rgba(0, 0, 0, 0.1);\n  height: 3px;\n}\n\n.parallax[_ngcontent-%COMP%] {\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n@media only screen and (max-device-width: 1600px) {\n  .parallax[_ngcontent-%COMP%] {\n    background-attachment: scroll;\n    min-height: 600px;\n  }\n}\n\n.parallax5[_ngcontent-%COMP%] {\n  min-height: 650px;\n  background-image: url(\"/assets/svg/undraw_walking.svg\");\n  image-rendering: optimizeSpeed;\n}\n\n.shadow-right[_ngcontent-%COMP%] {\n  box-shadow: inset 0 -4em 4em rgba(3, 3, 3, 0.1), 0 0 0 0px white, 0.4em 0.4em 1em rgba(3, 3, 3, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQ0E7RUFDRTtJQUNFLDZCQUFBO0lBQ0EsaUJBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSx1REFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxvR0FDQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rLWJsYWNrIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLmxpbmstYmxhY2sgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwNTZiMztcclxuICB9XHJcblxyXG4gIC5saW5rLWJsYWNrIC5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwMDU2YjM7XHJcbiAgfVxyXG5cclxuICAuZGl2aWRlci1zbWFsbCB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgfVxyXG5cclxuICAucGFyYWxsYXgge1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDE2MDBweCkge1xyXG4gIC5wYXJhbGxheCB7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcclxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBhcmFsbGF4NSB7XHJcbiAgICBtaW4taGVpZ2h0OiA2NTBweDsgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvc3ZnL3VuZHJhd193YWxraW5nLnN2ZycpO1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xyXG59XHJcbi5zaGFkb3ctcmlnaHQge1xyXG4gICAgYm94LXNoYWRvdzogXHJcbiAgICBpbnNldCAwIC00ZW0gNGVtIHJnYmEoMywzLDMsMC4xKSwgXHJcbiAgICAwIDAgIDAgMHB4IHJnYigyNTUsMjU1LDI1NSksXHJcbiAgICAwLjRlbSAwLjRlbSAxZW0gcmdiYSgzLDMsMywwLjMpO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-list',
                templateUrl: './product-list.component.html',
                styleUrls: ['./product-list.component.scss']
            }]
    }], function () { return [{ type: src_app_sevices_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }, { type: src_app_sevices_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }]; }, null); })();


/***/ }),

/***/ "GV//":
/*!****************************************************************!*\
  !*** ./src/app/components/public/content/content.component.ts ***!
  \****************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_sevices_emails_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sevices/emails.service */ "tPiu");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








class ContentComponent {
    constructor(fb, emailsService, toastr, titleService) {
        this.fb = fb;
        this.emailsService = emailsService;
        this.toastr = toastr;
        this.titleService = titleService;
    }
    ngOnInit() {
        this.initForms();
        this.titleService.setTitle("Cascadus - Početna stranica");
    }
    initForms() {
        this.subscribeForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    subscribe() {
        if (this.subscribeForm.valid) {
            var email = this.subscribeForm.get('email').value;
            this.emailsService.subscribe(email).subscribe((result) => {
                if (result.toString() == "true") {
                    this.toastr.success('Od sada si služebno pretplaćen/a na naš newsletter. Nitko neće prije tebe saznati za opasne popuste!', 'Newsletter', { timeOut: 1500 });
                }
                else if (result.toString() == "false") {
                    this.toastr.warning('Već ti pretplaćen/a na naš newsletter. No cijenimo to što bi se pretplatio/la i dva puta!', 'Newsletter', { timeOut: 1500 });
                }
                else {
                    this.toastr.warning('Neuspješna pretplata na newsletter!', 'Newsletter', { timeOut: 1500 });
                }
            });
        }
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sevices_emails_service__WEBPACK_IMPORTED_MODULE_2__["EmailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["content"]], decls: 167, vars: 7, consts: [[1, "p-0", "m-0"], [1, "row", "m-0", "mt-5", "p-0", "pt-5"], [1, "col-12", "m-0", "p-0", "text-center"], ["id", "carousel-landing", "data-ride", "carousel", 1, "carousel", "slide", "rounded", "w-100", "carousel-fade", "carousel-thumbnails", "m-0", "p-0", "mt-md-1"], ["role", "listbox", 1, "carousel-inner", "text-center"], [1, "carousel-indicators"], ["data-target", "#carousel-landing", "data-slide-to", "0", 1, "active", "orange"], ["data-target", "#carousel-landing", "data-slide-to", "1", 1, "orange"], ["data-target", "#carousel-landing", "data-slide-to", "2", 1, "orange"], ["data-target", "#carousel-landing", "data-slide-to", "3", 1, "orange"], ["data-target", "#carousel-landing", "data-slide-to", "4", 1, "orange"], ["data-target", "#carousel-landing", "data-slide-to", "5", 1, "orange"], [1, "carousel-item", "active", "white", "landing-carousel-item", "d-flex", "justify-content-center", "text-center", 2, "height", "auto", "width", "100%"], [1, "d-block", "d-md-none", "justify-content-center", 2, "background", "url('../../../../assets/mavic-air/mavic-air-2-landing-background.jpg') no-repeat center top/cover", "width", "100%", "height", "58vh", 3, "routerLink"], [1, "white-text", "mt-4"], ["src", "../../../../assets/mavic-air/mavic-air-2-landing-foreground.jpg", 1, "img", "img-responsive", "p-0", "m-0", 2, "width", "130vw", "height", "50vh", "position", "absolute", "top", "20px", "left", "-50px"], [1, "d-none", "d-md-block", "text-center", 2, "background", "url('../../../../assets/homepage/mavic-air-2-naslovna-pc.jpg') no-repeat center top/cover", "width", "100%", "height", "110vh", 3, "routerLink"], [1, "carousel-item", "white", "landing-carousel-item", "d-flex", "justify-content-center", "text-center"], [1, "d-block", "d-md-none", 2, "background", "url('../../../../assets/homepage/basser-m12-naslovna-mobile.jpg') no-repeat center center/cover", "width", "100%", "height", "58vh", 3, "routerLink"], [1, "d-none", "d-md-block", "text-center", 2, "background", "url('../../../../assets/homepage/basser-m12-naslovna-pc.jpg') no-repeat center top/cover", "width", "100%", "height", "110vh", 3, "routerLink"], [1, "d-block", "d-md-none", 2, "background", "url('../../../../assets/homepage/dji-mini-2-naslovna1.jpg') no-repeat center center/cover", "width", "100%", "height", "58vh"], [1, "d-none", "d-md-block", 2, "background", "url('../../../../assets/homepage/dji-mini-2-naslovna1.jpg') no-repeat center top/cover", "width", "100%", "height", "110vh"], [1, "d-block", "d-md-none", 2, "background", "url('../../../../assets/homepage/phanotm-4.jpg') no-repeat center center/cover", "width", "100%", "height", "58vh"], [1, "d-none", "d-md-block", 2, "background", "url('../../../../assets/homepage/phantom-4-pro-desktop.jpg') no-repeat 53% center/cover", "width", "100%", "height", "110vh"], [1, "d-block", "d-md-none", 2, "background", "url('../../../../assets/homepage/redragon.jpg') no-repeat center center/cover", "width", "100%", "height", "58vh"], [1, "d-none", "d-md-block", 2, "background", "url('../../../../assets/homepage/redragon.jpg') no-repeat 60% top/cover", "width", "100%", "height", "110vh"], [1, "carousel-item", "white", "landing-carousel-item", "d-flex", "justify-content-center", "text-center", 2, "height", "65vh", "width", "100%"], [1, "w-75", "d-flex", "justify-content-center", "m-auto", "p-auto"], [1, "shadow", "p-3", "white", "card", "card-body", "align-self-center"], [1, "orange-text"], [1, "font-weight-bold"], [1, "d-none", "d-sm-block", 3, "formGroup", "ngSubmit"], [1, "input-group"], ["type", "email", "formControlName", "email", "id", "subscriberEmail", "placeholder", "Va\u0161a email adresa", 1, "form-control", "m-auto"], [1, "input-group-btn"], ["type", "submit", 1, "btn", "btn-elegant", "orange-text", "m-auto"], [1, "d-block", "d-sm-none"], ["type", "email", "id", "subscriberEmail", "placeholder", "Va\u0161a email adresa", 1, "form-control", "m-auto", "my-2"], ["type", "submit", 1, "btn", "btn-elegant", "orange-text", "m-auto", "my-2"], ["role", "button", "data-slide", "prev", 1, "carousel-control-prev", 3, "href"], ["aria-hidden", "true", 1, "carousel-control-prev-icon", "grey"], [1, "sr-only"], ["role", "button", "data-slide", "next", 1, "carousel-control-next", 3, "href"], ["aria-hidden", "true", 1, "carousel-control-next-icon", "grey"], [1, "text-center", "pb-5"], [1, "col-12", "py-4"], [1, "font-weight-light"], [1, "orange-text", "bg-dark", "py-4", "px-0", "mx-0"], [1, "pt-5", "pb-0"], [1, "m-0", "p-0"], ["id", "offerings", 1, "row", "parallax", "parallax2", "p-0", "m-0"], [1, "row", "p-0", "m-0"], [1, "row", "justify-content-center", "text-center", "p-3"], [1, "col-xs-12", "col-sm-6", "col-md-4", "col-lg-3", "p-4", "m-3", "card", "opacity-1", "m-xs-3"], [1, "material-icons", "material-icon-large"], [1, "text-muted"], [1, "col-xs-12", "col-sm-6", "col-md-4", "col-lg-3", "p-4", "m-3", "card", "m-xs-3"], [1, "bg-dark", "orange-text", "text-center", "pb-5"], [1, "row"], [1, "col-sm-12", "py-3", "text-center", "justify-content-center"], [1, "material-icons", "material-icon-large", "scrolldown-animated"], [1, "container"], ["id", "testimonies", 1, "row", "p-1", "m-0", 2, "background-image", "url('../../../../assets/svg/undraw_remember.svg')"], [1, "col-sm-12", "col-md-6", "col-lg-4", "col-xl-3", "p-0", "m-auto"], [1, "testimonial-card", "mx-auto", "my-3"], [1, "text"], [1, "material-icons", "font-weight-bold"], [1, "footer"], [1, "person", "mx-auto"], [1, "orange", "p-5", "m-auto"], [1, "container", "d-flex", "justify-content-center", "text-center"], [1, "font-weight-light", "black-text"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mavic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Air ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Pridru\u017Ei se");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " na\u0161em timu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Budi aktualan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "form", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContentComponent_Template_form_ngSubmit_43_listener() { return ctx.subscribe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Pretplati se");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "form", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Pretplati me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Pretplatom prihva\u0107ate da Vam Cascadus \u0161alje obavijesti o novim proizvodima i ostalih informacija vezanih uz Cascadus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h1", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Zapo\u010Dnite svoju tehnolo\u0161ku avanturu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Cascadus tehnologije");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Cascadus tim trudi se pru\u017Eiti Vam najbolje, najnovije, najatraktivnije i najinovativnije proizvode na tr\u017Ei\u0161tu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "section", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "local_shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Ekspresno brza isporuka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Svaka narud\u017Eba \u0107e biti isporu\u010Dena u roku 24 sata od trenutka narud\u017Ebe. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "verified_user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Sigurnost na prvom mjestu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Garancija 2 godine i 100% povrat novca ukoliko niste zadovoljni proizvodom. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Pla\u0107anje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Nudimo vam pla\u0107anje pouze\u0107em ili karti\u010Dno pla\u0107anje u na\u0161oj web trgovini. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "eco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Eco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Ekolo\u0161ki i ekonomski efikasna rje\u0161enja.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "support_agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Korisni\u010Dka podr\u0161ka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Korisni\u010Dka podr\u0161ka 0-24 tokom cijele godine.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "To\u010Dnost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Naru\u010Deni proizvodi dolaze u roku 3 radna dana na Va\u0161a vrata.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h1", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\u0160to na\u0161i kupci misle o nama?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "format_quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Uzeo sluske i dosle za 2 dana. Mogu rec da sam za sad prezadovoljan. Baterija doslovno traje cijeli dan... Napune se za pol sata.. I approve it \uD83D\uDE0A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "format_quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h3", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Hrvoje M.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "format_quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Rombac i slu\u0161alice su tu, sada nam jo\u0161 samo dron fali\uD83D\uDE02. Sve stiglo glsom za 3 dana tak da super.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "format_quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h3", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Mihael P.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "format_quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Ekipa iz podrske je fantasti\u010Dna. Rije\u0161e sve doslovno u par minuta. Svaka \u010Dast momci!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "format_quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h3", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Boren D.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h1", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Sada je vrijeme za promjenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/product/10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/product/10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/product/4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/product/4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.subscribeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#carousel-landing", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#carousel-landing", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".content-spacer[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n\n@media only screen and (min-width: 650px) {\n  .content-spacer[_ngcontent-%COMP%] {\n    margin-top: 5%;\n  }\n}\n\n.parallax-header[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  margin-top: 5cm;\n}\n\n.parallax-carousel[_ngcontent-%COMP%] {\n  min-height: 50vh;\n  height: 50vh;\n  image-rendering: optimizeSpeed;\n}\n\n.landing-carousel-item[_ngcontent-%COMP%] {\n  height: 65vh;\n}\n\n.parallax1[_ngcontent-%COMP%] {\n  min-height: 650px;\n  background-image: url(\"/assets/work.jpg\");\n  image-rendering: optimizeSpeed;\n}\n\n.parallax2[_ngcontent-%COMP%] {\n  min-height: 550px;\n  background-image: url(\"/assets/svg/undraw_offerings.svg\");\n  image-rendering: optimizeSpeed;\n}\n\n.parallax3[_ngcontent-%COMP%] {\n  min-height: 650px;\n  background-image: url(\"/assets/svg/undraw_walking.svg\");\n  image-rendering: optimizeSpeed;\n}\n\n.w-3[_ngcontent-%COMP%] {\n  width: 33%;\n}\n\n.animate-opacity[_ngcontent-%COMP%] {\n  animation: opac 0.8s;\n}\n\n.wide-letter-spacing[_ngcontent-%COMP%] {\n  letter-spacing: 6px;\n}\n\n.display-middle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 25%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\n.scrolldown[_ngcontent-%COMP%] {\n  bottom: 5px;\n  left: 50%;\n  width: 30px;\n  height: 30px;\n  transform: rotate(45deg);\n}\n\n.scrolldown-animated[_ngcontent-%COMP%] {\n  animation: animate 1.5s linear infinite;\n}\n\n@keyframes animate {\n  0% {\n    top: -10px;\n    left: -10px;\n    opacity: 0.2;\n  }\n  50% {\n    top: 0px;\n    left: 0px;\n    opacity: 1;\n  }\n  100% {\n    top: 10px;\n    left: 10px;\n    opacity: 0.2;\n  }\n}\n\n.material-icon-large[_ngcontent-%COMP%] {\n  font-size: 68px;\n}\n\n.bg-gray[_ngcontent-%COMP%] {\n  background-color: #333;\n}\n\n.card-mod[_ngcontent-%COMP%] {\n  background: rgba(122, 130, 136, 0.2) !important;\n}\n\n.card-mod[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background: rgba(122, 130, 136, 0.2) !important;\n}\n\n.card-mod[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: rgba(122, 130, 136, 0.2) !important;\n}\n\n.card-mod[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  background: rgba(122, 130, 136, 0.2) !important;\n}\n\n.testimonial-card[_ngcontent-%COMP%] {\n  min-height: 300px;\n  width: 350px;\n  background-color: white;\n  opacity: 0.8;\n  border-radius: 10px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n}\n\n.testimonial-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n}\n\n.testimonial-card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  padding: 2.2em;\n  line-height: 1.7em;\n  position: relative;\n  font-size: 18px;\n}\n\n.testimonial-card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  background-color: tomato;\n  height: 120px;\n  width: 120px;\n  border-radius: 50%;\n  border: 5px solid orange;\n  position: absolute;\n  top: -50%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  justify-content: center;\n}\n\n#testimonies[_ngcontent-%COMP%]:nth-child(3)   .testimonial-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  background: no-repeat center/cover url(https://image.shutterstock.com/image-photo/portrait-beautiful-hispanic-woman-smiling-260nw-1640963581.jpg);\n  image-rendering: optimizeSpeed;\n}\n\n#testimonies[_ngcontent-%COMP%]:nth-child(4)   .testimonial-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  background: no-repeat center/cover url(https://image.shutterstock.com/image-photo/portrait-attractive-man-smiling-confident-260nw-1629683515.jpg);\n  image-rendering: optimizeSpeed;\n}\n\n.testimonial-card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  background: black;\n  height: 5em;\n  border-radius: 0 0 10px 10px;\n  position: relative;\n}\n\n.testimonial-card[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%] {\n  font-size: 400%;\n  float: right;\n  opacity: 0.1;\n  transform: rotate(10deg) translate(-10px, -40px);\n  color: #4D3FA3;\n}\n\n.testimonial-card[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%] {\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -80%);\n  font-size: 1.25em;\n  font-weight: 500;\n}\n\n.opacity-1[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUNBO0VBQ0k7SUFDSSxjQUFBO0VBRU47QUFDRjs7QUFDRTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDTjs7QUFFRTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBQ047O0FBQ0U7RUFDSSxZQUFBO0FBRU47O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0EsOEJBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EseURBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSx1REFBQTtFQUNBLDhCQUFBO0FBRUo7O0FBQUU7RUFDSSxVQUFBO0FBR047O0FBREU7RUFDRSxvQkFBQTtBQUlKOztBQUZFO0VBQ0ksbUJBQUE7QUFLTjs7QUFIRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0FBTUo7O0FBSEE7RUFDSSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFNSjs7QUFKQTtFQUNJLHVDQUFBO0FBT0o7O0FBTEE7RUFDSTtJQUNJLFVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQVFOO0VBTkU7SUFDSSxRQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUFRTjtFQU5FO0lBQ0ksU0FBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBUU47QUFDRjs7QUFMQTtFQUNJLGVBQUE7QUFPSjs7QUFKQTtFQUNJLHNCQUFBO0FBT0o7O0FBSkE7RUFDSSwrQ0FBQTtBQU9KOztBQUxBO0VBQ0ksK0NBQUE7QUFRSjs7QUFOQTtFQUNJLCtDQUFBO0FBU0o7O0FBUEE7RUFDSSwrQ0FBQTtBQVVKOztBQVJBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBV0o7O0FBVEU7RUFDSSxzQkFBQTtBQVlOOztBQVRFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBWUo7O0FBVEU7RUFDRSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQVlKOztBQVRBO0VBQ0UsaUpBQUE7RUFFSSw4QkFBQTtBQVdOOztBQVJBO0VBQ0UsaUpBQUE7RUFFSSw4QkFBQTtBQVVOOztBQVBFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQVVKOztBQVBFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDRCxjQUFBO0FBVUg7O0FBUEU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVVKOztBQVJFO0VBQ0UsWUFBQTtBQVdKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtc3BhY2VyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XHJcbiAgICAuY29udGVudC1zcGFjZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhcmFsbGF4LWhlYWRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1Y207XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXJhbGxheC1jYXJvdXNlbCB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDUwdmg7XHJcbiAgICAgIGhlaWdodDogNTB2aDtcclxuICAgICAgaW1hZ2UtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xyXG4gIH1cclxuICAubGFuZGluZy1jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgaGVpZ2h0OiA2NXZoO1xyXG4gIH1cclxuXHJcbi5wYXJhbGxheDF7XHJcbiAgICBtaW4taGVpZ2h0OiA2NTBweDsgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvd29yay5qcGcnKTtcclxuICAgIGltYWdlLXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcclxufVxyXG5cclxuLnBhcmFsbGF4MntcclxuICAgIG1pbi1oZWlnaHQ6IDU1MHB4OyBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9zdmcvdW5kcmF3X29mZmVyaW5ncy5zdmcnKTtcclxuICAgIGltYWdlLXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcclxufVxyXG5cclxuLnBhcmFsbGF4M3tcclxuICAgIG1pbi1oZWlnaHQ6IDY1MHB4OyBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9zdmcvdW5kcmF3X3dhbGtpbmcuc3ZnJyk7XHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XHJcbn1cclxuICAudy0ze1xyXG4gICAgICB3aWR0aDogMzMlO1xyXG4gIH1cclxuICAuYW5pbWF0ZS1vcGFjaXR5IHtcclxuICAgIGFuaW1hdGlvbjogb3BhYyAwLjhzO1xyXG59XHJcbiAgLndpZGUtbGV0dGVyLXNwYWNpbmcge1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogNnB4O1xyXG4gIH1cclxuICAuZGlzcGxheS1taWRkbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNSU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbn1cclxuXHJcbi5zY3JvbGxkb3duIHtcclxuICAgIGJvdHRvbTogNXB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuLnNjcm9sbGRvd24tYW5pbWF0ZWQge1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlIDEuNXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XHJcbiAgICAwJXtcclxuICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbi1sYXJnZSB7XHJcbiAgICBmb250LXNpemU6IDY4cHg7XHJcbn1cclxuXHJcbi5iZy1ncmF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5jYXJkLW1vZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyMiwgMTMwLCAxMzYsIDAuMikhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLW1vZCAuY2FyZC1ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTIyLCAxMzAsIDEzNiwgMC4yKSFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQtbW9kIC5jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyMiwgMTMwLCAxMzYsIDAuMikhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLW1vZCAuY2FyZC1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMjIsIDEzMCwgMTM2LCAwLjIpIWltcG9ydGFudDtcclxufVxyXG4udGVzdGltb25pYWwtY2FyZHtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAudGVzdGltb25pYWwtY2FyZDpob3ZlcntcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcclxuICB9XHJcblxyXG4gIC50ZXN0aW1vbmlhbC1jYXJkIC50ZXh0e1xyXG4gICAgcGFkZGluZzogMi4yZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS43ZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAudGVzdGltb25pYWwtY2FyZCAuaW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRvbWF0bztcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCBvcmFuZ2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC01MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gIH0gXHJcbiAgXHJcbiN0ZXN0aW1vbmllczpudGgtY2hpbGQoMykgLnRlc3RpbW9uaWFsLWNhcmQgLmZvb3RlciAuaW1hZ2V7XHJcbiAgYmFja2dyb3VuZDpuby1yZXBlYXQgY2VudGVyL2NvdmVyIHVybChcclxuICAgICAgaHR0cHM6Ly9pbWFnZS5zaHV0dGVyc3RvY2suY29tL2ltYWdlLXBob3RvL3BvcnRyYWl0LWJlYXV0aWZ1bC1oaXNwYW5pYy13b21hbi1zbWlsaW5nLTI2MG53LTE2NDA5NjM1ODEuanBnKTtcclxuICAgICAgaW1hZ2UtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xyXG59XHJcblxyXG4jdGVzdGltb25pZXM6bnRoLWNoaWxkKDQpIC50ZXN0aW1vbmlhbC1jYXJkIC5mb290ZXIgLmltYWdle1xyXG4gIGJhY2tncm91bmQ6bm8tcmVwZWF0IGNlbnRlci9jb3ZlciB1cmwoXHJcbiAgICAgIGh0dHBzOi8vaW1hZ2Uuc2h1dHRlcnN0b2NrLmNvbS9pbWFnZS1waG90by9wb3J0cmFpdC1hdHRyYWN0aXZlLW1hbi1zbWlsaW5nLWNvbmZpZGVudC0yNjBudy0xNjI5NjgzNTE1LmpwZyk7XHJcbiAgICAgIGltYWdlLXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcclxufVxyXG5cclxuICAudGVzdGltb25pYWwtY2FyZCAuZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLnRlc3RpbW9uaWFsLWNhcmQgLnF1b3Rle1xyXG4gICAgZm9udC1zaXplOiA0MDAlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgb3BhY2l0eTogLjE7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZykgdHJhbnNsYXRlKC0xMHB4LCAtNDBweCk7XHJcbiAgIGNvbG9yOiM0RDNGQTM7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXN0aW1vbmlhbC1jYXJkIC5wZXJzb257XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTgwJSk7XHJcbiAgICBmb250LXNpemU6MS4yNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLm9wYWNpdHktMSB7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_sevices_emails_service__WEBPACK_IMPORTED_MODULE_2__["EmailsService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }]; }, null); })();


/***/ }),

/***/ "HLRD":
/*!************************************!*\
  !*** ./src/app/models/category.ts ***!
  \************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
}


/***/ }),

/***/ "HYO+":
/*!****************************************!*\
  !*** ./src/app/models/discountCode.ts ***!
  \****************************************/
/*! exports provided: DiscountCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountCode", function() { return DiscountCode; });
class DiscountCode {
}


/***/ }),

/***/ "Hs9l":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");




class AuthGuard {
    /**
     *
     */
    constructor(router, jwtHelper) {
        this.router = router;
        this.jwtHelper = jwtHelper;
    }
    canActivate(route, state) {
        const token = localStorage.getItem("jwt");
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            const role = localStorage.getItem("role");
            if (role == "Admin" && route.url.toString() == "admin") {
                return true;
            }
            else if (role == "Korisnik" && route.url.toString() == "profile") {
                return true;
            }
            else {
                this.router.navigate(["home"]);
                return false;
            }
        }
        else {
            this.router.navigate(["account"]);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"] }]; }, null); })();


/***/ }),

/***/ "HzFZ":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/login */ "kK2o");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_sevices_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sevices/auth.service */ "YcCY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid username or password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
class LoginComponent {
    constructor(router, auth, fb) {
        this.router = router;
        this.auth = auth;
        this.fb = fb;
        this.invalidLogin = false;
    }
    ngOnInit() {
        this.initForms();
    }
    initForms() {
        this.loginForm = this.fb.group({
            loginUsername: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            loginPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    login() {
        let username = this.loginForm.get("loginUsername").value;
        let password = this.loginForm.get("loginPassword").value;
        const user = new src_app_models_login__WEBPACK_IMPORTED_MODULE_2__["Login"](username, password);
        this.auth.login(user)
            .subscribe(result => {
            const token = result.token;
            localStorage.setItem("jwt", token);
            this.invalidLogin = false;
            const role = result.role;
            localStorage.setItem("role", role);
            if (role == "Admin") {
                this.router.navigate(["admin"]);
            }
            if (role == "Korisnik") {
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
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sevices_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 15, vars: 3, consts: [[1, "login-form", "mt-5"], [1, "panel"], ["id", "Login", "name", "loginForm", 1, "form", "form-login", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "loginUsername", "required", "", "autofocus", "", "minlength", "5", "id", "login-email", "placeholder", "Korisni\u010Dko ime", "name", "username", 1, "form-control"], ["type", "password", "formControlName", "loginPassword", "required", "", "minlength", "8", "id", "login-password", "placeholder", "Lozinka", "name", "password", 1, "form-control"], ["class", "alert alert-danger m-auto", 4, "ngIf"], [1, "forgot"], [3, "routerLink"], ["type", "submit", 1, "btn", "btn-outline-primary"], [1, "alert", "alert-danger", "m-auto"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 5, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/resetPassword");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #444444;\n  font-size: 18px;\n  margin: 0 0 8px 0;\n}\n\n.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #777777;\n  font-size: 14px;\n  margin-bottom: 30px;\n  line-height: 24px;\n}\n\n.login-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background: #f7f7f7 none repeat scroll 0 0;\n  border: 1px solid #d4d4d4;\n  border-radius: 4px;\n  font-size: 14px;\n  height: 50px;\n  line-height: 50px;\n}\n\n.main-div[_ngcontent-%COMP%] {\n  background: #ffffff none repeat scroll 0 0;\n  border-radius: 2px;\n  margin: 10px auto 30px;\n  max-width: 38%;\n  padding: 50px 70px 70px 71px;\n}\n\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  text-decoration: underline;\n}\n\n.login-form[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: orange none repeat scroll 0 0;\n  border-color: orange;\n  color: #ffffff;\n  font-size: 14px;\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  padding: 0;\n}\n\n.forgot[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 30px;\n}\n\n.login-form[_ngcontent-%COMP%]   .btn.btn-primary.reset[_ngcontent-%COMP%] {\n  background: #ff9900 none repeat scroll 0 0;\n}\n\n.back[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: 10px;\n}\n\n.back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 13px;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsY0FBQTtFQUFlLGVBQUE7RUFBZ0IsaUJBQUE7QUFJMUM7O0FBSEE7RUFBVyxjQUFBO0VBQWUsZUFBQTtFQUFnQixtQkFBQTtFQUFvQixpQkFBQTtBQVU5RDs7QUFUQTtFQUNFLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFZRjs7QUFWQTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQWFGOztBQVZBO0VBQ0UsbUJBQUE7QUFhRjs7QUFYQTtFQUFhLGtCQUFBO0FBZWI7O0FBZEE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBaUJGOztBQWZBO0VBQ0UseUNBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsZ0JBQUE7RUFBa0IsbUJBQUE7QUFvQnBCOztBQWxCQTtFQUNFLDBDQUFBO0FBcUJGOztBQW5CQTtFQUFRLGdCQUFBO0VBQWtCLGdCQUFBO0FBd0IxQjs7QUF2QkE7RUFBUyxXQUFBO0VBQWEsZUFBQTtFQUFnQixxQkFBQTtBQTZCdEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwgaDJ7IGNvbG9yOiM0NDQ0NDQ7IGZvbnQtc2l6ZToxOHB4OyBtYXJnaW46MCAwIDhweCAwO31cclxuLnBhbmVsIHAgeyBjb2xvcjojNzc3Nzc3OyBmb250LXNpemU6MTRweDsgbWFyZ2luLWJvdHRvbTozMHB4OyBsaW5lLWhlaWdodDoyNHB4O31cclxuLmxvZ2luLWZvcm0gLmZvcm0tY29udHJvbCB7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNyBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuLm1haW4tZGl2IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvIDMwcHg7XHJcbiAgbWF4LXdpZHRoOiAzOCU7XHJcbiAgcGFkZGluZzogNTBweCA3MHB4IDcwcHggNzFweDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0gLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206MTBweDtcclxufVxyXG4ubG9naW4tZm9ybXsgdGV4dC1hbGlnbjpjZW50ZXI7fVxyXG4uZm9yZ290IGEge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4ubG9naW4tZm9ybSAgLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogb3JhbmdlIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5mb3Jnb3Qge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7IG1hcmdpbi1ib3R0b206MzBweDtcclxufVxyXG4ubG9naW4tZm9ybSAuYnRuLmJ0bi1wcmltYXJ5LnJlc2V0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmY5OTAwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbn1cclxuLmJhY2sgeyB0ZXh0LWFsaWduOiBsZWZ0OyBtYXJnaW4tdG9wOjEwcHg7fVxyXG4uYmFjayBhIHtjb2xvcjogIzMzMzsgZm9udC1zaXplOiAxM3B4O3RleHQtZGVjb3JhdGlvbjogbm9uZTt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_sevices_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "IsAJ":
/*!*********************************************!*\
  !*** ./src/app/sevices/products.service.ts ***!
  \*********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class ProductsService {
    constructor(http) {
        this.http = http;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].domain + "admin/products";
        var t = localStorage.getItem("jwt");
        if (t != null) {
            this.token = t;
        }
        else
            this.token = "";
    }
    getAll() {
        return this.http.get(this.URL + "/all", { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    getActive() {
        return this.http.get(this.URL + "/active", { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    getById(id) {
        return this.http.get(this.URL + "/get/" + id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json",
            }) });
    }
    getByName(name) {
        return this.http.get(this.URL + "/get/" + name, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json",
            }) });
    }
    add(pro) {
        const data = {
            id: pro.id,
            naziv: pro.naziv,
            kategorijaId: pro.kategorijaId,
            kolicina: pro.kolicina,
            cijena: pro.cijena,
            karakteristike: pro.karakteristike,
            opis: pro.opis,
            putanja: pro.putanja,
            izbrisano: pro.izbrisano,
            thumbnail: pro.thumbnail,
            kategorija: ""
        };
        return this.http.post(this.URL + "/add", data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            })
        });
    }
    edit(pro) {
        const data = {
            id: pro.id,
            naziv: pro.naziv,
            kategorijaId: pro.kategorijaId,
            kolicina: pro.kolicina,
            cijena: pro.cijena,
            karakteristike: pro.karakteristike,
            opis: pro.opis,
            putanja: pro.putanja,
            izbrisano: pro.izbrisano,
            thumbnail: pro.thumbnail,
            kategorija: ""
        };
        return this.http.post(this.URL + "/update/" + pro.id, data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    delete(id) {
        return this.http.get(this.URL + "/delete/" + id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "JHJZ":
/*!**********************************************************!*\
  !*** ./src/app/components/public/test/test.component.ts ***!
  \**********************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TestComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(); };
TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 7, vars: 0, consts: [[1, "black", "orange-text", "text-center", "m-0", "p-0"], [1, "row", "px-3", "pt-5"], [1, "col-12", "mt-5", "d-flex", "justify-content-center", "align-items-center", 2, "height", "100vh"], [2, "font-size", "100px"]], template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nice try... Nothing to see here!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u263A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".prakticnost-cover-mobile[_ngcontent-%COMP%] {\n  background: url('prakticnost.jpg') no-repeat center center/cover;\n  width: 100%;\n  height: 35vh;\n}\n\n.osmo-landing-cover[_ngcontent-%COMP%] {\n  background: url('osmo-home.jpg') no-repeat 55% center/cover;\n  width: 100%;\n  height: 65vh;\n}\n\n.osmo-lending-heading-2-bottom-mobile[_ngcontent-%COMP%] {\n  text-align: left;\n  position: relative;\n  width: 100%;\n  height: 40px;\n  top: 45%;\n  left: 6%;\n}\n\n.osmo-lending-heading-2-bottom-pc[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  width: 100%;\n  height: 40px;\n  top: 50%;\n}\n\n.mavic-air-2-naslovna-podazina[_ngcontent-%COMP%] {\n  background-image: url('pexels-jeremy-bishop-2524874.jpg');\n  image-rendering: optimizeSpeed;\n  object-fit: fill;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvdGVzdC90ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0VBQUE7RUFDK0IsV0FBQTtFQUFhLFlBQUE7QUFFaEQ7O0FBQUU7RUFDRSwyREFBQTtFQUM0QixXQUFBO0VBQWEsWUFBQTtBQUk3Qzs7QUFGRTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FBS047O0FBRkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBS0o7O0FBRkE7RUFDRSx5REFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFLRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmFrdGljbm9zdC1jb3Zlci1tb2JpbGUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvb3Ntby9wcmFrdGljbm9zdC5qcGcnKSBcclxuICAgIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAzNXZoO1xyXG4gIH1cclxuICAub3Ntby1sYW5kaW5nLWNvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL29zbW8vb3Ntby1ob21lLmpwZycpIFxyXG4gICAgbm8tcmVwZWF0IDU1JSBjZW50ZXIvY292ZXI7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDY1dmg7XHJcbiAgfVxyXG4gIC5vc21vLWxlbmRpbmctaGVhZGluZy0yLWJvdHRvbS1tb2JpbGUge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHRvcDogNDUlO1xyXG4gICAgICBsZWZ0OiA2JTtcclxuICB9XHJcblxyXG4gIC5vc21vLWxlbmRpbmctaGVhZGluZy0yLWJvdHRvbS1wYyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHRvcDogNTAlO1xyXG59XHJcbiAgXHJcbi5tYXZpYy1haXItMi1uYXNsb3ZuYS1wb2RhemluYSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvbWF2aWMtYWlyL3BleGVscy1qZXJlbXktYmlzaG9wLTI1MjQ4NzQuanBnJyk7IFxyXG4gIGltYWdlLXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcclxuICBvYmplY3QtZml0OiBmaWxsO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test',
                templateUrl: './test.component.html',
                styleUrls: ['./test.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "M1FE":
/*!**************************************************************************!*\
  !*** ./src/app/components/public/product-card/product-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function ProductCardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("image-rendering: optimizeSpeed; background-size: cover; height: 30vh; background: url(", ctx_r0.product.thumbnail, ") no-repeat center center/cover;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.product.naziv);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/product/" + ctx_r0.product.id);
} }
function ProductCardComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r2.product.naziv);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/product/" + ctx_r2.product.id);
} }
class ProductCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductCardComponent.ɵfac = function ProductCardComponent_Factory(t) { return new (t || ProductCardComponent)(); };
ProductCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: "product" }, decls: 18, vars: 7, consts: [[1, "product-card"], [1, "p-4"], [1, "card", "card-body", "text-center", "p-0", "card-hover-zoom", "gray"], [4, "ngIf", "ngIfElse"], ["generic_thumbnail", ""], [1, "card-title", "pt-2"], [3, "routerLink"], [1, "px-2"], [1, "card-text", "px-2", "line-word-stop"], [1, "card-footer", "mt-4"], [1, "float-right", "font-weight-bold", "mb-1", "pb-2"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Quick Look", 1, "float-left", "material-tooltip-main", 3, "routerLink"], [1, "fas", "fa-eye", "grey-text", "ml-3"], [1, "card-img-top", "pb-2", "imageHover", 3, "routerLink", "alt"], ["src", "../../../../assets/thumbnails/default.jpg", 1, "card-img-top", "pb-2", "imageHover", 2, "height", "30vh", 3, "routerLink", "alt"]], template: function ProductCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductCardComponent_div_3_Template, 2, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductCardComponent_ng_template_4_Template, 1, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.thumbnail != null)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/product/" + ctx.product.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.naziv);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.opis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product.cijena, "kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/product/" + ctx.product.id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".card-hover-zoom[_ngcontent-%COMP%] {\n  transform: scale(1);\n  transition: 0.4s ease all;\n  -webkit-transition: 0.4s ease all;\n  -moz-transition: 0.4s ease all;\n}\n\n.card-hover-zoom[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.imageHover[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFHSSxzQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhvdmVyLXpvb20geyAgXHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7IFxyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpOyBcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IFxyXG4gICAgdHJhbnNpdGlvbjowLjRzIGVhc2UgYWxsOyBcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjowLjRzIGVhc2UgYWxsOyBcclxuICAgIC1tb3otdHJhbnNpdGlvbjowLjRzIGVhc2UgYWxsO1xyXG59XHJcblxyXG4uY2FyZC1ob3Zlci16b29tOmhvdmVyIHsgXHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IFxyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyBcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IFxyXG59XHJcbi5pbWFnZUhvdmVyOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-card',
                templateUrl: './product-card.component.html',
                styleUrls: ['./product-card.component.scss']
            }]
    }], function () { return []; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "QYNN":
/*!******************************************************************!*\
  !*** ./src/app/components/public/about-us/about-us.component.ts ***!
  \******************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class AboutUsComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle("Cascadus - O nama");
    }
    ngOnInit() {
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 54, vars: 0, consts: [["id", "about-us", 1, "mt-5", "pt-5"], [1, "row", "m-0", "mt-2", "pt-5", "p-0", "white", "shadow", "text-center"], [1, "col", "pb-2", "pl-2", "pr-2"], [1, "dark-text"], [1, ""], [1, "row", "bg-dark", "shadow", "m-0", "p-0"], [1, "col-12", "p-4", "mx-2", "my-0", "orange-text", "text-center"], [1, "row", "shadow", "white", "p-0", "m-0", "overflow-auto"], [1, "col-xs-12", "col-md-6", "about-us-img", "about-us-img-2"], [1, "col-xs-12", "col-md-6", "align-self-center", "text-center", "white", "m-0", "p-3"], [1, "lead"], [1, "col-xs-12", "col-md-6", "about-us-img", "about-us-img-4"], [1, "row", "white", "shadow", "m-0", "p-0"], [1, "col-12", "p-4", "mx-2", "my-0", "text-center"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mi smo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "obitelj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ", mi smo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cascadus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Raznolika priroda na\u0161ih proizvoda omogu\u0107uje nam posjedovanje \u0161irokog sprektra stru\u010Dnosti unutar tvrtke, prihva\u010Danje novih ideja i njihovo aktuliziranje.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tko smo mi?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Mi smo suradni\u010Dki i dinami\u010Dan tim koji usko sura\u0111uje kako bi bolje razumio kupce i svakodnevno im pru\u017Eio kvalitetu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Na\u0161a misija");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Svakim danom nastavljamo rasti i dodajemo nove pothvate u Cascadus timu kako bi na\u0161im partnerima i klijentima dali vrijednost pru\u017Eanjem inovatnivnih proizvoda kao i kvalitetnih proizvodnih usluga.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Budu\u0107nost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Vjerujemo da bi odlazak u trgovinu trebao donijeti vi\u0161e od samog proizvoda. Nama u Cascadusu je najva\u017Enije iskustvo. Svakodnevnim istra\u017Eivanjima tr\u017Ei\u0161ta \u017Eelimo na\u0161im kupcima ponuditi najbolje i najprakti\u010Dnije rje\u0161enje za bilo kakav problem.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Inspiracija");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Postoji velika snaga u ljudima me\u0111u nama. Oni nas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "inspiriraju");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, ". \u0160to se s njima vi\u0161e povezujemo to smo vi\u0161e nagra\u0111eni. To nas motovira da i dalje radimo ono \u0161to najbolje znamo. Pomo\u0107i \u0161to vi\u0161e ljudi i olak\u0161ati stvari u svakodnevnim situcijma je na\u0161a glavna misija.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Inovativnost na tr\u017Ei\u0161tu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Integriraju\u0107i fukcncije orijentirane prema kupcu dodatno nam poma\u017Eu da predvidimo potrebe svojih kupaca, pretvaraju\u0107i njihove inovativne ideje u uspje\u0161ne prilago\u0111ene proizvode.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-us-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  min-height: 50vh;\n  max-height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.about-us-img-1[_ngcontent-%COMP%] {\n  background-image: url('laptop.4bf2b774e877f5ba6cbd.jpg');\n  image-rendering: optimizeSpeed;\n}\n\n.about-us-img-2[_ngcontent-%COMP%] {\n  background-image: url('work.d543532d94a220f213d3.jpg');\n  image-rendering: optimizeSpeed;\n}\n\n.about-us-img-3[_ngcontent-%COMP%] {\n  background-image: url('robot.11859a50e2df928932b1.jpg');\n  image-rendering: optimizeSpeed;\n}\n\n.about-us-img-4[_ngcontent-%COMP%] {\n  background-image: url('gears.e72c9b222a3e4a4cc9ff.jpg');\n  image-rendering: optimizeSpeed;\n}\n\n.about-us-img-5[_ngcontent-%COMP%] {\n  background-image: url('computer.edf3a6ef59a9bfe0d3f1.jpg');\n  image-rendering: optimizeSpeed;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFRTtFQUNFLHdEQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFDRTtFQUNFLHNEQUFBO0VBQ0EsOEJBQUE7QUFFSjs7QUFBRTtFQUNFLHVEQUFBO0VBQ0EsOEJBQUE7QUFHSjs7QUFERTtFQUNFLHVEQUFBO0VBQ0EsOEJBQUE7QUFJSjs7QUFGRTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7QUFLSjs7QUFGRTtFQUNFLHlDQUFBO0FBS0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3B1YmxpYy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmFib3V0LXVzLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LXVzLWltZy0xIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2Fib3V0LXVzL2xhcHRvcC40YmYyYjc3NGU4NzdmNWJhNmNiZC5qcGcnKTtcclxuICAgIGltYWdlLXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcclxuICB9XHJcbiAgLmFib3V0LXVzLWltZy0yIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2Fib3V0LXVzL3dvcmsuZDU0MzUzMmQ5NGEyMjBmMjEzZDMuanBnJyk7XHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XHJcbiAgfVxyXG4gIC5hYm91dC11cy1pbWctMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9hYm91dC11cy9yb2JvdC4xMTg1OWE1MGUyZGY5Mjg5MzJiMS5qcGcnKTtcclxuICAgIGltYWdlLXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcclxuICB9XHJcbiAgLmFib3V0LXVzLWltZy00IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2Fib3V0LXVzL2dlYXJzLmU3MmM5YjIyMmEzZTRhNGNjOWZmLmpwZycpO1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xyXG4gIH1cclxuICAuYWJvdXQtdXMtaW1nLTUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvYWJvdXQtdXMvY29tcHV0ZXIuZWRmM2E2ZWY1OWE5YmZlMGQzZjEuanBnJyk7XHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XHJcbiAgfVxyXG5cclxuICAuc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMwcHggcmdiYSgwLDAsMCwuMyk7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us',
                templateUrl: './about-us.component.html',
                styleUrls: ['./about-us.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "Rb4e":
/*!*********************************!*\
  !*** ./src/app/models/order.ts ***!
  \*********************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
class Order {
    /**
     *
     */
    constructor(buyer, message, paymentModel) {
        this.setBuyer(buyer),
            this.orderComment = message;
        this.paymentModel = paymentModel;
    }
    setBuyer(buyer) {
        this.name = buyer.ime;
        this.surname = buyer.prezime;
        this.contact = buyer.kontakt;
        this.email = buyer.email;
        this.street = buyer.ulica;
        this.houseNumber = buyer.kucniBroj;
        this.city = buyer.grad;
        this.postNumber = buyer.postanskiBroj.toString();
    }
}


/***/ }),

/***/ "Rttg":
/*!********************************************************!*\
  !*** ./src/app/components/public/faq/faq.component.ts ***!
  \********************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class FaqComponent {
    constructor(titleSErvice) {
        this.titleSErvice = titleSErvice;
        this.titleSErvice.setTitle("Cascadus - Česta pitanja");
    }
    ngOnInit() {
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 286, vars: 20, consts: [["id", "faq", 1, "mt-5", "pt-5"], [1, "parallax", "parallaxFaq", "mt-5"], ["id", "accordionEx", "role", "tablist", "aria-multiselectable", "true", 1, "accordion", "md-accordion"], [1, "row", "text-center", "justify-content-around", "mx-2"], [1, "col-xs-12", "col-md-6", "opacity-1"], [1, "card", "p-2", "m-2"], ["role", "tab", "id", "headingOne1", 1, "card-body"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "true", "aria-controls", "collapseOne1", 3, "href"], [1, "mb-0", "text-dark"], [1, "fas", "fa-angle-down", "rotate-icon"], ["id", "collapseOne1", "role", "tabpanel", "aria-labelledby", "headingOne1", "data-parent", "#accordionEx", 1, "collapse"], [1, "card-body", "text-left"], [1, "col-xs-12", "col-md-6", "opacity-1", "d-none"], ["role", "tab", "id", "headingTwo2", 1, "card-body"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "true", "aria-controls", "collapseTwo2", 3, "href"], ["id", "collapseTwo2", "role", "tabpanel", "aria-labelledby", "headingTwo2", "data-parent", "#accordionEx", 1, "collapse"], ["role", "tab", "id", "headingThree3", 1, "card-body"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "false", "aria-controls", "collapseThree3", 1, "collapsed", 3, "href"], ["id", "collapseThree3", "role", "tabpanel", "aria-labelledby", "headingThree3", "data-parent", "#accordionEx", 1, "collapse"], ["role", "tab", "id", "headingFour4", 1, "card-body"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "false", "aria-controls", "collapseFour4", 1, "collapsed", 3, "href"], ["id", "collapseFour4", "role", "tabpanel", "aria-labelledby", "headingFour4", "data-parent", "#accordionEx", 1, "collapse"], ["role", "tab", "id", "headingFive5", 1, "card-body"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "false", "aria-controls", "collapseFive5", 1, "collapsed", 3, "href"], ["id", "collapseFive5", "role", "tabpanel", "aria-labelledby", "headingFive5", "data-parent", "#accordionEx", 1, "collapse"], ["role", "tab", "id", "headingSix6", 1, "card-body"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "false", "aria-controls", "collapseSix6", 1, "collapsed", 3, "href"], ["id", "collapseSix6", "role", "tabpanel", "aria-labelledby", "headingSix6", "data-parent", "#accordionEx", 1, "collapse"], ["role", "tab", "id", "headingSeven7", 1, "card-body"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "false", "aria-controls", "collapseSeven7", 1, "collapsed", 3, "href"], ["id", "collapseSeven7", "role", "tabpanel", "aria-labelledby", "headingSeven7", "data-parent", "#accordionEx", 1, "collapse"], ["role", "tab", "id", "headingEight8", 1, "card-body"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "false", "aria-controls", "collapseEight8", 1, "collapsed", 3, "href"], ["id", "collapseEight8", "role", "tabpanel", "aria-labelledby", "headingEight8", "data-parent", "#accordionEx", 1, "collapse"], ["href", "tel:+38598713228"], ["role", "tab", "id", "headingNine9", 1, "card-body"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "false", "aria-controls", "collapseNine9", 1, "collapsed", 3, "href"], ["id", "collapseNine9", "role", "tabpanel", "aria-labelledby", "headingNine9", "data-parent", "#accordionEx", 1, "collapse"], ["role", "tab", "id", "headingOne0", 1, "card-body"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "false", "aria-controls", "collapseOne0", 1, "collapsed", 3, "href"], ["id", "collapseOne0", "role", "tabpanel", "aria-labelledby", "headingOne0", "data-parent", "#accordionEx", 1, "collapse"], ["role", "tab", "id", "heading11", 1, "card-body"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "false", "aria-controls", "collapse11", 1, "collapsed", 3, "href"], ["id", "collapse11", "role", "tabpanel", "aria-labelledby", "heading11", "data-parent", "#accordionEx", 1, "collapse"], ["role", "tab", "id", "headingOne2", 1, "card-body"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "false", "aria-controls", "collapseOne2", 1, "collapsed", 3, "href"], ["id", "collapseOne2", "role", "tabpanel", "aria-labelledby", "headingOne2", "data-parent", "#accordionEx", 1, "collapse"], ["role", "tab", "id", "headingOne3", 1, "card-body"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "false", "aria-controls", "collapseOne3", 1, "collapsed", 3, "href"], ["id", "collapseOne3", "role", "tabpanel", "aria-labelledby", "headingOne3", "data-parent", "#accordionEx", 1, "collapse"], ["href", "mailto:podrska@cascadus.hr"], ["role", "tab", "id", "headingOne4", 1, "card-body"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "false", "aria-controls", "collapseOne4", 1, "collapsed", 3, "href"], ["id", "collapseOne4", "role", "tabpanel", "aria-labelledby", "headingOne4", "data-parent", "#accordionEx", 1, "collapse"], ["role", "tab", "id", "headingOne5", 1, "card-body"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "false", "aria-controls", "collapseOne5", 1, "collapsed", 3, "href"], ["id", "collapseOne5", "role", "tabpanel", "aria-labelledby", "headingOne5", "data-parent", "#accordionEx", 1, "collapse"], ["role", "tab", "id", "headingOne6", 1, "card-body"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "false", "aria-controls", "collapseOne6", 1, "collapsed", 3, "href"], ["id", "collapseOne6", "role", "tabpanel", "aria-labelledby", "headingOne6", "data-parent", "#accordionEx", 1, "collapse"], ["role", "tab", "id", "headingOne7", 1, "card-body"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "false", "aria-controls", "collapseOne7", 1, "collapsed", 3, "href"], ["id", "collapseOne7", "role", "tabpanel", "aria-labelledby", "headingOne7", "data-parent", "#accordionEx", 1, "collapse"], ["role", "tab", "id", "headingOne8", 1, "card-body"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "false", "aria-controls", "collapseOne8", 1, "collapsed", 3, "href"], ["id", "collapseOne8", "role", "tabpanel", "aria-labelledby", "headingOne8", "data-parent", "#accordionEx", 1, "collapse"], ["role", "tab", "id", "headingOne9", 1, "card-body"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "false", "aria-controls", "collapseOne9", 1, "collapsed", 3, "href"], [1, "fas", "fa-angle-down", "rotate-icon", "ml-5"], ["id", "collapseOne9", "role", "tabpanel", "aria-labelledby", "headingOne9", "data-parent", "#accordionEx", 1, "collapse"], [1, "row", "orange", "divider"], [1, "col-12", "py-3", "text-center"], [1, "font-weight-bold", "dark-text", "my-auto", "pt-4", "text-center"], [1, "w-header"], [1, "col-12", "text-center"], [1, "material-icons", "material-icon-large", "scrolldown-animated"], [3, "href"], [1, "material-icons", "material-huge-icon", "icon-dark", "mx-auto", "mb-4", "p-auto"], [1, "lead", "text-center", "dark-text"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Kako mogu kupiti proizvod?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Proces je vrlo jednostavan. Na podno\u017Eju stranice proizvoda kojeg \u017Eelite kupiti nalazi se formular u koji upisujete svoje podatke i klikom na Naru\u010Di mi zaprimamo va\u0161u narud\u017Ebu nakon \u010Dega \u0107ete biti obavije\u0161teni emailom.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tko dostavlja moju narud\u017Ebu?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Kako bi bili sigurni da \u0107ete svoj proizvod dobiti \u0161to prije koristimo kurirske slu\u017Ebe GLSa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Kada \u0107e mi narud\u017Eba biti dostavljena?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Sve narud\u017Ebe zaprimljene do 19:00 biti \u0107e poslane isti dan. U prosjeku na\u0161i kupci dobe naru\u010Deni proizvod u roku 2-3 radna dana. U nekim slu\u010Dajevima vrijeme isporuke se razlikuje od standarda za 1 ili 2 dana. Vrijeme isporuke svakog proizvoda jasno je prikazano na stranici proizvoda.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Tko dostavlja moju narud\u017Ebu?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Kako bi bili sigurni da \u0107ete svoj proizvod dobiti \u0161to prije koristimo kurirske slu\u017Ebe GLSa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Koja je cijena dostave?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Dostava za bilo koju narudzbu je besplatna. Vi pla\u0107ate samo cijenu proizvoda. Ukoliko se u trenutku poku\u0161aja dostave ne nalazite doma, u kurir \u0107e Vas obavijestit pozivom ili SMS-om te se mo\u017Eete dogovoriti kako i kada pokupiti svoju narud\u017Ebu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Nisam zadovoljan proizvodom. Mogu li ga vratiti?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Bilo koji kupljeni proizvod mo\u017Eete vratiti u roku od 14 dana ukoliko niste zadovoljni na bilo koji na\u010Din s njim.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Mogu li izmijeniti narud\u017Ebu nakon kupnje?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Na\u0161a ekipa se trudi da sve narud\u017Ebu budu \u0161to prije otpremljene, no ukoliko \u0107e ikako biti mogu\u0107e, svakako \u0107emo uva\u017Eiti sve \u017Eeljene promjene na narud\u017Ebi, ukoliko ista nije ve\u0107 zapakirana i otpremljena.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Kako mogu provjeriti status svoje narud\u017Ebe?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Status naru\u017Ebe mo\u017Eete provjeriti na stranicama GLS-a nakon \u0161to dobite na\u0161 email s brojem narud\u017Ebe ili nas mo\u017Eete nazvati na ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "+385 98 713 228");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " kako bi vam mi rekli u kojem je procesu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Trenutno na skladi\u0161tu nemate proizvod koji \u017Eelim kupiti. Kako ga mogu naru\u010Diti?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Ukoliko se proizvod ne nalazi na skladi\u0161tu mo\u017Eete nam poslati email za proizvod koji \u017Eelite, a mi \u0107emo vam re\u0107i kada \u0107e prozvod ponovo biti kod nas kako bi mogli do kraja dovr\u0161iti narud\u017Ebu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Mogu li platiti R1 ra\u010Dunom?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Ukoliko \u017Eelite kupiti odre\u0111eni proizvod na ime tvrtke molimo vas da nam se javite na email ili putem dru\u0161tvenih mre\u017Ea.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Kako mogu pratiti svoju nardu\u017Ebu?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\u010Cim izvr\u0161ite narud\u017Ebu, poslati \u0107emo Vam e-mail s potvrdom va\u0161e narud\u017Ebe i brojem po\u0161iljke. Mo\u017Eete koristiti OVAJ LINK za pregled statusa svojeg paketa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Trebam li se negdje registrirati kako bi naru\u010Dio s va\u0161e stranice?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "U ovom trenutku nije potrebno stvarati ra\u010Dun ako \u017Eelite naru\u010Diti s na\u0161e stranice. Ako se odlu\u010Dite kupiti odre\u0111eni proizvod samo popunite formular za narud\u017Ebe na dnu stranice \u017Eeljenog proizvoda i kliknite naru\u010Di. Tako je lagano. Me\u0111utim, prijava na na\u0161 newsletter pru\u017Eit \u0107e vam zadivljuju\u0107u priliku za primanje i kupovinu sa popustima, bonovima, plus \u0161to \u0107ete na na\u0161em web mjestu mo\u0107i u\u010Diti o najnovijim tehnolo\u0161kim ure\u0111ajima!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Mogu li promjeniti adresu nakon \u0161to sam izvr\u0161io/la narud\u017Ebu?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Nakon \u0161to izvr\u0161ite narud\u017Ebu, informacije idu izravno u odjel za otpremanje po\u0161iljaka. Iako se trudimo va\u0161u narud\u017Ebu poslati \u0161to prije, ako se ona nalazi kod nas rado \u0107emo izmjenit adresu dostave po va\u0161oj \u017Eelji.Stoga, ako trebate izvr\u0161iti bilo kakve promjene na adresi za dostavu, kontaktirajte nas na ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "podrska@cascadus.hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " i tada \u0107emo se pobrinuti za to. Prije podno\u0161enja narud\u017Ebe provjerite jesu li svi podaci koje ste naveli to\u010Dni kako biste sprije\u010Dili gubitke u po\u0161ti ili druge nesretnice.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "\u0160to ako moja narud\u017Eba bude izgubljena ili o\u0161te\u0107ena?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Izgubljene ili o\u0161te\u0107ene narud\u017Ebe rado \u0107emo zamijeniti ili Vam vratiti novac bez naknade.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Mogu li promijeniti svoju narud\u017Ebu?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Da. Ako va\u0161a narud\u017Eba jo\u0161 nije poslana, kontaktirajte nas na ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "podrska@cascadus.hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " i rado \u0107emo promijeniti va\u0161u narud\u017Ebu. Ve\u0107 poslane narud\u017Ebe nije mogu\u0107e izmijeniti.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Mogu li otkazati svoju narud\u017Ebu?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Da. Ako va\u0161a narud\u017Eba jo\u0161 nije poslana, kontaktirajte nas na ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "podrska@cascadus.hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " i rado \u0107emo otkazati va\u0161u narud\u017Ebu. Ve\u0107 poslane narud\u017Ebe nije mogu\u0107e otkazati. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Mogu li vratiti narud\u017Ebu?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Da. Povrati se mogu izvr\u0161iti do 14 dana nakon primitka va\u0161e narud\u017Ebe, pod uvjetom da u originalnom pakiranju. Da biste pokrenuli povrat, kontaktirajte nas na ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "podrska@cascadus.hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, ". Nakon \u0161to primimo Va\u0161u vra\u0107enu narud\u017Ebu poslato \u0107emo vam e-po\u0161tu s potvrdom o povratu novca u roku od 14 dana. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Mogu li zamijeniti svoju narud\u017Ebu?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Da. Razmjene se mogu izvr\u0161iti do 30 dana nakon primitka narud\u017Ebe. Za pokretanje razmjene kontaktirajte nas na ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "podrska@cascadus.hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " i mi cemo vam poslati proizvode za koje m\u017Eete zamijeniti svoj trenutni proizvod.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Kako mogu provjeriti status svoje narud\u017Ebe?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Status naru\u017Ebe mo\u017Eete provjeriti na stranicama GLS-a nakon \u0161to dobite na\u0161 email s brojem narud\u017Ebe ili nas mo\u017Eete nazvati na ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "+385 98 713 228");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " kako bi vam mi rekli u kojem je procesu va\u0161a narud\u017Eba.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "h3", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Any other question?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "hr", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "support_agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Ukoliko imate pitanja koja nisu gore navedena, slobodno nam se javite s Va\u0161im pitanjem i rado \u0107emo Vam odgovoriti na isto.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapseOne1", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapseTwo2", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapseThree3", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapseFour4", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapseFive5", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapseSix6", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapseSeven7", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapseEight8", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapseNine9", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapseOne0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapse11", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapseOne2", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapseOne3", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapseOne4", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapseOne5", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapseOne6", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapseOne7", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapseOne8", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapseOne9", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "/contact", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".material-huge-icon[_ngcontent-%COMP%] {\n  font-size: 100px;\n}\n\n.parallax[_ngcontent-%COMP%] {\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n@media only screen and (max-device-width: 1600px) {\n  .parallax[_ngcontent-%COMP%] {\n    background-attachment: scroll;\n    min-height: 600px;\n  }\n}\n\n.parallaxFaq[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-image: url(\"/assets/svg/undraw_faq.svg\");\n  image-rendering: optimizeSpeed;\n}\n\n.blurred[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.15);\n  filter: blur(1px);\n  z-index: 1;\n}\n\n.w-3[_ngcontent-%COMP%] {\n  width: 33%;\n}\n\n.animate-opacity[_ngcontent-%COMP%] {\n  animation: opac 0.8s;\n}\n\n.wide-letter-spacing[_ngcontent-%COMP%] {\n  letter-spacing: 6px;\n}\n\n.display-middle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 25%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\n.scrolldown[_ngcontent-%COMP%] {\n  bottom: 5px;\n  left: 50%;\n  width: 30px;\n  height: 30px;\n  transform: rotate(45deg);\n}\n\n.scrolldown-animated[_ngcontent-%COMP%] {\n  animation: animate 1.5s linear infinite;\n}\n\n@keyframes animate {\n  0% {\n    top: -10px;\n    left: -10px;\n    opacity: 0.2;\n  }\n  50% {\n    top: 0px;\n    left: 0px;\n    opacity: 1;\n  }\n  100% {\n    top: 10px;\n    left: 10px;\n    opacity: 0.2;\n  }\n}\n\n.material-icon-large[_ngcontent-%COMP%] {\n  font-size: 68px;\n}\n\n.card-mod[_ngcontent-%COMP%] {\n  background: rgba(122, 130, 136, 0.2) !important;\n}\n\n.card-mod[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background: rgba(122, 130, 136, 0.2) !important;\n}\n\n.card-mod[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: rgba(122, 130, 136, 0.2) !important;\n}\n\n.card-mod[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  background: rgba(122, 130, 136, 0.2) !important;\n}\n\n.icon-dark[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n.icon-dark[_ngcontent-%COMP%]:hover {\n  color: #222;\n}\n\n.dark-text[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n.icon-border-dark[_ngcontent-%COMP%] {\n  border-color: #333;\n  border-radius: 20%;\n  border-style: solid;\n  border-width: 2px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 15px rgba(3, 3, 3, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvZmFxL2ZhcS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUVKOztBQUFFO0VBQ0U7SUFDRSw2QkFBQTtJQUNBLGlCQUFBO0VBR0o7QUFDRjs7QUFEQTtFQUNJLGlCQUFBO0VBQ0EsbURBQUE7RUFDQSw4QkFBQTtBQUdKOztBQURFO0VBQ0UsMkNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFJSjs7QUFGRTtFQUNJLFVBQUE7QUFLTjs7QUFIRTtFQUNFLG9CQUFBO0FBTUo7O0FBSkU7RUFDSSxtQkFBQTtBQU9OOztBQUxFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7QUFRSjs7QUFMQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQVFKOztBQU5BO0VBQ0ksdUNBQUE7QUFTSjs7QUFQQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBVU47RUFSRTtJQUNJLFFBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtFQVVOO0VBUkU7SUFDSSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFVTjtBQUNGOztBQVBBO0VBQ0ksZUFBQTtBQVNKOztBQUxBO0VBQ0ksK0NBQUE7QUFRSjs7QUFOQTtFQUNJLCtDQUFBO0FBU0o7O0FBUEE7RUFDSSwrQ0FBQTtBQVVKOztBQVJBO0VBQ0ksK0NBQUE7QUFXSjs7QUFURTtFQUNJLFdBQUE7QUFZTjs7QUFWRTtFQUNJLFdBQUE7QUFhTjs7QUFYRTtFQUNJLFdBQUE7QUFjTjs7QUFaRTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBZU47O0FBWkU7RUFDRSwyQ0FBQTtBQWVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvZmFxL2ZhcS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRlcmlhbC1odWdlLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxufVxyXG4ucGFyYWxsYXgge1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIC5wYXJhbGxheCB7XHJcbiAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xyXG4gICAgICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICAgIH1cclxuICB9XHJcbi5wYXJhbGxheEZhcSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9zdmcvdW5kcmF3X2ZhcS5zdmcnKTtcclxuICAgIGltYWdlLXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcclxufVxyXG4gIC5ibHVycmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIC53LTN7XHJcbiAgICAgIHdpZHRoOiAzMyU7XHJcbiAgfVxyXG4gIC5hbmltYXRlLW9wYWNpdHkge1xyXG4gICAgYW5pbWF0aW9uOiBvcGFjIDAuOHM7XHJcbn1cclxuICAud2lkZS1sZXR0ZXItc3BhY2luZyB7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiA2cHg7XHJcbiAgfVxyXG4gIC5kaXNwbGF5LW1pZGRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxufVxyXG5cclxuLnNjcm9sbGRvd24ge1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG4uc2Nyb2xsZG93bi1hbmltYXRlZCB7XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGUgMS41cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyBhbmltYXRlIHtcclxuICAgIDAle1xyXG4gICAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgICAgbGVmdDogLTEwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1pY29uLWxhcmdlIHtcclxuICAgIGZvbnQtc2l6ZTogNjhweDtcclxufVxyXG5cclxuXHJcbi5jYXJkLW1vZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyMiwgMTMwLCAxMzYsIDAuMikhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLW1vZCAuY2FyZC1ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTIyLCAxMzAsIDEzNiwgMC4yKSFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQtbW9kIC5jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyMiwgMTMwLCAxMzYsIDAuMikhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLW1vZCAuY2FyZC1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMjIsIDEzMCwgMTM2LCAwLjIpIWltcG9ydGFudDtcclxufVxyXG4gIC5pY29uLWRhcmsge1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbiAgLmljb24tZGFyazpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjMjIyO1xyXG4gIH1cclxuICAuZGFyay10ZXh0IHtcclxuICAgICAgY29sb3I6IzMzMztcclxuICB9XHJcbiAgLmljb24tYm9yZGVyLWRhcmsge1xyXG4gICAgICBib3JkZXItY29sb3I6ICMzMzM7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcclxuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgfVxyXG5cclxuICAuZGl2aWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDE1cHggcmdiYSgzLDMsMywwLjMpO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq',
                templateUrl: './faq.component.html',
                styleUrls: ['./faq.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "SbDr":
/*!*******************************************!*\
  !*** ./src/app/sevices/buyers.service.ts ***!
  \*******************************************/
/*! exports provided: BuyersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyersService", function() { return BuyersService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





class BuyersService {
    constructor(http) {
        this.http = http;
        this.URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].domain + "admin/buyers";
        this.token = localStorage.getItem("jwt");
    }
    getAllBuyers() {
        return this.http.get(this.URL + "/all", { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    getActiveBuyers() {
        return this.http.get(this.URL + "/active", { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    getBuyerById(id) {
        return this.http.get(this.URL + "/get/" + id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    addBuyer(buyer) {
        const data = {
            id: buyer.id,
            ime: buyer.ime,
            prezime: buyer.prezime,
            grad: buyer.grad,
            postanskiBroj: buyer.postanskiBroj,
            kontakt: buyer.kontakt,
            kucniBroj: buyer.kucniBroj,
            email: buyer.email,
            ulica: buyer.ulica,
            izbrisano: buyer.izbrisano
        };
        return this.http.post(this.URL + "/add", data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    editBuyer(buyer) {
        const data = {
            id: buyer.id,
            ime: buyer.ime,
            prezime: buyer.prezime,
            grad: buyer.grad,
            postanskiBroj: buyer.postanskiBroj,
            kontakt: buyer.kontakt,
            kucniBroj: buyer.kucniBroj,
            email: buyer.email,
            ulica: buyer.ulica,
            izbrisano: buyer.izbrisano
        };
        return this.http.post(this.URL + "/update/" + buyer.id, data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    deleteBuyer(id) {
        return this.http.get(this.URL + "/delete/" + id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
}
BuyersService.ɵfac = function BuyersService_Factory(t) { return new (t || BuyersService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BuyersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BuyersService, factory: BuyersService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BuyersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    /**
     *
     */
    constructor(router) {
        this.router = router;
        if (_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
            this.router.events.subscribe((event) => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                    gtag('config', 'G-NF7B94KLH2', {
                        page_path: event.urlAfterRedirects,
                    });
                }
            });
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "UiRp":
/*!************************************************************!*\
  !*** ./src/app/components/auth/logout/logout.component.ts ***!
  \************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function LogoutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LogoutComponent {
    constructor(router) {
        this.router = router;
        router.events.subscribe((event) => {
            this.navigationInterceptor(event);
        });
    }
    ngOnInit() {
        this.isLoading = true;
        localStorage.removeItem("jtw");
        localStorage.removeItem("role");
        alert("localstorage cleared!");
        this.router.navigate(["home"]);
        this.isLoading = false;
    }
    // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            this.isLoading = true;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            this.isLoading = false;
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
            this.isLoading = false;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
            this.isLoading = false;
        }
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 3, vars: 1, consts: [["class", "loading-overlay", 4, "ngIf"], [1, "pt-5", "mt-5"], [1, "loading-overlay"], ["aria-hidden", "true", "role", "status", 1, "spinner-pinguin", "text-warning"], [1, "sr-only"]], template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LogoutComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "logging out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logout',
                templateUrl: './logout.component.html',
                styleUrls: ['./logout.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "WCbn":
/*!**************************************************************************************!*\
  !*** ./src/app/components/public/purchase-statement/purchase-statement.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PurchaseStatementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseStatementComponent", function() { return PurchaseStatementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class PurchaseStatementComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle("Cascadus - Izjava o kupnji");
    }
    ngOnInit() {
    }
}
PurchaseStatementComponent.ɵfac = function PurchaseStatementComponent_Factory(t) { return new (t || PurchaseStatementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
PurchaseStatementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseStatementComponent, selectors: [["app-purchase-statement"]], decls: 136, vars: 0, consts: [[1, "row", "mt-5", "pt-5", "justify-content-around", "purchase-img", "purchase-img-1"], [1, "col-md-6", "col-xs-10"], [1, "card", "p-3", "m-5", "opacity-1"], [1, "lead"], ["href", "https://cascadus.hr"], ["href", "tel:+38598713228"], ["href", "mailto:info@cascadus.hr"]], template: function PurchaseStatementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Navedeni uvjeti definiraju postupak naru\u010Divanja, pla\u0107anja, isporuke i povrata proizvoda ponu\u0111enih na stranicama na adresi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "https://cascadus.hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Isporu\u010Ditelj (prodavatelj): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Cascadus d.o.o., ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Breg 22, 10362, Ka\u0161ina, Hrvatska ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " OIB:44123469259, MB:5330009, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " TELEFON: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "+385 98 713 228");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " E-MAIL: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "info@cascadus.hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " IBAN: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " SWIFT: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Naru\u010Divanje online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Na\u0161e proizvode mo\u017Eete naru\u010Diti putem Internet trgovine svaki dan od 0 - 24h.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Da biste izvr\u0161ili narud\u017Ebu, jednostavno dodajte robu u ko\u0161aricu za kupnju i slijedite upute korak po korak. Na\u0161 vodi\u010D \u0107e vas voditi kroz proces sve do uspje\u0161nog zavr\u0161etka va\u0161e narud\u017Ebe.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Naru\u010Divanjem robe prihva\u0107ate na\u0161e Uvjete kupovine. Nakon potvr\u0111ivanja cijene i dostupnosti odabrane robe, primit \u0107ete elektronsku potvrdu Va\u0161e narud\u017Ebe, zajedno s informacijama o dostavi, koja uklju\u010Duje ugovor izme\u0111u vas i tvrtke Cascadus d.o.o. U slu\u010Daju nedostupnosti robe ili pogre\u0161no navedene cijene odmah \u0107emo vas obavijestiti.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Usluge Cascadus d.o.o. internet trgovine mogu koristiti osobe starije od 18 godina.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Pla\u0107anje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Naru\u010Dene proizvode s tro\u0161kovima dostave kupac mo\u017Ee prodavatelju platiti pouze\u0107em prilikom dostave robe ili direktnom bankovnom transakcijom (internet bankarstvo ili osobno op\u0107om uplatnicom) te kreditnom karticom.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "U slu\u010Daju pla\u0107anja e-bankingom i op\u0107om uplatnicom, tro\u0161kovi uplate i/ili me\u0111ubankarske transakcije nisu uklju\u010Deni u cijenu. U slu\u010Daju da kupac naru\u010Di robu i odbije je primiti, prodavatelj ima pravo tra\u017Eiti od kupca nadoknadu po\u0161tanskih i vlastitih manipulativnih tro\u0161kova. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Na\u010Dini pla\u0107anja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "pouze\u0107em prilikom dostave");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "internet bankarstvom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "kreditinim karticama");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "jednokratno \u2013 jednokratno pla\u0107anje mo\u017Ee se vr\u0161iti karticama Mastercard, Maestro, Visa, Diners i Discover karticama svih banaka.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Obro\u010Dno pla\u0107anje je mogu\u0107e obaviti sa sljede\u0107im karticama:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Diners do 12 obroka \u2013 izdavatelj Erste Card Club");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Maestro do 6 obroka (izdavatelj Privredna banka Zagreb) do 12 obroka (izdavatelji Agram banka, Erste&Steierm\u00E4rkische Bank, Istarska kreditna banka Umag, Kentbank, Kreditna banka Zagreb, Sberbank i Slatinska banka)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Visa do 6 obroka (izdavatelj Privredna banka Zagreb)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Isporuka proizvoda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Dostava je besplatna za sve narud\u017Ebe.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Naru\u010Dena roba dostavlja se do ulaza u stambeni objekt. Ako se radi o stambenoj zgradi, dostavlja\u010D nije obvezan nositi robu do kata na kojem se nalazi kupac, ve\u0107 do ulaza u zgradu. Roba se dostavlja na podru\u010Dju Republike Hrvatske.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Dostava koju vr\u0161imo putem na\u0161eg vlastitog prijevoza u pravilu sti\u017Ee na odredi\u0161te u roku 5 radnih dana nakon izvr\u0161ene narud\u017Ebe odnosno uplate ukoliko nije druga\u010Diji rok naveden kod samog proizvoda.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Prilikom isporuke zbog mogu\u0107eg o\u0161te\u0107enja sva roba mora biti u potpunosti pregledana u prisutnosti voza\u010Da dostavlja\u010Da. Bilo koji gubitak ili o\u0161te\u0107enje mora biti zabilje\u017Eeno na dostavnici, a kupac nas mora obavijestiti o ovom doga\u0111aju elektronskim putem u roku od 48 sati od primitka robe. Dostavnica je obvezuju\u0107i dokument, koji u potpunosti dokazuje da je roba isporu\u010Dena bez ikakvog gubitka ili \u0161tete.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Reklamacija proizvoda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Prodavatelj odgovara za materijalne nedostatke stvari koje prodaje na svojim stranicama sukladno pozitivnim propisima Republike Hrvatske, posebice Zakonu o obveznim odnosima. Kupac ima pravo na reklamaciju u odnosu na materijalne nedostatke u rokovima i zbog razloga propisanih odredbama navedenog Zakona. Kupac mo\u017Ee pisani prigovor odnosno reklamaciju uputiti na e-mail info@cascadus.hr sa naznakom reklamacija.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Prodavatelj \u0107e smatrati reklamaciju valjanom, ako pregledom proizvoda utvrdi da odgovara uvjetima za reklamaciju sukladno Zakonu o obveznim odnosima i Zakonu o za\u0161titi potro\u0161a\u010Da. U tom slu\u010Daju \u0107e u roku od 15 dana od primitka valjane reklamacije zamijeniti proizvod ili vratiti cjelokupan pla\u0107eni iznos. Ukoliko ustanovi da reklamacija nije pravovaljana o istome \u0107e obavijestiti Kupca u roku od 15 dana od dana primitka reklamacije.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Raskid ugovora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "PRAVO NA JEDNOSTRANI RASKID UGOVORA SKLOPLJENOG IZVAN POSLOVNIH PROSTORIJA ILI SKLOPLJENOG NA DALJINU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Potro\u0161a\u010D mo\u017Ee, ne navode\u0107i razlog, jednostrano raskinuti ovaj ugovor, u roku od 14 dana od dana sklapanja ugovora ili po njegovom primitku. Pravo na jednostrani raskid ugovora po\u010Dinje te\u0107i od datuma isporuke tj. od datuma za osobno preuzimanje po\u0161iljke. Kako bi ostvario pravo na jednostrani raskid, potro\u0161a\u010D mora trgovcu pisano dostaviti obavijest u kojoj navodi da raskida ugovor. Obavijest mora biti napisana na trajnom mediju i sadr\u017Eavati podatke koji su ni\u017Ee nazna\u010Deni, a mo\u017Ee se dostaviti kao pismo poslano po\u0161tom ili elektroni\u010Dka po\u0161ta. Ako potro\u0161a\u010D koristi svoje pravo na jednostrani raskid, ne\u0107e snositi u vezi s tim nastale tro\u0161kove osim izravnih tro\u0161kova povrata robe te umanjenja vrijednosti robe. Povrat novca mo\u017Eemo izvr\u0161iti tek nakon \u0161to nam roba bude vra\u0107ena ili nakon \u0161to nam dostavite dokaz da ste nam robu poslali nazad. Primjerak obrasca za jednostrani raskid ugovora mo\u017Eete elektroni\u010Dki ispuniti i poslati.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Potvrdu primitka obavijesti o jednostranom raskidu ugovora dostavit \u0107emo vam, bez odga\u0111anja, elektroni\u010Dkom po\u0161tom.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Upisan u sudski registar na Trgova\u010Dkom sudu u Zagrebu, Amru\u0161eva 2, 10 000 Zagreb. Temeljni kapital: 20 000.00 HRK. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Poduzetnik je u sustavu PDV-a. Valuta pla\u0107anja je hrvatska kuna (kn). U cijene proizvoda nisu uklju\u010Deni tro\u0161kovi dostave, koji se posebno pla\u0107aju. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Kupac (potro\u0161a\u010D) robe je posjetitelj web trgovine, koji odabere barem jedan proizvod, ubaci ga u ko\u0161aricu, plati kreditnom karticom, virmanom (uplatnicom) ili prilikom pouze\u0107a te po\u0161alje potvrdu o uplati prodavatelju. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".purchase-img[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  image-rendering: optimizeSpeed;\n  background-size: contain;\n  width: 100%;\n  background-position: center;\n  background-attachment: fixed;\n}\n\n.purchase-img-1[_ngcontent-%COMP%] {\n  background-image: url('undraw_remember.svg');\n  image-rendering: optimizeSpeed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvcHVyY2hhc2Utc3RhdGVtZW50L3B1cmNoYXNlLXN0YXRlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBQ0E7RUFDSSw0Q0FBQTtFQUNBLDhCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3B1YmxpYy9wdXJjaGFzZS1zdGF0ZW1lbnQvcHVyY2hhc2Utc3RhdGVtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB1cmNoYXNlLWltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59XHJcbi5wdXJjaGFzZS1pbWctMXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvdW5kcmF3X3JlbWVtYmVyLnN2Z1wiKTtcclxuICAgIGltYWdlLXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseStatementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-statement',
                templateUrl: './purchase-statement.component.html',
                styleUrls: ['./purchase-statement.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "WGzu":
/*!************************************************************************************!*\
  !*** ./src/app/components/public/payment-statement/payment-statement.component.ts ***!
  \************************************************************************************/
/*! exports provided: PaymentStatementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentStatementComponent", function() { return PaymentStatementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class PaymentStatementComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle("Cascadus - Izjava o plaćanju");
    }
    ngOnInit() {
    }
}
PaymentStatementComponent.ɵfac = function PaymentStatementComponent_Factory(t) { return new (t || PaymentStatementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
PaymentStatementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentStatementComponent, selectors: [["app-payment-statement"]], decls: 17, vars: 0, consts: [[1, "row", "mt-5", "pt-5", "justify-content-end", "terms-img", "terms-img-1"], [1, "col-md-6", "col-xs-10"], [1, "card", "p-3", "m-5", "opacity-1"], [1, "text-center"], [1, "lead"]], template: function PaymentStatementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Pri pla\u0107anju na na\u0161oj web trgovini koristite CorvusPay \u2013 napredni sustav za siguran prihvat platnih kartica putem interneta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " CorvusPay osigurava potpunu tajnost Va\u0161ih karti\u010Dnih podataka ve\u0107 od trenutka kada ih upi\u0161ete u CorvusPay platni formular. Platni podaci proslje\u0111uju se \u0161ifrirano od Va\u0161eg web preglednika do banke koja je izdala Va\u0161u karticu. Na\u0161a trgovina nikada ne dolazi u kontakt s cjelovitim podacima o Va\u0161oj platnoj kartici. Tako\u0111er, podaci su nedostupni \u010Dak i djelatnicima CorvusPay sustava. Izolirana jezgra samostalno prenosi i upravlja osjetljivim podacima, \u010Duvaju\u0107i ih pri tom potpuno sigurnima. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Formular za upis platnih podataka osiguran je SSL transportnom \u0161ifrom najve\u0107e pouzdanosti. Svi skladi\u0161teni podaci dodatno su za\u0161ti\u0107eni \u0161ifriranjem, kori\u0161tenjem kriptografskog ure\u0111aja certificiranog prema FIPS 140-2 Level 3 standardu. CorvusPay zadovoljava sve zahtjeve vezane uz sigurnost on-line pla\u0107anja propisane od strane vode\u0107ih karti\u010Dnih brandova, odnosno posluje sukladno normi \u2013 PCI DSS Level 1 \u2013 najvi\u0161i sigurnosni standard industrije platnih kartica. Pri pla\u0107anju karticama uvr\u0161tenim u 3-D Secure program Va\u0161a banka uz valjanost same kartice dodatno potvr\u0111uje i Va\u0161 identitet pomo\u0107u tokena ili lozinke. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Corvus Info sve prikuplje ne informacije smatra bankovnom tajnom i tretira ih u skladu s tim. Informacije se koriste isklju\u010Divo u svrhe za koje su namijenjene. Va\u0161i osjetljivi podaci u potpunosti su sigurni, a njihova privatnost zajam\u010Dena je najmodernijim za\u0161titnim mehanizmima. Prikupljaju se samo podaci nu\u017Eni za obavljanje posla sukladno propisanim zahtjevnim procedurama za on-line pla\u0107anje. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Sigurnosne kontrole i operativne procedure primijenjene na na\u0161u infrastrukturu osiguravaju trenutnu pouzdanost CorvusPay sustava. Uz to odr\u017Eavanjem stroge kontrole pristupa, redovitim pra\u0107enjem sigurnosti i dubinskim provjerama za sprje\u010Davanje ranjivosti mre\u017Ee te planskim provo\u0111enjem odredbi o informacijskoj sigurnosti trajno odr\u017Eavaju i unaprje\u0111uju stupanj sigurnosti sustava za\u0161titom Va\u0161ih karti\u010Dnih podataka. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Hvala \u0161to koristite CorvusPay! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".terms-img[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  image-rendering: optimizeSpeed;\n  background-size: cover;\n  width: 100%;\n  background-position: center;\n  background-attachment: scroll;\n}\n\n.terms-img-1[_ngcontent-%COMP%] {\n  background-image: url('undraw_terms.svg');\n  image-rendering: optimizeSpeed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvcGF5bWVudC1zdGF0ZW1lbnQvcGF5bWVudC1zdGF0ZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUNBO0VBQ0kseUNBQUE7RUFDQSw4QkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvcGF5bWVudC1zdGF0ZW1lbnQvcGF5bWVudC1zdGF0ZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVybXMtaW1nIHtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcclxufVxyXG4udGVybXMtaW1nLTF7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL3VuZHJhd190ZXJtcy5zdmdcIik7XHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentStatementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment-statement',
                templateUrl: './payment-statement.component.html',
                styleUrls: ['./payment-statement.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "WLZD":
/*!***********************************************!*\
  !*** ./src/app/sevices/categories.service.ts ***!
  \***********************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CategoriesService {
    constructor(http) {
        this.http = http;
        this.URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].domain + "admin/categories";
        this.token = localStorage.getItem("jwt");
    }
    getAllCategories() {
        let response = this.http.get(this.URL + "/all", { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
        return response;
    }
    getActiveCategories() {
        return this.http.get(this.URL + "/active", { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    getCategoryById(id) {
        return this.http.get(this.URL + "/get/" + id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    addCategory(category) {
        const data = {
            Id: 0,
            Naziv: category.Naziv,
            Izbrisano: false
        };
        return this.http.post(this.URL + "/add", data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    editCategory(category) {
        const data = {
            Id: category.Id,
            Naziv: category.Naziv,
            Izbrisano: category.Izbrisano
        };
        return this.http.post(this.URL + "/update/" + category.Id, data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    deleteCategory(id) {
        return this.http.get(this.URL + "/delete/" + id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CategoriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "WXvV":
/*!****************************************************************************!*\
  !*** ./src/app/components/public/order-success/order-success.component.ts ***!
  \****************************************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
/* harmony import */ var _models_buyer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/buyer */ "0+sa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





class OrderSuccessComponent {
    constructor(route, titleService) {
        this.route = route;
        this.titleService = titleService;
        this.buyer = new _models_buyer__WEBPACK_IMPORTED_MODULE_0__["Buyer"]();
        this.titleService.setTitle("Cascadus - Uspješno plaćanje");
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            var name = params.get('buyer');
            name = name.charAt(0).toUpperCase() + name.slice(1);
            document.getElementById('buyerName').innerText = name;
            localStorage.clear();
            setTimeout(() => {
                window.location.href = 'home/';
            }, 10000);
        });
    }
}
OrderSuccessComponent.ɵfac = function OrderSuccessComponent_Factory(t) { return new (t || OrderSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"])); };
OrderSuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrderSuccessComponent, selectors: [["app-order-success"]], decls: 17, vars: 0, consts: [["id", "order-success"], [1, "row", "orange", "black-text", "m-0", "p-0"], [1, "col-12", "pt-5"], [1, "d-flex", "justify-content-center", "py-5", "px-2", 2, "min-height", "100vh", "height", "auto"], [1, "text-center", "align-self-center"], ["id", "buyerName"]], template: function OrderSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, ", hvala ti na ovoj narud\u017Ebi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Proizvode koje si naru\u010Dio ubrzo kre\u0107u prema tebi!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Upravo ti \u0161aljemo mail sa detaljima tvoje narud\u017Ebe.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Ukoliko ima\u0161 neke zahtjeve vezane uz tvoju narud\u017Ebu, bitno je da zna\u0161 broj narud\u017Ebe (nalazi se u mailu) kako bi znali o kojoj narud\u017Ebi se radi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u010Cim po\u0161aljemo tvoj paket, dobit \u0107e\u0161 poruku putem email adrese ili sms porukom.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL29yZGVyLXN1Y2Nlc3Mvb3JkZXItc3VjY2Vzcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderSuccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-order-success',
                templateUrl: './order-success.component.html',
                styleUrls: ['./order-success.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }]; }, null); })();


/***/ }),

/***/ "XhIz":
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/admin-layout/admin-layout.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _components_admin_admin_side_bar_admin_side_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/admin/admin-side-bar/admin-side-bar.component */ "jxtJ");






class AdminLayoutComponent {
    constructor(router, jwt) {
        this.router = router;
        this.jwt = jwt;
    }
    ngOnInit() {
        if (!this.isUserAuthenticated()) {
            this.router.navigate(["home"]);
        }
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
    isUserAuthenticated() {
        const token = localStorage.getItem("jwt");
        const role = localStorage.getItem("role");
        if (token && !this.jwt.isTokenExpired(token)) {
            if (role == "Admin") {
                console.log("acc YES \n admin YES");
                return true;
            }
            else {
                console.log("acc YES \n admin NO");
                return false;
            }
        }
        else {
            console.log("acc NO \n admin NO");
            return false;
        }
    }
}
AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) { return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"])); };
AdminLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminLayoutComponent, selectors: [["app-admin-layout"]], decls: 6, vars: 0, consts: [[1, "row", "h-auto"], [1, "col-2"], [2, "position", "sticky", "height", "auto", "bottom", "0", "top", "0"], [1, "col-10"]], template: function AdminLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-admin-side-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_admin_admin_side_bar_admin_side_bar_component__WEBPACK_IMPORTED_MODULE_3__["AdminSideBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLWxheW91dC9hZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-layout',
                templateUrl: './admin-layout.component.html',
                styleUrls: ['./admin-layout.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"] }]; }, null); })();


/***/ }),

/***/ "YcCY":
/*!*****************************************!*\
  !*** ./src/app/sevices/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class AuthService {
    constructor(http) {
        this.http = http;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].domain + "auth";
    }
    login(user) {
        return this.http.post(this.URL + "/login", user, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Content-Type": "application/json"
            }) });
    }
    register(user) {
        return this.http.post(this.URL + "/register", user, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Content-Type": "application/json"
            }) });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _components_public_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/public/checkout/checkout.component */ "3loq");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/auth-guard.service */ "Hs9l");
/* harmony import */ var _sevices_buyers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sevices/buyers.service */ "SbDr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _pages_public_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/public/public-layout/public-layout.component */ "m82/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_admin_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/admin/admin-layout/admin-layout.component */ "XhIz");
/* harmony import */ var _components_public_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/public/contact/contact.component */ "DVJy");
/* harmony import */ var _components_public_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/public/product-list/product-list.component */ "GIQH");
/* harmony import */ var _components_public_product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/public/product/product.component */ "g3NY");
/* harmony import */ var _components_public_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/public/product-card/product-card.component */ "M1FE");
/* harmony import */ var _components_admin_admin_side_bar_admin_side_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin/admin-side-bar/admin-side-bar.component */ "jxtJ");
/* harmony import */ var _components_admin_admin_homepage_admin_homepage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/admin/admin-homepage/admin-homepage.component */ "lnid");
/* harmony import */ var _components_public_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/public/navbar/navbar.component */ "iBMz");
/* harmony import */ var _components_public_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/public/footer/footer.component */ "BXCQ");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/auth/login/login.component */ "HzFZ");
/* harmony import */ var _components_public_content_content_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/public/content/content.component */ "GV//");
/* harmony import */ var _components_public_faq_faq_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/public/faq/faq.component */ "Rttg");
/* harmony import */ var _components_public_order_product_order_product_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/public/order-product/order-product.component */ "knmp");
/* harmony import */ var _components_public_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/public/about-us/about-us.component */ "QYNN");
/* harmony import */ var _components_public_order_fail_order_fail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/public/order-fail/order-fail.component */ "ii0D");
/* harmony import */ var _components_public_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/public/order-success/order-success.component */ "WXvV");
/* harmony import */ var _components_admin_admin_discout_code_admin_discout_code_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/admin/admin-discout-code/admin-discout-code.component */ "aSMq");
/* harmony import */ var _components_admin_admin_product_admin_product_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/admin/admin-product/admin-product.component */ "uhI6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _sevices_categories_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./sevices/categories.service */ "WLZD");
/* harmony import */ var _components_admin_admin_buyers_admin_buyers_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/admin/admin-buyers/admin-buyers.component */ "FgzC");
/* harmony import */ var _components_admin_admin_invoices_admin_invoices_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/admin/admin-invoices/admin-invoices.component */ "oEZD");
/* harmony import */ var _components_admin_admin_category_admin_category_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/admin/admin-category/admin-category.component */ "/wRq");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _sevices_discounts_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./sevices/discounts.service */ "5y8b");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _sevices_products_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./sevices/products.service */ "IsAJ");
/* harmony import */ var _sevices_invoices_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./sevices/invoices.service */ "vvq5");
/* harmony import */ var _sevices_auth_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./sevices/auth.service */ "YcCY");
/* harmony import */ var _components_auth_auth_auth_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/auth/auth/auth.component */ "mbCB");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/auth/register/register.component */ "+jqZ");
/* harmony import */ var _components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/auth/logout/logout.component */ "UiRp");
/* harmony import */ var _sevices_emails_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./sevices/emails.service */ "tPiu");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _components_public_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/public/privacy/privacy.component */ "8QaN");
/* harmony import */ var _components_public_payment_statement_payment_statement_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/public/payment-statement/payment-statement.component */ "WGzu");
/* harmony import */ var _components_public_purchase_statement_purchase_statement_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/public/purchase-statement/purchase-statement.component */ "WCbn");
/* harmony import */ var _sevices_payment_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./sevices/payment.service */ "yynU");
/* harmony import */ var _components_public_corvus_cancel_corvus_cancel_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/public/corvus-cancel/corvus-cancel.component */ "007D");
/* harmony import */ var _components_public_corvus_success_corvus_success_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/public/corvus-success/corvus-success.component */ "zTXk");
/* harmony import */ var _sevices_cookie_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./sevices/cookie.service */ "vLfE");






















































function tokenGetter() {
    return localStorage.getItem("jwt");
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _sevices_auth_service__WEBPACK_IMPORTED_MODULE_37__["AuthService"],
        _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],
        _sevices_categories_service__WEBPACK_IMPORTED_MODULE_28__["CategoriesService"],
        _sevices_buyers_service__WEBPACK_IMPORTED_MODULE_2__["BuyersService"],
        _sevices_discounts_service__WEBPACK_IMPORTED_MODULE_33__["DiscountsService"],
        _sevices_products_service__WEBPACK_IMPORTED_MODULE_35__["ProductsService"],
        _sevices_invoices_service__WEBPACK_IMPORTED_MODULE_36__["InvoicesService"],
        _sevices_emails_service__WEBPACK_IMPORTED_MODULE_42__["EmailsService"],
        _sevices_payment_service__WEBPACK_IMPORTED_MODULE_47__["PaymentService"],
        _sevices_cookie_service__WEBPACK_IMPORTED_MODULE_50__["CookieService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__["BrowserAnimationsModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_39__["JwtModule"].forRoot({
                config: {
                    tokenGetter: tokenGetter,
                    allowedDomains: ["localhost:4200", "cascadus.hr", "api.cascadus.hr"],
                    disallowedRoutes: []
                }
            }),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_43__["ToastrModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _components_public_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
        _components_public_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
        _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
        _components_public_content_content_component__WEBPACK_IMPORTED_MODULE_18__["ContentComponent"],
        _components_public_faq_faq_component__WEBPACK_IMPORTED_MODULE_19__["FaqComponent"],
        _components_public_order_product_order_product_component__WEBPACK_IMPORTED_MODULE_20__["OrderProductComponent"],
        _components_public_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_21__["AboutUsComponent"],
        _pages_public_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_6__["PublicLayoutComponent"],
        _pages_admin_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__["AdminLayoutComponent"],
        _components_public_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
        _components_public_product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"],
        _components_public_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"],
        _components_public_content_content_component__WEBPACK_IMPORTED_MODULE_18__["ContentComponent"],
        _components_public_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_12__["ProductCardComponent"],
        _components_admin_admin_category_admin_category_component__WEBPACK_IMPORTED_MODULE_31__["AdminCategoryComponent"],
        _components_admin_admin_product_admin_product_component__WEBPACK_IMPORTED_MODULE_25__["AdminProductComponent"],
        _components_admin_admin_discout_code_admin_discout_code_component__WEBPACK_IMPORTED_MODULE_24__["AdminDiscoutCodeComponent"],
        _components_admin_admin_side_bar_admin_side_bar_component__WEBPACK_IMPORTED_MODULE_13__["AdminSideBarComponent"],
        _components_admin_admin_homepage_admin_homepage_component__WEBPACK_IMPORTED_MODULE_14__["AdminHomepageComponent"],
        _components_public_order_fail_order_fail_component__WEBPACK_IMPORTED_MODULE_22__["OrderFailComponent"],
        _components_public_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_23__["OrderSuccessComponent"],
        _components_admin_admin_buyers_admin_buyers_component__WEBPACK_IMPORTED_MODULE_29__["AdminBuyersComponent"],
        _components_admin_admin_invoices_admin_invoices_component__WEBPACK_IMPORTED_MODULE_30__["AdminInvoicesComponent"],
        _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
        _components_auth_auth_auth_component__WEBPACK_IMPORTED_MODULE_38__["AuthComponent"],
        _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_40__["RegisterComponent"],
        _components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_41__["LogoutComponent"],
        _components_public_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_44__["PrivacyComponent"],
        _components_public_payment_statement_payment_statement_component__WEBPACK_IMPORTED_MODULE_45__["PaymentStatementComponent"],
        _components_public_purchase_statement_purchase_statement_component__WEBPACK_IMPORTED_MODULE_46__["PurchaseStatementComponent"],
        _components_public_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_0__["CheckoutComponent"],
        _components_public_corvus_cancel_corvus_cancel_component__WEBPACK_IMPORTED_MODULE_48__["CorvusCancelComponent"],
        _components_public_corvus_success_corvus_success_component__WEBPACK_IMPORTED_MODULE_49__["CorvusSuccessComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__["BrowserAnimationsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_39__["JwtModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_43__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _components_public_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                    _components_public_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                    _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                    _components_public_content_content_component__WEBPACK_IMPORTED_MODULE_18__["ContentComponent"],
                    _components_public_faq_faq_component__WEBPACK_IMPORTED_MODULE_19__["FaqComponent"],
                    _components_public_order_product_order_product_component__WEBPACK_IMPORTED_MODULE_20__["OrderProductComponent"],
                    _components_public_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_21__["AboutUsComponent"],
                    _pages_public_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_6__["PublicLayoutComponent"],
                    _pages_admin_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__["AdminLayoutComponent"],
                    _components_public_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                    _components_public_product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"],
                    _components_public_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"],
                    _components_public_content_content_component__WEBPACK_IMPORTED_MODULE_18__["ContentComponent"],
                    _components_public_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_12__["ProductCardComponent"],
                    _components_admin_admin_category_admin_category_component__WEBPACK_IMPORTED_MODULE_31__["AdminCategoryComponent"],
                    _components_admin_admin_product_admin_product_component__WEBPACK_IMPORTED_MODULE_25__["AdminProductComponent"],
                    _components_admin_admin_discout_code_admin_discout_code_component__WEBPACK_IMPORTED_MODULE_24__["AdminDiscoutCodeComponent"],
                    _components_admin_admin_side_bar_admin_side_bar_component__WEBPACK_IMPORTED_MODULE_13__["AdminSideBarComponent"],
                    _components_admin_admin_homepage_admin_homepage_component__WEBPACK_IMPORTED_MODULE_14__["AdminHomepageComponent"],
                    _components_public_order_fail_order_fail_component__WEBPACK_IMPORTED_MODULE_22__["OrderFailComponent"],
                    _components_public_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_23__["OrderSuccessComponent"],
                    _components_admin_admin_buyers_admin_buyers_component__WEBPACK_IMPORTED_MODULE_29__["AdminBuyersComponent"],
                    _components_admin_admin_invoices_admin_invoices_component__WEBPACK_IMPORTED_MODULE_30__["AdminInvoicesComponent"],
                    _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                    _components_auth_auth_auth_component__WEBPACK_IMPORTED_MODULE_38__["AuthComponent"],
                    _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_40__["RegisterComponent"],
                    _components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_41__["LogoutComponent"],
                    _components_public_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_44__["PrivacyComponent"],
                    _components_public_payment_statement_payment_statement_component__WEBPACK_IMPORTED_MODULE_45__["PaymentStatementComponent"],
                    _components_public_purchase_statement_purchase_statement_component__WEBPACK_IMPORTED_MODULE_46__["PurchaseStatementComponent"],
                    _components_public_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_0__["CheckoutComponent"],
                    _components_public_corvus_cancel_corvus_cancel_component__WEBPACK_IMPORTED_MODULE_48__["CorvusCancelComponent"],
                    _components_public_corvus_success_corvus_success_component__WEBPACK_IMPORTED_MODULE_49__["CorvusSuccessComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__["BrowserAnimationsModule"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_39__["JwtModule"].forRoot({
                        config: {
                            tokenGetter: tokenGetter,
                            allowedDomains: ["localhost:4200", "cascadus.hr", "api.cascadus.hr"],
                            disallowedRoutes: []
                        }
                    }),
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_43__["ToastrModule"].forRoot(),
                ],
                providers: [
                    _sevices_auth_service__WEBPACK_IMPORTED_MODULE_37__["AuthService"],
                    _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],
                    _sevices_categories_service__WEBPACK_IMPORTED_MODULE_28__["CategoriesService"],
                    _sevices_buyers_service__WEBPACK_IMPORTED_MODULE_2__["BuyersService"],
                    _sevices_discounts_service__WEBPACK_IMPORTED_MODULE_33__["DiscountsService"],
                    _sevices_products_service__WEBPACK_IMPORTED_MODULE_35__["ProductsService"],
                    _sevices_invoices_service__WEBPACK_IMPORTED_MODULE_36__["InvoicesService"],
                    _sevices_emails_service__WEBPACK_IMPORTED_MODULE_42__["EmailsService"],
                    _sevices_payment_service__WEBPACK_IMPORTED_MODULE_47__["PaymentService"],
                    _sevices_cookie_service__WEBPACK_IMPORTED_MODULE_50__["CookieService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aSMq":
/*!*************************************************************************************!*\
  !*** ./src/app/components/admin/admin-discout-code/admin-discout-code.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AdminDiscoutCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDiscoutCodeComponent", function() { return AdminDiscoutCodeComponent; });
/* harmony import */ var _models_discountCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/discountCode */ "HYO+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_sevices_discounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sevices/discounts.service */ "5y8b");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AdminDiscoutCodeComponent_tr_32_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 1, code_r4.vrijediDo, "dd-MM-yyyy"));
} }
function AdminDiscoutCodeComponent_tr_32_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, code_r4.vrijediDo, "dd-MM-yyyy"));
} }
function AdminDiscoutCodeComponent_tr_32_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "bold", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminDiscoutCodeComponent_tr_32_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "bold", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminDiscoutCodeComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AdminDiscoutCodeComponent_tr_32_div_8_Template, 4, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AdminDiscoutCodeComponent_tr_32_ng_template_9_Template, 3, 4, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AdminDiscoutCodeComponent_tr_32_div_12_Template, 3, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AdminDiscoutCodeComponent_tr_32_ng_template_13_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDiscoutCodeComponent_tr_32_Template_button_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const code_r4 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.editBtn($event, code_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDiscoutCodeComponent_tr_32_Template_button_click_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const code_r4 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.removeBtn($event, code_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r4 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](code_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](code_r4.popustKod);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", code_r4.popustUpostocima, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isExpired(code_r4.vrijediDo))("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", code_r4.izbrisano)("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "editBtn", code_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", code_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "removeBtn", code_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", code_r4.id);
} }
function AdminDiscoutCodeComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add New Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Code:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Percentage:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Valid:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDiscoutCodeComponent_div_33_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.OnAddCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDiscoutCodeComponent_div_33_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.OnAddConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.addForm);
} }
function AdminDiscoutCodeComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Edit discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Code:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Percentage:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Valid:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDiscoutCodeComponent_div_34_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.OnEditCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDiscoutCodeComponent_div_34_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.OnEditConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.editForm);
} }
function AdminDiscoutCodeComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Remove item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Code:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Percentage:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Valid until:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h5", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "You won't be able to undo this action. Please check if this item is the one you want to remove.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDiscoutCodeComponent_div_35_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.OnRemoveCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDiscoutCodeComponent_div_35_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.OnRemoveConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r3.removeForm);
} }
class AdminDiscoutCodeComponent {
    constructor(discountsService, fb) {
        this.discountsService = discountsService;
        this.fb = fb;
        this.title = "Admin - Discounts";
        this.showInactive = false;
        this.disabledBtn = null;
        this.OnReloadClick();
    }
    OnReloadClick() {
        if (this.showInactive) {
            this.discountsService
                .getAll()
                .subscribe(result => {
                this.codes = result;
                this.codes.forEach(c => {
                    console.log(JSON.stringify(c));
                });
            });
        }
        else {
            this.discountsService
                .getActive()
                .subscribe(result => {
                this.codes = result;
                this.codes.forEach(c => {
                    console.log(JSON.stringify(c));
                });
            });
        }
        if (this.disabledBtn != null) {
            console.log('Disabled: ' + this.disabledBtn.id);
            this.disabledBtn.disabled = false;
            this.resetAllForms();
            this.hideAllForms();
        }
        this.ngOnInit();
    }
    hideAllForms() {
        this.addFormShown = false;
        this.editFormShown = false;
        this.removeFormShown = false;
    }
    resetAllForms() {
        this.addForm.reset();
        this.editForm.reset();
        this.removeForm.reset();
    }
    ngOnInit() {
        this.initForms();
        document.title = this.title;
        this.todayDate = new Date();
        this.addFormShown = false;
        this.editFormShown = false;
        this.removeFormShown = false;
    }
    isExpired(date) {
        // use YYYY, MM, DD
        let today = new Date();
        var g1 = new Date(today.getFullYear(), today.getMonth(), today.getDay());
        date = new Date(date);
        var g2 = new Date(date.getFullYear(), date.getMonth(), date.getDay());
        if (g1.getTime() <= g2.getTime()) {
            return true;
        }
        else if (g1.getTime() > g2.getTime()) {
            return false;
        }
        else {
            return false;
        }
    }
    OnShowActiveChange(event) {
        this.showInactive = !this.showInactive;
        this.OnReloadClick();
    }
    initForms() {
        this.addForm = this.fb.group({
            addName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            addPercentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            addValidUntil: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.editForm = this.fb.group({
            editId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            editName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            editPercentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            editValidUntil: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            editActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.removeForm = this.fb.group({
            removeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            removeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            removePercentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            removeValidUntil: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            removeActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    addBtn(event) {
        this.hideAllForms();
        this.resetAllForms();
        if (this.disabledBtn != null) {
            this.disabledBtn.disabled = false;
        }
        this.disabledBtn = event.target;
        this.disabledBtn.disabled = true;
        this.addFormShown = true;
    }
    OnAddCancel() {
        this.resetAllForms();
        this.hideAllForms();
        this.disabledBtn.disabled = false;
    }
    OnAddConfirm() {
        this.disabledBtn.disabled = false;
        let code = new _models_discountCode__WEBPACK_IMPORTED_MODULE_0__["DiscountCode"]();
        code.id = 0;
        code.popustKod = this.addForm.get('addName').value;
        code.popustUPostocima = this.addForm.get('addPercentage').value;
        code.vrijediDo = this.addForm.get('addValidUntil').value;
        code.izbrisano = false;
        if (code.popustKod.length <= 3
            || code.popustUPostocima < 0
            || code.popustUPostocima > 100) {
            return;
        }
        console.log(JSON.stringify(code));
        this.discountsService
            .add(code)
            .subscribe(result => {
            this.OnReloadClick();
        });
        this.hideAllForms();
        this.resetAllForms();
    }
    isDateValid(date) {
        console.log('Is date valid? \n' + (date instanceof Date && !isNaN(date.valueOf())));
        return date instanceof Date && !isNaN(date.valueOf());
    }
    editBtn(event, id) {
        if (this.disabledBtn != null) {
            this.disabledBtn.disabled = false;
        }
        this.disabledBtn = event.target;
        this.disabledBtn.disabled = true;
        this.hideAllForms();
        this.resetAllForms();
        this.fillEditForm(id);
    }
    fillEditForm(id) {
        this.discountsService
            .getById(id)
            .subscribe(result => {
            this.code = Object.assign(new _models_discountCode__WEBPACK_IMPORTED_MODULE_0__["DiscountCode"], result);
            this.code.popustUPostocima = result["popustUpostocima"];
            let parsedDate = this.code.vrijediDo.toString().substring(0, 10);
            this.editForm = this.fb.group({
                editId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.code.id, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                editName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.code.popustKod, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                editPercentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.code.popustUPostocima, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                editValidUntil: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](parsedDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                editActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.code.izbrisano)
            }, error => { console.log(error); });
        });
        this.editFormShown = true;
    }
    OnEditConfirm() {
        this.disabledBtn.disabled = false;
        let code = new _models_discountCode__WEBPACK_IMPORTED_MODULE_0__["DiscountCode"]();
        code.id = this.editForm.get('editId').value;
        code.popustKod = this.editForm.get('editName').value;
        code.popustUPostocima = this.editForm.get('editPercentage').value;
        code.vrijediDo = this.editForm.get('editValidUntil').value;
        code.izbrisano = this.editForm.get('editActive').value;
        this.discountsService
            .edit(code)
            .subscribe(() => {
            this.OnReloadClick();
        });
        this.hideAllForms();
        this.resetAllForms();
    }
    OnEditCancel() {
        this.disabledBtn.disabled = false;
        this.resetAllForms();
        this.hideAllForms();
    }
    //Remove functions
    removeBtn(event, id) {
        if (this.disabledBtn != null) {
            this.disabledBtn.disabled = false;
        }
        this.resetAllForms();
        this.hideAllForms();
        this.fillRemoveForm(id);
        this.removeFormShown = true;
        this.disabledBtn = event.target;
        this.disabledBtn.disabled = true;
    }
    fillRemoveForm(id) {
        this.discountsService
            .getById(id)
            .subscribe(result => {
            this.code = Object.assign(new _models_discountCode__WEBPACK_IMPORTED_MODULE_0__["DiscountCode"], result);
            console.log(JSON.stringify(this.code));
            let id = this.code.id;
            let popustkod = this.code.popustKod;
            let popustUPostocima = result["popustUpostocima"];
            let parsedDate = this.code.vrijediDo.toString().substring(0, 10);
            let active = this.code.izbrisano;
            this.removeForm = this.fb.group({
                removeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: id, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                removeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: popustkod, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                removePercentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: popustUPostocima, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                removeValidUntil: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: parsedDate, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                removeActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: active, disabled: true })
            });
        });
    }
    OnRemoveCancel() {
        this.disabledBtn.disabled = false;
        this.hideAllForms();
        this.resetAllForms();
    }
    OnRemoveConfirm() {
        this.disabledBtn.disabled = false;
        this.discountsService
            .delete(this.code.id)
            .subscribe(result => {
            this.resetAllForms();
            this.hideAllForms();
            this.OnReloadClick();
        });
    }
}
AdminDiscoutCodeComponent.ɵfac = function AdminDiscoutCodeComponent_Factory(t) { return new (t || AdminDiscoutCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sevices_discounts_service__WEBPACK_IMPORTED_MODULE_3__["DiscountsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
AdminDiscoutCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminDiscoutCodeComponent, selectors: [["app-admin-discout-code"]], decls: 36, vars: 4, consts: [[1, "row"], [1, "col-8", "text-center"], [1, "justify-content-center", "text-center"], ["type", "checkbox", "id", "toggleActive", 1, "checkbox", 3, "change"], ["id", "lblToggleActive", "for", "toggleActive"], ["id", "addBtn", 1, "btn", "btn-lg", "btn-primary", "col-xs-12", 3, "click"], ["id", "productsTable", 1, "table", "text-center", "m-0", "p-0", "fixedTableHead"], [1, "green-text", "d-inline"], [1, "red-text", "d-inline"], ["id", "tableBody"], [4, "ngFor", "ngForOf"], ["id", "addForm", "class", "card card-body m-2 col-3", 4, "ngIf"], ["id", "editForm", "class", "card card-body m-2  my-0 col-3", 4, "ngIf"], ["id", "removeForm", "class", "card card-body m-2 my-0 col-3", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["expired_date", ""], ["izbrisano_false", ""], [1, "btn-group"], [1, "btn", "btn-sm", "btn-outline-success", 3, "id", "value", "click"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "id", "value", "click"], [1, "green-text", "bold"], [1, "red-text"], [1, "green-text"], ["id", "addForm", 1, "card", "card-body", "m-2", "col-3"], [3, "formGroup"], [1, "card-header"], [1, "card-body"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], ["formControlName", "addName", "required", "", "type", "text", "minlength", "3", "maxlength", "50", "name", "addName", "id", "addName", "aria-describedby", "basic-addon3", 1, "form-control"], ["formControlName", "addPercentage", "required", "", "type", "number", "value", "0", "min", "0", "max", "100", "name", "addPercentage", "id", "addPercentage", "aria-describedby", "basic-addon3", 1, "form-control"], [1, "input-group"], ["useValueAsDate", "", "formControlName", "addValidUntil", "type", "date", "name", "addValidUntil", "id", "addValidUntil", "required", "", 1, "form-control"], [1, "card-footer"], ["id", "addFormCancel", "type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "addFormConfirm", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "editForm", 1, "card", "card-body", "m-2", "my-0", "col-3"], [1, "col-12"], ["id", "editModalItemInfo"], ["readonly", "", "type", "text", "minlength", "1", "maxlength", "50", "name", "id", "id", "editId", "formControlName", "editId", "name", "editId", "aria-describedby", "basic-addon3", 1, "form-control"], ["formControlName", "editName", "required", "", "type", "text", "minlength", "3", "maxlength", "50", "name", "editName", "id", "editName", "aria-describedby", "basic-addon3", 1, "form-control"], ["formControlName", "editPercentage", "required", "", "type", "number", "value", "0", "min", "0", "max", "100", "name", "editPercentage", "id", "editPercentage", "aria-describedby", "basic-addon3", 1, "form-control"], ["useValueAsDate", "", "id", "editValidUntil", "formControlName", "editValidUntil", "type", "date", "name", "addValidUntil", "placeholder", "yyyy-mm-dd", "required", "", 1, "form-control"], [1, "custom-control", "custom-checkbox", "d-none"], ["type", "checkbox", "name", "editActive", "formControlName", "editActive", "id", "editActive", 1, "custom-control-input"], ["for", "editActive", 1, "custom-control-label"], ["id", "btnEditCancel", "type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "btnEditSubmit", "type", "button", 1, "btn", "btn-success", 3, "click"], ["id", "removeForm", 1, "card", "card-body", "m-2", "my-0", "col-3"], ["readonly", "", "formControlName", "removeId", "type", "text", "minlength", "1", "maxlength", "50", "name", "removeId", "id", "removeId", "aria-describedby", "basic-addon3", "value", "", "placeholder", "", 1, "form-control"], ["formControlName", "removeName", "required", "", "type", "text", "minlength", "3", "maxlength", "50", "name", "removeName", "id", "removeName", "aria-describedby", "basic-addon3", 1, "form-control"], ["formControlName", "removePercentage", "required", "", "type", "number", "value", "0", "min", "0", "max", "100", "name", "removePercentage", "id", "removePercentage", "aria-describedby", "basic-addon3", 1, "form-control"], ["useValueAsDate", "", "formControlName", "removeValidUntil", "type", "date", "name", "editValidUntil", "placeholder", "yyyy-mm-dd", "required", "", 1, "form-control"], ["type", "checkbox", "name", "removeActive", "formControlName", "removeActive", "id", "removeActive", 1, "custom-control-input"], ["for", "removeActive", 1, "custom-control-label"], [1, "text-danger"], ["id", "btnRemoveCancel", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "btnRemoveSubmit", 1, "btn", "btn-danger", 3, "click"]], template: function AdminDiscoutCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Discount codes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdminDiscoutCodeComponent_Template_input_change_6_listener($event) { return ctx.OnShowActiveChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Show expired and deleted");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDiscoutCodeComponent_Template_button_click_10_listener($event) { return ctx.addBtn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "New discount code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Discount percentage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Valid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Expired");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Removed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, AdminDiscoutCodeComponent_tr_32_Template, 21, 11, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, AdminDiscoutCodeComponent_div_33_Template, 26, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, AdminDiscoutCodeComponent_div_34_Template, 38, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, AdminDiscoutCodeComponent_div_35_Template, 37, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.codes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addFormShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editFormShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.removeFormShown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4tZGlzY291dC1jb2RlL2FkbWluLWRpc2NvdXQtY29kZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminDiscoutCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-admin-discout-code',
                templateUrl: './admin-discout-code.component.html',
                styleUrls: ['./admin-discout-code.component.scss']
            }]
    }], function () { return [{ type: src_app_sevices_discounts_service__WEBPACK_IMPORTED_MODULE_3__["DiscountsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "ahTl":
/*!***********************************!*\
  !*** ./src/app/models/invoice.ts ***!
  \***********************************/
/*! exports provided: Invoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invoice", function() { return Invoice; });
class Invoice {
}


/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    domain: "https://api.cascadus.hr/api/",
    tokenKey: "jwt",
    roleKey: "role"
};


/***/ }),

/***/ "g3NY":
/*!****************************************************************!*\
  !*** ./src/app/components/public/product/product.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/product */ "yHTb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_sevices_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sevices/products.service */ "IsAJ");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _order_product_order_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../order-product/order-product.component */ "knmp");









function ProductComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Jurim!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "order-product", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r1.pro.putanja, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", ctx_r1.pro);
} }
function ProductComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "top product");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Cijena: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "strong", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Opis proizvoda ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Karakteristike ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "order-product", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.pro.naziv);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r3.pro.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("alt", "", ctx_r3.pro.naziv, " | ", ctx_r3.pro.opis, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r3.pro.cijena, "kn");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "#collapseOne1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.pro.opis);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "#collapseTwo2", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.pro.karakteristike);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", ctx_r3.pro);
} }
class ProductComponent {
    constructor(router, route, productsService, titleService) {
        this.router = router;
        this.route = route;
        this.productsService = productsService;
        this.titleService = titleService;
        this.pro = new _models_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
        this.renderHtml = false;
        router.events.subscribe((event) => {
            this.navigationInterceptor(event);
        });
    }
    navigationInterceptor(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            this.isLoading = true;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            this.isLoading = false;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
            this.isLoading = false;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
            this.isLoading = false;
        }
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            if (params.get('id') != null) {
                let id = +params.get('id');
                this.id = id;
                this.isLoading = true;
                this.productsService.getById(id).subscribe((result) => {
                    Object.assign(this.pro, result);
                    //console.log(this.pro);
                    if (this.pro.putanja.toString().length > 0) {
                        this.renderHtml = true;
                    }
                    else {
                        this.renderHtml = false;
                    }
                    this.titleService.setTitle("Cascadus - " + this.pro.naziv);
                    setTimeout(() => {
                        this.isLoading = false;
                    }, 750);
                });
            }
        });
    }
    scrollTo(id) {
        let el = document.getElementById(id);
        el.scrollIntoView();
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sevices_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 11, vars: 3, consts: [[1, "m-0", "p-0"], ["class", "loading-overlay", 4, "ngIf"], [1, "floating-add-to-cart", 3, "click"], [1, "m-auto", "p-1"], [1, "material-icons", "d-inline-block"], [1, "d-none", "d-md-inline-block"], [4, "ngIf", "ngIfElse"], ["default", ""], [1, "loading-overlay"], ["aria-hidden", "false", "role", "status", 1, "text-center"], ["alt", "cascadus pinguin with rocket - loading", "src", "../../../../assets/pinguin-rocket.png", 1, "spinner-pinguin", 2, "height", "100px", "width", "100px"], [1, "grey-text", "d-block"], [1, "text-center", "mt-5"], ["id", "product"], [3, "innerHtml"], ["id", "order-product"], [3, "product"], [1, "parallax", "parallax4"], [1, "mt-5", "pt-5", "z-depth-1"], [1, "row", "mx-auto", "mt-5", "p-3"], [1, "col-xs-12", "col-lg-6", "pl-md-5", "text-center", "shadow", "p-2", "mx-auto", "px-auto", "card", "rounded"], [1, "text-center", "text-md-left", "text-lg-center", "product-name", "font-weight-bold", "dark-grey-text", "mb-1", "ml-xl-0", "ml-4"], [1, ""], [1, "img", "img-responsive", "img-fluid", "w-100", "h-auto", 3, "src", "alt"], [1, "col-xs-12", "col-lg-5", "text-center", "text-md-left"], [1, "badge", "badge-info", "product", "mb-4", "ml-xl-0", "ml-4"], [1, "h3-responsive", "text-center", "text-md-left", "mb-5", "ml-xl-0", "ml-4"], [1, "red-text", "font-weight-bold", "badge", "badge-pill", "badge-warning", "p-2"], [1, "dark-grey-text"], [2, "color", "#666"], ["id", "accordionEx", "role", "tablist", "aria-multiselectable", "true", 1, "accordion", "md-accordion"], [1, "card"], ["role", "tab", "id", "headingOne1", 1, "card-header"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "true", "aria-controls", "collapseOne1", 3, "href"], [1, "mb-0", "dark-grey-text"], [1, "fas", "fa-angle-down", "rotate-icon"], ["id", "collapseOne1", "role", "tabpanel", "aria-labelledby", "headingOne1", "data-parent", "#accordionEx", 1, "collapse", "show"], [1, "card-body"], ["role", "tab", "id", "headingTwo2", 1, "card-header"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "aria-expanded", "false", "aria-controls", "collapseTwo2", 1, "collapsed", 3, "href"], ["id", "collapseTwo2", "role", "tabpanel", "aria-labelledby", "headingTwo2", "data-parent", "#accordionEx", 1, "collapse"], [1, "row"], [1, "col-12"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductComponent_div_1_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_2_listener() { return ctx.scrollTo("order-product"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProductComponent_div_8_Template, 6, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProductComponent_ng_template_9_Template, 43, 10, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.renderHtml)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _order_product_order_product_component__WEBPACK_IMPORTED_MODULE_6__["OrderProductComponent"]], styles: [".parallax {\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n@media only screen and (max-device-width: 1600px) {\n  .parallax {\n    background-attachment: scroll;\n    min-height: 600px;\n  }\n}\n\n.parallax4 {\n  min-height: 650px;\n  background-image: url(\"/assets/svg/undraw_remember.svg\");\n  image-rendering: optimizeSpeed;\n}\n\n.position-down-pc {\n  position: absolute;\n  left: 10%;\n  top: 10%;\n}\n\n.position-down-pc-sub {\n  position: absolute;\n  left: 10%;\n  bottom: 50%;\n}\n\n.position-down-mobile {\n  position: absolute;\n  left: 8%;\n  top: 0.2rem;\n}\n\n.position-down-mobile-sub {\n  position: absolute;\n  width: 70%;\n  overflow-wrap: break-word;\n  left: 9%;\n  top: 0.8rem;\n}\n\n.tile {\n  height: 40rem;\n}\n\n.line-height-spaced {\n  line-height: 2.5rem;\n}\n\n.scrolldown-animated {\n  animation: animate 1.5s linear infinite;\n}\n\n@keyframes animate {\n  0% {\n    top: -10px;\n    left: -10px;\n    opacity: 0.2;\n  }\n  50% {\n    top: 0px;\n    left: 0px;\n    opacity: 1;\n  }\n  100% {\n    top: 10px;\n    left: 10px;\n    opacity: 0.2;\n  }\n}\n\n.shadow {\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);\n}\n\n.position-bottom-center {\n  position: absolute;\n  bottom: 0.5rem;\n  left: 40%;\n}\n\n@media screen and (min-device-width: 768px) {\n  .position-bottom-center {\n    position: absolute;\n    bottom: 0.5rem;\n    left: 48.5%;\n  }\n}\n\n.floating-add-to-cart {\n  position: fixed;\n  bottom: 2em;\n  right: 1.5em;\n  height: 3rem;\n  width: auto;\n  border-radius: 25px;\n  background-color: #ffcc00;\n  border-color: #ffcc00;\n  color: #333;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.landing-background-image {\n  background-image: url('mavic-air-2-landing-background.jpg');\n  background-repeat: no-repeat;\n  background-clip: content-box;\n  background-attachment: fixed;\n  background-size: cover;\n  image-rendering: optimizeSpeed;\n}\n\n.background-camels {\n  background-image: url('deve-pustinja.jpg');\n  background-repeat: no-repeat;\n  background-clip: content-box;\n  background-attachment: fixed;\n  background-size: cover;\n  image-rendering: optimizeSpeed;\n}\n\n.background-camels-zoom {\n  background-image: url('deve-pustinja-2.jpg');\n  background-repeat: no-repeat;\n  background-clip: content-box;\n  background-attachment: fixed;\n  background-size: cover;\n  image-rendering: optimizeSpeed;\n}\n\n@media only screen and (max-device-width: 1200px) {\n  .background-camels {\n    background-image: url('deve-pustinja.jpg');\n    background-repeat: no-repeat;\n    background-attachment: local;\n    background-size: contain;\n    image-rendering: optimizeSpeed;\n  }\n\n  .background-camels-zoom {\n    background-image: url('deve-pustinja-2.jpg');\n    background-repeat: no-repeat;\n    background-attachment: local;\n    background-size: contain;\n    image-rendering: optimizeSpeed;\n  }\n}\n\n.mavic-air-2-naslovna-podazina {\n  background-image: url('pexels-jeremy-bishop-2524874.jpg');\n  image-rendering: optimizeSpeed;\n  object-fit: fill;\n}\n\n.mavic-air-2-tile {\n  height: 40vh;\n  background-color: rgba(255, 255, 255, 0.15);\n  border-color: white;\n}\n\n.prakticnost-cover-mobile {\n  background: url('prakticnost.jpg') no-repeat center center/cover;\n  width: 100%;\n  height: 35vh;\n}\n\n.osmo-landing-cover {\n  background: url('osmo-home.jpg') no-repeat 55% center/cover;\n  width: 100%;\n  height: 65vh;\n}\n\n.osmo-lending-heading-2-bottom-mobile {\n  text-align: left;\n  position: relative;\n  width: 100%;\n  height: 40px;\n  top: 45%;\n  left: 6%;\n}\n\n.osmo-lending-heading-2-bottom-pc {\n  text-align: center;\n  position: relative;\n  width: 100%;\n  height: 40px;\n  top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFDQTtFQUNFO0lBQ0UsNkJBQUE7SUFDQSxpQkFBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLHdEQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFDSjtFQUVBO0lBQ0ksUUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VBQUo7RUFHQTtJQUNJLFNBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQURKO0FBQ0Y7O0FBSUE7RUFDRSx5Q0FBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUZGOztBQUtBO0VBQ0U7SUFDSSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0VBRko7QUFDRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUhGOztBQU9BO0VBQ0UsMkRBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBSkY7O0FBT0E7RUFDRSwwQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFKRjs7QUFPQTtFQUNFLDRDQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUpGOztBQU9BO0VBQ0U7SUFDSSwwQ0FBQTtJQUNBLDRCQUFBO0lBQ0EsNEJBQUE7SUFDQSx3QkFBQTtJQUNBLDhCQUFBO0VBSko7O0VBT0E7SUFDSSw0Q0FBQTtJQUNBLDRCQUFBO0lBQ0EsNEJBQUE7SUFDQSx3QkFBQTtJQUNBLDhCQUFBO0VBSko7QUFDRjs7QUFPQTtFQUNFLHlEQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUxGOztBQU9BO0VBQ0UsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLGdFQUFBO0VBQytCLFdBQUE7RUFBYSxZQUFBO0FBSDlDOztBQUtBO0VBQ0UsMkRBQUE7RUFDNEIsV0FBQTtFQUFhLFlBQUE7QUFEM0M7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQUFKOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmFsbGF4IHtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxNjAwcHgpIHtcclxuICAucGFyYWxsYXgge1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XHJcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5wYXJhbGxheDQge1xyXG4gICAgbWluLWhlaWdodDogNjUwcHg7IFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3N2Zy91bmRyYXdfcmVtZW1iZXIuc3ZnJyk7XHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XHJcbn1cclxuXHJcbi5wb3NpdGlvbi1kb3duLXBjIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTAlO1xyXG4gIHRvcDogMTAlO1xyXG59XHJcblxyXG4ucG9zaXRpb24tZG93bi1wYy1zdWIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxMCU7XHJcbiAgYm90dG9tOiA1MCU7XHJcbn1cclxuXHJcbi5wb3NpdGlvbi1kb3duLW1vYmlsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDglO1xyXG4gIHRvcDogMC4ycmVtO1xyXG59XHJcblxyXG4ucG9zaXRpb24tZG93bi1tb2JpbGUtc3ViIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIGxlZnQ6IDklO1xyXG4gIHRvcDogMC44cmVtO1xyXG59XHJcblxyXG4udGlsZSB7XHJcbiAgaGVpZ2h0OiA0MHJlbTtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0LXNwYWNlZCB7XHJcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcclxufVxyXG5cclxuLnNjcm9sbGRvd24tYW5pbWF0ZWQge1xyXG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAxLjVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlIHtcclxuICAwJSB7XHJcbiAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAgIHRvcDogMTBweDtcclxuICAgICAgbGVmdDogMTBweDtcclxuICAgICAgb3BhY2l0eTogMC4yO1xyXG4gIH1cclxufVxyXG5cclxuLnNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxufVxyXG5cclxuLnBvc2l0aW9uLWJvdHRvbS1jZW50ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDAuNXJlbTtcclxuICBsZWZ0OiA0MCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkge1xyXG4gIC5wb3NpdGlvbi1ib3R0b20tY2VudGVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDAuNXJlbTtcclxuICAgICAgbGVmdDogNDguNSU7XHJcbiAgfVxyXG59XHJcblxyXG4uZmxvYXRpbmctYWRkLXRvLWNhcnQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDJlbTtcclxuICByaWdodDogMS41ZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2MwMDtcclxuICBib3JkZXItY29sb3I6ICNmZmNjMDA7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcblxyXG4ubGFuZGluZy1iYWNrZ3JvdW5kLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvbWF2aWMtYWlyL21hdmljLWFpci0yLWxhbmRpbmctYmFja2dyb3VuZC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBpbWFnZS1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLWNhbWVscyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL21hdmljLWFpci9kZXZlLXB1c3RpbmphLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGltYWdlLXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcclxufVxyXG5cclxuLmJhY2tncm91bmQtY2FtZWxzLXpvb20ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9tYXZpYy1haXIvZGV2ZS1wdXN0aW5qYS0yLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGltYWdlLXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmJhY2tncm91bmQtY2FtZWxzIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL21hdmljLWFpci9kZXZlLXB1c3RpbmphLmpwZ1wiKTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBsb2NhbDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICBpbWFnZS1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XHJcbiAgfVxyXG5cclxuICAuYmFja2dyb3VuZC1jYW1lbHMtem9vbSB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9tYXZpYy1haXIvZGV2ZS1wdXN0aW5qYS0yLmpwZ1wiKTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBsb2NhbDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICBpbWFnZS1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF2aWMtYWlyLTItbmFzbG92bmEtcG9kYXppbmEge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL21hdmljLWFpci9wZXhlbHMtamVyZW15LWJpc2hvcC0yNTI0ODc0LmpwZycpOyBcclxuICBpbWFnZS1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XHJcbiAgb2JqZWN0LWZpdDogZmlsbDtcclxufVxyXG4ubWF2aWMtYWlyLTItdGlsZSB7XHJcbiAgaGVpZ2h0OiA0MHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7IFxyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wcmFrdGljbm9zdC1jb3Zlci1tb2JpbGUge1xyXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL29zbW8vcHJha3RpY25vc3QuanBnJykgXHJcbiAgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDM1dmg7XHJcbn1cclxuLm9zbW8tbGFuZGluZy1jb3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvb3Ntby9vc21vLWhvbWUuanBnJykgXHJcbiAgbm8tcmVwZWF0IDU1JSBjZW50ZXIvY292ZXI7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDY1dmg7XHJcbn1cclxuLm9zbW8tbGVuZGluZy1oZWFkaW5nLTItYm90dG9tLW1vYmlsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB0b3A6IDQ1JTtcclxuICAgIGxlZnQ6IDYlO1xyXG59XHJcblxyXG4ub3Ntby1sZW5kaW5nLWhlYWRpbmctMi1ib3R0b20tcGMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHRvcDogNTAlO1xyXG59XHJcbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_sevices_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }]; }, null); })();


/***/ }),

/***/ "hIcF":
/*!************************************!*\
  !*** ./src/app/models/cartItem.ts ***!
  \************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
class CartItem {
    constructor(Id, Naziv, Kolicina, Cijena) {
        this.id = Id;
        this.naziv = Naziv;
        this.kolicina = Kolicina;
        this.cijena = Cijena;
    }
}


/***/ }),

/***/ "iBMz":
/*!**************************************************************!*\
  !*** ./src/app/components/public/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/product */ "yHTb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_sevices_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sevices/products.service */ "IsAJ");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function NavbarComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_li_27_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.showCartModal(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Ko\u0161arica (", ctx_r0.numOfCartItems, ")");
} }
function NavbarComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Koli\u010Dina: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Cijena: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/product/" + item_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.naziv);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r4.kolicina, " kom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r4.cijena, " kn");
} }
class NavbarComponent {
    constructor(router, productService, toastr) {
        this.router = router;
        this.productService = productService;
        this.toastr = toastr;
        this.showCartDetails = false;
        this.isCartEmpty = true;
        this.isCartShow = false;
        this.numOfCartItems = 0;
        this.cartItemsArray = new Array();
    }
    ngOnInit() {
        this.totalPriceCart = 0;
        this.checkCart();
        if (this.products == null || this.products == undefined) {
            this.products = new Array();
            this.productService.getActive().subscribe((result) => {
                result.forEach((product) => {
                    var tempProduct = new _models_product__WEBPACK_IMPORTED_MODULE_0__["Product"]();
                    Object.assign(tempProduct, result);
                    this.products.push(tempProduct);
                });
            });
        }
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            this.checkCart();
        });
    }
    checkCart() {
        this.numOfCartItems = 0;
        var cart = localStorage.getItem('cart');
        if (cart != null || cart != undefined) {
            this.cartItemsArray = JSON.parse(cart);
            this.cartItemsArray.forEach((item) => {
                this.numOfCartItems =
                    Number.parseInt(this.numOfCartItems.toString()) +
                        Number.parseInt(item.kolicina.toString());
            });
        }
        if (this.numOfCartItems != 0) {
            this.isCartEmpty = false;
            document.getElementById('btnCheckoutNaplata').disabled = false;
        }
        else {
            this.isCartEmpty = true;
            document.getElementById('btnCheckoutNaplata').disabled = true;
        }
    }
    onPayForCartItems() {
        this.showCartModal(false);
        window.location.replace("/checkout");
    }
    getTotalPrice() {
        var price = 0;
        this.cartItemsArray.forEach((element) => {
            price += element.kolicina * element.cijena;
        });
        price += 30;
        return price;
    }
    onEmptyCartItems() {
        localStorage.clear();
        this.showCartModal(false);
        this.isCartShow = false;
        this.showCartDetails = false;
        setTimeout(() => {
            this.toastr.info('Košarica je uspješno ispražnjena', 'Košarica');
        }, 500);
        this.numOfCartItems = 0;
        this.isCartEmpty = true;
        window.location.replace(this.router.url.toString());
    }
    showCartModal(state) {
        if (state) {
            this.checkCart();
            document.getElementById('cartModal').classList.remove('hide');
            document.getElementById('cartModal').classList.add('show');
        }
        else {
            document.getElementById('cartModal').classList.remove('show');
            document.getElementById('cartModal').classList.add('hide');
            document.getElementsByClassName('modal-backdrop')[0].remove();
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sevices_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["navbar"]], decls: 66, vars: 12, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "orange", "m-0", 2, "top", "0", "left", "0", "right", "0", "position", "fixed", "z-index", "1000", "max-width", "100%"], ["href", "/home", 1, "navbar-brand", "logo"], ["src", "assets/logo.png", "width", "100%", "height", "100%", "alt", "Cascadus shop logo", 1, "d-inline-block", "align-top", "logo-image"], ["type", "button", "data-toggle", "collapse", "data-target", "#navBarHamburger", "aria-controls", "navBarHamburger", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navBarHamburger", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "p-0", "mt-2", "mt-lg-0", "text-nowrap"], [1, "nav-item"], ["data-toggle", "collapse", "data-target", "#navBarHamburger", 1, "nav-link", 3, "routerLink"], [1, "nav-button"], ["class", "nav-item ", "data-toggle", "collapse", "data-target", "#navBarHamburger", 4, "ngIf"], ["id", "cartModal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "shoppingCart", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLongTitle", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true", 1, "red-text"], [1, "modal-body"], [1, "overflow-auto"], ["class", "p-1", 4, "ngFor", "ngForOf"], [1, "card", "p-2", "text-center"], [1, "d-flex", "justify-content-between"], [1, "align-self-end"], [1, "modal-footer", "d-flex", "justify-content-center", "m-0", "p-0"], [1, "row"], [1, "col-12", "text-center"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-sm", "btn-outline-danger", "m-auto", "p-auto", "mb-2", "col-12"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-warning", "m-auto", "p-auto", "mb-2", "col-12", 3, "click"], ["type", "button", "id", "btnCheckoutNaplata", 1, "btn", "btn-sm", "btn-outline-elegant", "m-auto", "p-auto", "mb-2", "col-12", 3, "click"], ["data-toggle", "collapse", "data-target", "#navBarHamburger", 1, "nav-item"], ["data-toggle", "modal", "data-target", "#cartModal", 1, "nav-link", "btn", "btn-sm", "p-1", "roudend", "nav-cart", 3, "click"], [1, "material-icons", "dark-text", "pull-right"], [1, "p-1"], [3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Po\u010Detna");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Proizvodi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "O nama");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, NavbarComponent_li_27_Template, 6, 1, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Va\u0161a ko\u0161arica sadr\u017Ei:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, NavbarComponent_div_41_Template, 16, 4, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Slanje paketa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Koli\u010Dina: 1 kom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Cijena: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "30 kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Zatvori");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_62_listener() { return ctx.onEmptyCartItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Isprazni ko\u0161aricu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_64_listener() { return ctx.onPayForCartItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Naplata");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/about");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isCartEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Broj stvari u ko\u0161arici: ", ctx.numOfCartItems, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cartItemsArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Ukupno: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](59, 9, ctx.getTotalPrice(), "1.2-2"), " kn");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], styles: [".nav-button[_ngcontent-%COMP%] {\n  color: #333;\n  text-transform: uppercase;\n  text-decoration: none;\n  letter-spacing: 0.1em;\n  display: inline-block;\n  padding: 15px 20px;\n  position: relative;\n}\n\n.nav-button[_ngcontent-%COMP%]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  height: 2px;\n  left: 50%;\n  position: absolute;\n  background: #333;\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\n\n.nav-button[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n}\n\n.nav-link[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n}\n\n.logo-image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFFQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFRTtFQUNFLDhDQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaURBQUE7RUFDQSxRQUFBO0FBQ0o7O0FBQ0U7RUFDRSxXQUFBO0VBQ0EsT0FBQTtBQUVKOztBQUFFO0VBQ0ksZ0JBQUE7QUFHTjs7QUFERTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBSUo7O0FBRkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUtKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAubmF2LWJ1dHRvbjphZnRlciB7ICAgIFxyXG4gICAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbiAgLm5hdi1idXR0b246aG92ZXI6YWZ0ZXIgeyBcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGxlZnQ6IDA7IFxyXG4gIH1cclxuICAubmF2LWxpbmsgaDR7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5sb2dve1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlOyBcclxuICB9XHJcbiAgLmxvZ28taW1hZ2V7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87IFxyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_sevices_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "ii0D":
/*!**********************************************************************!*\
  !*** ./src/app/components/public/order-fail/order-fail.component.ts ***!
  \**********************************************************************/
/*! exports provided: OrderFailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFailComponent", function() { return OrderFailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




class OrderFailComponent {
    constructor(route, titleService) {
        this.route = route;
        this.titleService = titleService;
        this.titleService.setTitle("Cascadus - Neuspješno plaćanje");
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            var name = params.get('buyer');
            name = name.charAt(0).toUpperCase() + name.slice(1);
            document.getElementById('buyerName').innerText = name;
            setTimeout(() => {
                window.location.href = 'home/';
            }, 10000);
        });
    }
}
OrderFailComponent.ɵfac = function OrderFailComponent_Factory(t) { return new (t || OrderFailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
OrderFailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderFailComponent, selectors: [["app-order-fail"]], decls: 18, vars: 0, consts: [["id", "order-success"], [1, "row", "orange", "black-text", "m-0", "p-0"], [1, "col-12", "pt-5"], [1, "d-flex", "justify-content-center", "py-5", "px-2", 2, "min-height", "100vh", "height", "auto"], [1, "text-center", "align-self-center"], ["id", "buyerName"]], template: function OrderFailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u017Dao nam je");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ali iz nekog razloga tvoja narud\u017Eba nije uspje\u0161no zavr\u0161ena...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Na\u0161i programeri \u0107e provjeriti gdje je bio problem i popraviti ga \u0161to je prije mogu\u0107e!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Molimo te da poku\u0161a\u0161 jo\u0161 jednom izvr\u0161iti svoju narud\u017Ebu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ukoliko se ovaj problem nastavi pojavljivati, molimo te da se javi\u0161 na\u0161oj podr\u0161ci da oni ru\u010Dno naprave tvoju narud\u017Ebu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL29yZGVyLWZhaWwvb3JkZXItZmFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderFailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order-fail',
                templateUrl: './order-fail.component.html',
                styleUrls: ['./order-fail.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }]; }, null); })();


/***/ }),

/***/ "jxtJ":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin/admin-side-bar/admin-side-bar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminSideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSideBarComponent", function() { return AdminSideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AdminSideBarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        localStorage.removeItem("jwt");
        localStorage.removeItem("role");
        this.router.navigate(["home"]);
    }
}
AdminSideBarComponent.ɵfac = function AdminSideBarComponent_Factory(t) { return new (t || AdminSideBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AdminSideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminSideBarComponent, selectors: [["app-admin-side-bar"]], decls: 22, vars: 6, consts: [["id", "wrapper", 1, "d-flex"], ["id", "sidebar-wrapper", 1, "orange", "border-right"], [1, "sidebar-heading"], [1, "list-group", "list-group-flush", "card"], [1, "list-group-item", "list-group-item-action", "orange-text", "bg-dark", 3, "routerLink"], [1, "list-group-item", "list-group-item-action", "orange", "gray-text", 3, "routerLink"], [1, "list-group-item", "list-group-item-action", "orange", 3, "routerLink"], [1, "m-3", "justify-content-center", "text-center", 2, "position", "relative", "top", "47vh", "bottom", "0px", "left", "0px"], ["id", "logoutButton", 1, "btn", "btn-sm", "btn-outline-elegant", 3, "click"], [1, "d-block"]], template: function AdminSideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to Cascadus Admin Panel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Buyers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Discount Coupons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminSideBarComponent_Template_button_click_18_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "version 1.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/admin/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/admin/categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/admin/products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/admin/buyers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/admin/invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/admin/discounts");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#wrapper[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n#sidebar-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  margin-left: -15rem;\n  transition: margin 0.25s ease-out;\n}\n#sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-heading[_ngcontent-%COMP%] {\n  padding: 0.875rem 1.25rem;\n  font-size: 1.2rem;\n}\n#sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n  width: 15rem;\n}\n#page-content-wrapper[_ngcontent-%COMP%] {\n  min-width: 100vw;\n}\n#wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  #sidebar-wrapper[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  #page-content-wrapper[_ngcontent-%COMP%] {\n    min-width: 0;\n    width: 100%;\n  }\n\n  #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\n    margin-left: -15rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1zaWRlLWJhci9hZG1pbi1zaWRlLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBO0FBTUM7RUFDRyxrQkFBQTtBQUFKO0FBR0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBSUEsaUNBQUE7QUFBRjtBQUdBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0FBQUY7QUFHQTtFQUNFLGdCQUFBO0FBQUY7QUFHQTtFQUNFLGNBQUE7QUFBRjtBQUdBO0VBQ0U7SUFDRSxjQUFBO0VBQUY7O0VBR0E7SUFDRSxZQUFBO0lBQ0EsV0FBQTtFQUFGOztFQUdBO0lBQ0UsbUJBQUE7RUFBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1zaWRlLWJhci9hZG1pbi1zaWRlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxyXG4gKiBTdGFydCBCb290c3RyYXAgLSBTaW1wbGUgU2lkZWJhciAoaHR0cHM6Ly9zdGFydGJvb3RzdHJhcC5jb20vdGVtcGxhdGUvc2ltcGxlLXNpZGViYXIpXHJcbiAqIENvcHlyaWdodCAyMDEzLTIwMjAgU3RhcnQgQm9vdHN0cmFwXHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL1N0YXJ0Qm9vdHN0cmFwL3N0YXJ0Ym9vdHN0cmFwLXNpbXBsZS1zaWRlYmFyL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXHJcbiAqL1xyXG5cclxuICN3cmFwcGVyIHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuIH1cclxuXHJcbiNzaWRlYmFyLXdyYXBwZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVyZW07XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4jc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRpbmcge1xyXG4gIHBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbiNzaWRlYmFyLXdyYXBwZXIgLmxpc3QtZ3JvdXAge1xyXG4gIHdpZHRoOiAxNXJlbTtcclxufVxyXG5cclxuI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICBtaW4td2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4jd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVyZW07XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminSideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-side-bar',
                templateUrl: './admin-side-bar.component.html',
                styleUrls: ['./admin-side-bar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "kK2o":
/*!*********************************!*\
  !*** ./src/app/models/login.ts ***!
  \*********************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
class Login {
    /**
     *
     */
    constructor(username, password) {
        this.Username = username;
        this.Password = password;
    }
}


/***/ }),

/***/ "knmp":
/*!****************************************************************************!*\
  !*** ./src/app/components/public/order-product/order-product.component.ts ***!
  \****************************************************************************/
/*! exports provided: OrderProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderProductComponent", function() { return OrderProductComponent; });
/* harmony import */ var src_app_models_discountCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/discountCode */ "HYO+");
/* harmony import */ var _models_buyer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../models/buyer */ "0+sa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_cartItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/cartItem */ "hIcF");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/order */ "Rb4e");
/* harmony import */ var src_app_models_paymentModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/paymentModel */ "/N0k");
/* harmony import */ var src_app_sevices_payment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sevices/payment.service */ "yynU");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_sevices_discounts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/sevices/discounts.service */ "5y8b");
/* harmony import */ var src_app_sevices_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/sevices/cookie.service */ "vLfE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");















function OrderProductComponent_div_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OrderProductComponent_div_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Jedno ili vi\u0161e polja nisu ispravno popunjeni. Molimo Vas da provjerite podatke.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OrderProductComponent_div_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Naru\u010Di odmah");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OrderProductComponent_ng_template_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Slanje...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class OrderProductComponent {
    constructor(fb, paymentService, toastr, router, discountsService, cookieService) {
        this.fb = fb;
        this.paymentService = paymentService;
        this.toastr = toastr;
        this.router = router;
        this.discountsService = discountsService;
        this.cookieService = cookieService;
        this.isFormCorrect = true;
        this.numOfCartItems = 0;
        this.cartEmpty = true;
        this.cartItemsArray = new Array();
        this.discountCode = null;
        this.discountCodeLoading = false;
        this.discountCodeInputShown = false;
        this.sending = false;
    }
    ngOnInit() {
        this.initForms();
        this.checkCart();
        this.totalPrice = 1;
        this.productQuantity = 1;
        this.shippingCost = 30;
        this.updateTotalPrice();
    }
    initForms() {
        this.buyerForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2),
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8),
            ]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8),
            ]),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
            ]),
            houseNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1),
            ]),
            postCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5),
            ]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2),
            ]),
            paymentMethod: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('OnDelivery', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    }
    checkCart() {
        this.numOfCartItems = 0;
        var cart = localStorage.getItem('cart');
        if (cart != null || cart != undefined) {
            this.cartItemsArray = JSON.parse(cart);
            this.cartItemsArray.forEach((item) => {
                this.numOfCartItems =
                    Number.parseInt(this.numOfCartItems.toString()) +
                        Number.parseInt(item.kolicina.toString());
            });
        }
    }
    resetForms() {
        this.buyerForm.reset();
        this.isFormCorrect = true;
    }
    updateTotalPrice() {
        var priceNoDiscount = Number.parseFloat((this.productQuantity * this.product.cijena).toFixed(2));
        var lblOldPrice = document.getElementById('lblOldPrice');
        if (this.discountCode == null) {
            this.totalPrice = priceNoDiscount + this.shippingCost;
            lblOldPrice.style.display = 'none';
        }
        else {
            var discount = Number.parseInt(this.discountCode['popustUpostocima'].toString()) / 100;
            lblOldPrice.style.display = 'block';
            lblOldPrice.style.color = 'green';
            lblOldPrice.textContent = 'Stara cijena: ' + priceNoDiscount + ' kn';
            this.totalPrice =
                priceNoDiscount - priceNoDiscount * discount + this.shippingCost;
        }
    }
    getTotalPrice() {
        return this.totalPrice;
    }
    btnIncreaseQuantity() {
        if (this.productQuantity <= 98) {
            this.productQuantity++;
            this.OnQuantityChanged();
        }
    }
    btnDecreaseQuantity() {
        if (this.productQuantity >= 2) {
            this.productQuantity--;
            this.OnQuantityChanged();
        }
    }
    OnQuantityChanged() {
        this.updateTotalPrice();
    }
    changeDiscountCodeBlockState() {
        var cbDiscountCodeSwitch = document.getElementById('cbDiscountCodeSwitch');
        var divDiscountCode = document.getElementById('divDiscountCode');
        if (cbDiscountCodeSwitch.checked) {
            divDiscountCode.style.display = 'block';
            this.discountCodeInputShown = true;
        }
        else {
            this.discountCodeInputShown = false;
            divDiscountCode.style.display = 'none';
        }
    }
    checkCouponCode() {
        var code = document.getElementById('txtDiscountCode');
        var lblDiscountStatus = document.getElementById('lblDiscountStatus');
        if (code.value.length >= 3) {
            this.discountCodeLoading = true;
            this.discountsService.checkDiscountCode(code.value).subscribe((result) => {
                if (result != null) {
                    this.discountCode = new src_app_models_discountCode__WEBPACK_IMPORTED_MODULE_0__["DiscountCode"]();
                    Object.assign(this.discountCode, result);
                    lblDiscountStatus.style.color = 'green';
                    lblDiscountStatus.textContent =
                        'Popust kod je valjan! Omogućen vam je popust od: ' +
                            this.discountCode['popustUpostocima'] +
                            '%';
                }
                else {
                    lblDiscountStatus.style.color = 'red';
                    lblDiscountStatus.textContent =
                        'Popust kod je istekao ili je neispravan!';
                    code.value = '';
                    this.discountCode = null;
                }
                this.discountCodeLoading = false;
                this.updateTotalPrice();
            }, (error) => {
                this.toastr.error('Došlo je do greške s provjerom koda. Molimo te da provjeriš kod i da pokušaš ponovo. Ukoliko se problem nastavi pojavljivati, javi se podršci. Hvala!', 'Popust kod - Naručivanje');
                this.discountCodeLoading = false;
                code.value = '';
            });
        }
        else {
            this.discountCode = null;
            lblDiscountStatus.style.color = 'red';
            lblDiscountStatus.textContent = 'Neispravan popust kod!';
            code.value = '';
        }
    }
    OnAddToCart() {
        var cartvalue = localStorage.getItem('cart');
        var cartItemsArray = new Array();
        //ukoliko kosarica nije prazna
        if (cartvalue != null || cartvalue != undefined) {
            cartItemsArray = JSON.parse(cartvalue);
            var exists = false;
            cartItemsArray.forEach((item) => {
                if (item.id == this.product.id) {
                    item.kolicina =
                        Number.parseInt(item.kolicina.toString()) +
                            Number.parseInt(this.productQuantity.toString());
                    exists = true;
                }
            });
            if (exists == false) {
                cartItemsArray.push(new src_app_models_cartItem__WEBPACK_IMPORTED_MODULE_4__["CartItem"](this.product.id, this.product.naziv, this.productQuantity, this.product.cijena));
            }
        }
        else {
            cartItemsArray.push(new src_app_models_cartItem__WEBPACK_IMPORTED_MODULE_4__["CartItem"](this.product.id, this.product.naziv, this.productQuantity, this.product.cijena));
        }
        localStorage.setItem('cart', JSON.stringify(cartItemsArray));
        this.toastr.success('Proizvod je uspješno dodan u košaricu!', 'Košarica');
        setTimeout(() => {
            window.location.replace(this.router.url.toString());
        }, 1500);
    }
    OnPlaceInstantOrder() {
        this.buyer = this.getBuyerFromForm();
        var message = this.buyerForm.get('message').value;
        var paymentMethod = this.buyerForm.get('paymentMethod').value;
        var cartItems = new Array();
        cartItems.push(new src_app_models_cartItem__WEBPACK_IMPORTED_MODULE_4__["CartItem"](this.product.id, this.product.naziv, this.productQuantity, this.product.cijena));
        localStorage.setItem('cart', JSON.stringify(cartItems));
        this.checkCart();
        if (this.isFormCorrect && cartItems.length >= 1 && this.buyer != null) {
            this.orderCartItems(cartItems, this.buyer, message, paymentMethod);
        }
    }
    getBuyerFromForm() {
        var data = new _models_buyer__WEBPACK_IMPORTED_MODULE_1__["Buyer"]();
        data.ime = this.buyerForm.get('name').value;
        data.prezime = this.buyerForm.get('surname').value;
        data.email = this.buyerForm.get('email').value;
        data.kontakt = this.buyerForm.get('phone').value;
        data.ulica = this.buyerForm.get('street').value;
        data.kucniBroj = this.buyerForm.get('houseNumber').value;
        data.postanskiBroj = this.buyerForm.get('postCode').value;
        data.grad = this.buyerForm.get('city').value;
        if (data.ime.length <= 2 ||
            data.prezime.length <= 2 ||
            data.email.length <= 8 ||
            data.kontakt.length <= 8 ||
            data.ulica.length <= 3 ||
            data.kucniBroj.length <= 1 ||
            data.postanskiBroj.length <= 5 ||
            data.grad.length <= 2) {
            this.isFormCorrect = false;
            return null;
        }
        else {
            this.isFormCorrect = true;
            return data;
        }
    }
    orderCartItems(cartItems, buyer, message, paymentMethod) {
        if (this.numOfCartItems != 0) {
            var paymentModel = new src_app_models_paymentModel__WEBPACK_IMPORTED_MODULE_6__["PaymentModel"](cartItems, paymentMethod);
            var order = new src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["Order"](buyer, message, paymentModel);
            document.getElementById('instantOrderBtn').disabled = true;
            this.sending = true;
            if (this.discountCode != null &&
                this.discountCode != undefined &&
                this.discountCode != null) {
                order.discountCode = this.discountCode.popustKod;
            }
            this.paymentService.pay(order).subscribe((response) => {
                var data = response['body'];
                //status codes: 0 - success, 1 - fail, 2 - pending
                //ondelivery success
                if (data['value']['statusCode'] == 0) {
                    setTimeout(() => {
                        this.toastr.success('Tvoja narudžba je uspješno zaprimljena!', 'Košarica');
                    }, 500);
                    setTimeout(() => {
                        this.router.navigate([
                            'order-success/' + data['value']['buyerId'].toString(),
                        ]);
                    }, 1500);
                }
                //corvus pay
                else if (data['value']['statusCode'] == 2) {
                    var paymentUrl = data['value']['paymentUrl'].toString();
                    var parameters = data['value']['parameters'];
                    var token = response.headers.get('X-XSRF-TOKEN');
                    localStorage.setItem('X-XSRF-TOKEN', token);
                    setTimeout(() => {
                        this.toastr.success('Sve što je ostalo za napraviti je to da platiš svoju narudžbu preko Corvus Pay platnog sistema. ' +
                            'Čim završiš plaćanje, odmah se bacamo na posao i pripremamo tvoju narudžbu za kurirsku službu!', 'Košarica');
                    }, 500);
                    setTimeout(() => {
                        //redirecting client to CorvusPay payment gateway
                        const mapForm = document.createElement('form');
                        mapForm.target = '_self';
                        mapForm.method = 'POST';
                        mapForm.action = paymentUrl;
                        mapForm.id = 'corvusPayForm';
                        mapForm.name = 'corvusPayForm';
                        mapForm.style.display = 'none';
                        //adding xsrf token
                        const xsrfElement = document.createElement('input');
                        xsrfElement.type = 'hidden';
                        xsrfElement.name = '_csrf';
                        xsrfElement.setAttribute('value', token);
                        mapForm.append(xsrfElement);
                        //adding hidden form inputs
                        for (let i = 0; i < parameters.length; i++) {
                            const param = parameters[i];
                            const mapInput = document.createElement('input');
                            mapInput.type = 'hidden';
                            mapInput.name = param['Key'].toString();
                            mapInput.setAttribute('value', param['Value'].toString());
                            mapForm.appendChild(mapInput);
                        }
                        //adding, submitting and removing form
                        document.body.appendChild(mapForm);
                        console.log(mapForm);
                        mapForm.submit();
                        mapForm.remove();
                    }, 1500);
                }
                //fail
                else {
                    setTimeout(() => {
                        this.toastr.info('Nažalost tvoja narudžba nije prošla. Molimo te da provjeriš sve podatke, količine proizvoda, te da pokušaš ponovo naručiti stvari iz košarice.', 'Košarica');
                    }, 500);
                    setTimeout(() => {
                        this.router.navigate([
                            'order-fail/' + data['value']['buyerId'].toString(),
                        ]);
                    }, 1500);
                }
                document.getElementById('instantOrderBtn').disabled = false;
                this.sending = false;
            }),
                (error) => {
                    //console.log(error);
                    document.getElementById('instantOrderBtn').disabled = false;
                    this.sending = false;
                    setTimeout(() => {
                        this.toastr.error('Ispričavamo se na neugodnosti, no izgleda da je došlo do greške. Molimo te da pokušaš ponovo. Ukoliko se problem nastavi pojavljivati, kontaktiraj našu podršku!', 'Ups, Greška!');
                    }, 1000);
                    window.location.reload();
                };
        }
        else if (this.numOfCartItems == 0) {
            this.toastr.show('Ups! U ovoj košarici ne postoje proizvodi. Prvo dodajte proizvod/e u košaricu, a zatim pokušajte ponovo.', 'Košarica');
        }
        else {
            this.toastr.show('Ispričavamo se na neugodnosti, no izgleda da je došlo do greške. Molimo te da pokušaš ponovo. Ukoliko se problem nastavi pojavljivati, kontaktiraj našu podršku!', 'Ups, Greška!');
        }
    }
}
OrderProductComponent.ɵfac = function OrderProductComponent_Factory(t) { return new (t || OrderProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sevices_payment_service__WEBPACK_IMPORTED_MODULE_7__["PaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sevices_discounts_service__WEBPACK_IMPORTED_MODULE_10__["DiscountsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sevices_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"])); };
OrderProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OrderProductComponent, selectors: [["order-product"]], inputs: { product: "product" }, decls: 144, vars: 19, consts: [["id", "order-product", 1, "orange", "py-5"], [1, "row"], [1, "col-12", "text-center"], [1, "pb-3"], ["id", "orderForm", 3, "formGroup"], [1, "row", "text-center", "px-5"], [1, "col-xs-12", "col-md-6"], [1, ""], ["id", "account-circle-image", 1, "input-group-text", "border-dark", "bg-dark", "orange-text"], [1, "material-icons", "orange-text", "pull-left", "mr-1"], [1, "input-group", "mb-3"], ["required", "", "type", "text", "minlength", "2", "maxlength", "50", "placeholder", "Josip", "name", "name", "formControlName", "name", "id", "name", "aria-describedby", "name", 1, "form-control", "d-block"], ["required", "", "type", "text", "minlength", "2", "maxlength", "50", "placeholder", "Horvat", "name", "surname", "formControlName", "surname", "id", "surname", "aria-describedby", "surname", 1, "form-control", "d-block"], ["id", "email", 1, "input-group-text", "border-dark", "bg-dark", "orange-text"], ["required", "", "type", "email", "minlength", "6", "maxlength", "50", "placeholder", "myEmail@mail.com", "name", "email", "formControlName", "email", "id", "email", "aria-describedby", "email", 1, "form-control"], ["id", "phone-number", 1, "input-group-text", "border-dark", "bg-dark", "orange-text"], ["required", "", "type", "tel", "minlength", "8", "maxlength", "12", "placeholder", "0987654321", "name", "phone", "formControlName", "phone", "id", "phone", "aria-describedby", "phone-number", 1, "form-control"], [1, "card", "p-auto", "mb-3"], ["id", "address", 1, "input-group-text", "border-dark", "bg-dark", "orange-text"], [1, "input-group"], ["required", "", "type", "text", "minlength", "4", "maxlength", "50", "placeholder", "Zagreba\u010Dka cesta", "name", "street", "formControlName", "street", "id", "street", "aria-describedby", "address", 1, "form-control"], ["required", "", "type", "text", "minlength", "1", "maxlength", "5", "placeholder", "12b", "name", "houseNumber", "formControlName", "houseNumber", "id", "houseNumber", "aria-describedby", "address", 1, "form-control"], ["id", "post-code", 1, "input-group-text", "border-dark", "bg-dark", "orange-text"], ["required", "", "type", "number", "min", "10000", "max", "53296", "placeholder", "10000", "name", "postCode", "formControlName", "postCode", "id", "postCode", "aria-describedby", "post-code", 1, "form-control"], ["id", "city", 1, "input-group-text", "border-dark", "bg-dark", "orange-text"], ["required", "", "type", "text", "minlength", "3", "maxlength", "50", "placeholder", "Zagreb", "name", "city", "formControlName", "city", "id", "city", "aria-describedby", "city", 1, "form-control"], [1, "card", "p-auto", "pb-2", "mb-3"], ["id", "nacinPlacanja", 1, "input-group-text", "border-dark", "bg-dark", "orange-text"], [1, "form-check", "d-inline"], ["id", "paymentMethodDelivery", "checked", "", "name", "paymentMethod", "type", "radio", "value", "OnDelivery", "formControlName", "paymentMethod", 1, "form-check-input", "checked"], ["for", "paymentMethodDelivery", 1, "form-check-label", "lead"], ["id", "paymentMethodNow", "name", "paymentMethod", "type", "radio", "value", "CorvusPay", "formControlName", "paymentMethod", 1, "form-check-input"], ["for", "paymentMethodNow", 1, "form-check-label", "lead"], [1, "card", "p-auto"], [1, "input-group-text", "border-dark", "bg-dark", "orange-text"], [1, "material-icons", "orange-text", "mr-1", "pull-left"], ["minlength", "0", "formControlName", "message", "maxlength", "250", "aria-label", "textarea", "placeholder", "Ovdje mo\u017Eete ostaviti poruku za prodava\u010Da...", "aria-describedby", "message-to-seller", 1, "form-control"], [1, "card"], [1, "card-body"], [1, "my-auto", "pt-2"], [1, "card-footer"], ["id", "pricePerPiece"], [1, "d-inline"], ["role", "group", 1, "btn-group", "my-auto"], ["type", "button", "id", "btnDecreaseQuantity", 1, "btn", "btn-sm", "btn-elegant", "orange-text", 3, "click"], [1, "material-icons"], ["type", "number", "min", "1", "max", "100", "name", "quantity", "id", "quantity", 1, "btn", "btn-sm", "bg-dark", "disabled"], [1, "orange-text"], ["type", "button", "id", "btnIncreaseQuantity", 1, "btn", "btn-sm", "btn-elegant", "orange-text", 3, "click"], [1, "idShippingCost"], [1, "col-md-6", "col-xs-12"], [1, "d-inline", "mr-3"], [1, "switch"], ["type", "checkbox", "id", "cbDiscountCodeSwitch", 3, "change"], [1, "slider", "round"], ["id", "divDiscountCode", 2, "display", "none"], ["type", "text", "id", "txtDiscountCode", "aria-label", "Popust kod", 1, "col-md-6", "col-xs-12", "mx-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-elegant", "col-md-6", "col-xs-12", "mx-2", 3, "click"], [1, "col-12"], ["class", "loading-overlay-for-this-div", "style", "z-index: 1 !important;", 4, "ngIf"], ["id", "lblOldPrice"], ["id", "lblDiscountStatus"], ["id", "cartTotal"], ["class", "alert alert-danger m-1 p-1", 4, "ngIf"], [1, "col-12", "mx-auto"], [1, "btn-group-lg"], ["type", "button", "id", "instantOrderBtn", 1, "btn", "btn-lg", "btn-elegant", 2, "width", "50%", 3, "click"], [4, "ngIf", "ngIfElse"], ["isSending", ""], ["type", "button", 1, "btn", "btn-lg", "btn-outline-elegant", 3, "click"], [1, "material-icons", "dark-text", "pull-left"], [1, "dark-text"], [1, "loading-overlay-for-this-div", 2, "z-index", "1 !important"], ["aria-hidden", "false", "role", "status", 1, "d-flex", "justify-content-center"], ["alt", "cascadus pinguin with rocket - loading", "src", "../../../../assets/pinguin-rocket.png", "width", "75px", "height", "75px", 1, "spinner-pinguin", "m-0", "p-0", "align-self-center"], [1, "alert", "alert-danger", "m-1", "p-1"], [1, "red-text"], [1, "material-icons", "orange-text", "pull-left"], [1, "fa", "fa-spinner", "fa-spin"]], template: function OrderProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Va\u0161u narud\u017Ebu mo\u017Eete izvr\u0161iti ve\u0107 ovdje:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Ime i prezime:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Kontakt broj:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Adresa:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "money");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Po\u0161tanski broj:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "account_balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Grad:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "local_shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Na\u010Din pla\u0107anja:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " Pla\u0107anje pouze\u0107em ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " Plati internet bankarstvom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "gesture");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Poruka prodava\u010Du:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "textarea", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "h4", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Naru\u010Dujete:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "h4", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Cijena po komadu: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "b", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](85, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Koli\u010Dina: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderProductComponent_Template_button_click_91_listener() { return ctx.btnDecreaseQuantity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderProductComponent_Template_button_click_97_listener() { return ctx.btnIncreaseQuantity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "kom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Cijena usluge slanja paketa: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "b", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](106, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "Popust kod:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function OrderProductComponent_Template_input_change_114_listener() { return ctx.changeDiscountCodeBlockState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderProductComponent_Template_button_click_120_listener() { return ctx.checkCouponCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Provjeri");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](123, OrderProductComponent_div_123_Template, 3, 0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "Ukupno: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "b", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](130, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "kn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](132, OrderProductComponent_div_132_Template, 3, 0, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderProductComponent_Template_button_click_135_listener() { return ctx.OnPlaceInstantOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](136, OrderProductComponent_div_136_Template, 5, 0, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](137, OrderProductComponent_ng_template_137_Template, 5, 0, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "button", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderProductComponent_Template_button_click_139_listener() { return ctx.OnAddToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "add_shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "Dodaj u ko\u0161aricu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.buyerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.naziv);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](85, 10, ctx.product.cijena, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.productQuantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](106, 13, ctx.shippingCost, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.discountCodeLoading && ctx.discountCodeInputShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](130, 16, ctx.totalPrice, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isFormCorrect);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.sending)("ngIfElse", _r3);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"]], styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border-left: 5px solid #a94442;\n  \n}\n.ng-valid[_ngcontent-%COMP%] {\n  border-left: 5px solid green;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvb3JkZXItcHJvZHVjdC9vcmRlci1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLGdDQUFBO0FBQ0E7O0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FBQUY7QUFHQSxZQUFBO0FBQ0E7RUFDRSwwQkFBQTtBQUFGO0FBR0E7RUFDRSw4QkFBQTtFQUFnQyxRQUFBO0FBQ2xDO0FBQ0E7RUFDRSw0QkFBQTtFQUE4QixRQUFBO0FBR2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvb3JkZXItcHJvZHVjdC9vcmRlci1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIEZpcmVmb3ggKi9cclxuaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxufVxyXG5cclxuLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cclxufVxyXG4ubmctdmFsaWQge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JlZW47IC8qIHJlZCAqL1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](OrderProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'order-product',
                templateUrl: './order-product.component.html',
                styleUrls: ['./order-product.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: src_app_sevices_payment_service__WEBPACK_IMPORTED_MODULE_7__["PaymentService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: src_app_sevices_discounts_service__WEBPACK_IMPORTED_MODULE_10__["DiscountsService"] }, { type: src_app_sevices_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();


/***/ }),

/***/ "lnid":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin/admin-homepage/admin-homepage.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomepageComponent", function() { return AdminHomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AdminHomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminHomepageComponent.ɵfac = function AdminHomepageComponent_Factory(t) { return new (t || AdminHomepageComponent)(); };
AdminHomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminHomepageComponent, selectors: [["app-admin-homepage"]], decls: 1, vars: 0, template: function AdminHomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "asasasasas");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4taG9tZXBhZ2UvYWRtaW4taG9tZXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminHomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-homepage',
                templateUrl: './admin-homepage.component.html',
                styleUrls: ['./admin-homepage.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "m82/":
/*!***********************************************************************!*\
  !*** ./src/app/pages/public/public-layout/public-layout.component.ts ***!
  \***********************************************************************/
/*! exports provided: PublicLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicLayoutComponent", function() { return PublicLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_public_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/public/navbar/navbar.component */ "iBMz");
/* harmony import */ var _components_public_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/public/footer/footer.component */ "BXCQ");






class PublicLayoutComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
PublicLayoutComponent.ɵfac = function PublicLayoutComponent_Factory(t) { return new (t || PublicLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PublicLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicLayoutComponent, selectors: [["app-public-layout"]], decls: 3, vars: 0, consts: [[1, ""], [1, "mt-5", "m-0", "p-0"]], template: function PublicLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "footer", 0);
    } }, directives: [_components_public_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_public_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9wdWJsaWMtbGF5b3V0L3B1YmxpYy1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-public-layout',
                templateUrl: './public-layout.component.html',
                styleUrls: ['./public-layout.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "mbCB":
/*!********************************************************!*\
  !*** ./src/app/components/auth/auth/auth.component.ts ***!
  \********************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/login */ "kK2o");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_sevices_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sevices/auth.service */ "YcCY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AuthComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Neispravno korisni\u010Dko ime ili lozinka");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AuthComponent {
    constructor(router, auth, fb) {
        this.router = router;
        this.auth = auth;
        this.fb = fb;
    }
    ngOnInit() {
        this.initForm();
        this.invalidLogin = false;
        this.invalidRegistration = false;
    }
    initForm() {
        this.accountForm = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            repeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('')
        });
    }
    submit() {
        this.login();
    }
    login() {
        let username = this.accountForm.get("username").value;
        let password = this.accountForm.get("password").value;
        const user = new src_app_models_login__WEBPACK_IMPORTED_MODULE_2__["Login"](username, password);
        this.auth.login(user)
            .subscribe(result => {
            const token = result.token;
            localStorage.setItem("jwt", token);
            this.invalidLogin = false;
            const role = result.role;
            localStorage.setItem("role", role);
            if (role == "Admin") {
                window.location.replace("admin");
            }
            else {
                this.router.navigate(["home"]);
            }
        }, error => {
            this.errorMessage = JSON.stringify(error);
            this.invalidLogin = true;
            this.accountForm.reset();
        });
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sevices_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 11, vars: 2, consts: [[1, "flex-wrap", "mt-5", "py-5", "bg-dark"], ["id", "accountForm", 1, "form-group", 3, "formGroup", "ngSubmit"], ["class", "alert alert-danger m-auto", 4, "ngIf"], ["type", "radio", "name", "rg", "id", "sign-in", "checked", ""], ["for", "sign-in"], ["id", "username", "formControlName", "username", "value", "mihael", "type", "email", "placeholder", "Korisni\u010Dko ime", 1, "sign-up", "sign-in", "reset"], ["id", "password", "formControlName", "password", "value", "lozinka", "type", "password", "placeholder", "Lozinka", 1, "sign-up", "sign-in"], ["id", "submitBtn"], [1, "alert", "alert-danger", "m-auto"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AuthComponent_Template_form_ngSubmit_2_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AuthComponent_div_3_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Prijava");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.accountForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invalidLogin);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["input[type=radio][_ngcontent-%COMP%] {\n  position: fixed;\n  left: -100px;\n}\n\ninput[_ngcontent-%COMP%]:not([type=radio]) {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: white;\n  display: block;\n  transition: 300ms ease;\n  border-radius: 7px;\n  border: 0;\n  max-height: 0;\n  margin: 0;\n  padding: 0 10px;\n  overflow: hidden;\n  width: 250px;\n  opacity: 0;\n  font-size: 16px;\n  text-align: center;\n  outline: 0;\n}\n\n[id=sign-in][_ngcontent-%COMP%]:checked    ~ input.sign-in[_ngcontent-%COMP%], [id=sign-up][_ngcontent-%COMP%]:checked    ~ input.sign-up[_ngcontent-%COMP%], [id=reset][_ngcontent-%COMP%]:checked    ~ input.reset[_ngcontent-%COMP%] {\n  max-height: 40px;\n  padding: 10px;\n  margin: 10px 0;\n  opacity: 1;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 40px;\n  border-radius: 7px;\n  background-color: orange;\n  font-size: 0;\n}\n\nbutton[_ngcontent-%COMP%]:before {\n  font-size: 16px;\n}\n\n[id=sign-in][_ngcontent-%COMP%]:checked    ~ button[_ngcontent-%COMP%]:before {\n  content: \"Prijava\";\n}\n\n[id=sign-up][_ngcontent-%COMP%]:checked    ~ button[_ngcontent-%COMP%]:before {\n  content: \"Registracija\";\n}\n\n[id=reset][_ngcontent-%COMP%]:checked    ~ button[_ngcontent-%COMP%]:before {\n  content: \"Reset lozinke\";\n}\n\nlabel[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n  font-weight: 700;\n  cursor: pointer;\n  color: orange;\n  transition: 300ms ease;\n  width: calc(100% / 3 - 4px);\n}\n\nlabel[_ngcontent-%COMP%]:after {\n  content: \"\";\n  border: 10px solid transparent;\n  position: absolute;\n  bottom: -10px;\n  left: calc(50% - 10px);\n  transition: inherit;\n}\n\n[id=sign-in][_ngcontent-%COMP%]:checked    ~ [for=sign-in][_ngcontent-%COMP%], [id=sign-up][_ngcontent-%COMP%]:checked    ~ [for=sign-up][_ngcontent-%COMP%], [id=reset][_ngcontent-%COMP%]:checked    ~ [for=reset][_ngcontent-%COMP%] {\n  color: white;\n}\n\n[id=sign-in][_ngcontent-%COMP%]:checked    ~ [for=sign-in][_ngcontent-%COMP%]:after, [id=sign-up][_ngcontent-%COMP%]:checked    ~ [for=sign-up][_ngcontent-%COMP%]:after, [id=reset][_ngcontent-%COMP%]:checked    ~ [for=reset][_ngcontent-%COMP%]:after {\n  border-bottom-color: white;\n}\n\n.flex-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  height: 330px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBTko7O0FBVUE7RUFDSSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7RUFDQSx1QkFaVTtFQWFWLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBUEo7O0FBV0E7OztFQUdJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBUko7O0FBYUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBN0NXO0VBOENYLFlBQUE7QUFWSjs7QUFXSTtFQUFXLGVBQUE7QUFSZjs7QUFZQTtFQUF5QyxrQkFBQTtBQVJ6Qzs7QUFTQTtFQUF5Qyx1QkFBQTtBQUx6Qzs7QUFNQTtFQUF1Qyx3QkFBQTtBQUZ2Qzs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBL0RXO0VBZ0VYLHNCQUFBO0VBQ0EsMkJBQUE7QUFISjs7QUFNSTtFQUNJLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFKUjs7QUFTQTs7O0VBR0ksWUFqRlU7QUEyRWQ7O0FBT0k7OztFQUNJLDBCQW5GTTtBQWdGZDs7QUFVQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVBKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbG9yc1xyXG4kY29sb3ItYm9keTogIzMzMztcclxuJGNvbG9yLWFjY2VudDogb3JhbmdlO1xyXG4kY29sb3ItaW5wdXQ6IHdoaXRlO1xyXG5cclxuXHJcbi8vICAgIGZpeCBwb3NpdGlvbiByYWRpbyBpbnB1dCBvZmYtY2FudmFzXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAtMTAwcHg7XHJcbn1cclxuXHJcbi8vICAgIHN0eWxlIGlucHV0IGZpZWxkcyAobm90ZSBoaWRkZW4gYnkgZGVmYXVsdCkgXHJcbmlucHV0Om5vdChbdHlwZT1cInJhZGlvXCJdKSB7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWlucHV0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuLy8gICAgc2hvdyBpbnB1dCBiYXNlZCBvbiByYWRpbyBzZWxlY3Rpb24gXHJcbltpZD1cInNpZ24taW5cIl06Y2hlY2tlZCB+IGlucHV0LnNpZ24taW4sXHJcbltpZD1cInNpZ24tdXBcIl06Y2hlY2tlZCB+IGlucHV0LnNpZ24tdXAsXHJcbltpZD1cInJlc2V0XCJdOmNoZWNrZWQgfiBpbnB1dC5yZXNldCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbi8vICAgIHN1Ym1pdCBidXR0b24gXHJcbmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWFjY2VudDtcclxuICAgIGZvbnQtc2l6ZTogMDtcclxuICAgICY6YmVmb3JlIHsgZm9udC1zaXplOiAxNnB4OyB9XHJcbn1cclxuXHJcbi8vICAgIHNob3cgYm90dG9uIHRleHQgYmFzZWQgb24gcmFkaW8gc2VsZWN0aW9uXHJcbltpZD1cInNpZ24taW5cIl06Y2hlY2tlZCB+IGJ1dHRvbjpiZWZvcmUgeyBjb250ZW50OiAnUHJpamF2YSc7IH1cclxuW2lkPVwic2lnbi11cFwiXTpjaGVja2VkIH4gYnV0dG9uOmJlZm9yZSB7IGNvbnRlbnQ6ICdSZWdpc3RyYWNpamEnOyB9XHJcbltpZD1cInJlc2V0XCJdOmNoZWNrZWQgfiBidXR0b246YmVmb3JlIHsgY29udGVudDogJ1Jlc2V0IGxvemlua2UnOyB9XHJcblxyXG5cclxuLy8gICAgICAgICAgICBcclxubGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAkY29sb3ItYWNjZW50O1xyXG4gICAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzIC0gNHB4KTtcclxuICAgIFxyXG4gICAgLy8gICAgcG9pbnRlciBhcnJvd1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IC0xMHB4O1xyXG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogaW5oZXJpdDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gICAgIHNldCBhY3RpdmUgbGFiZWwgbWFya2VyXHJcbltpZD1cInNpZ24taW5cIl06Y2hlY2tlZCB+IFtmb3I9XCJzaWduLWluXCJdLFxyXG5baWQ9XCJzaWduLXVwXCJdOmNoZWNrZWQgfiBbZm9yPVwic2lnbi11cFwiXSxcclxuW2lkPVwicmVzZXRcIl06Y2hlY2tlZCB+IFtmb3I9XCJyZXNldFwiXSB7XHJcbiAgICBjb2xvcjogJGNvbG9yLWlucHV0O1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGNvbG9yLWlucHV0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gICAgZmxleCBkb2VzIG5vdCB3b3JrIHdlbGwgb24gZmllZHNldCBcclxuLy8gICAgd2h5IHdlIHVzZSBhIHN0eWxpbmcgd3JhcHBlclxyXG4uZmxleC13cmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBoZWlnaHQ6IDMzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_sevices_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "mvZR":
/*!****************************************!*\
  !*** ./src/app/models/corvusVerify.ts ***!
  \****************************************/
/*! exports provided: CorvusVerify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorvusVerify", function() { return CorvusVerify; });
class CorvusVerify {
}


/***/ }),

/***/ "oEZD":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin/admin-invoices/admin-invoices.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminInvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminInvoicesComponent", function() { return AdminInvoicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_buyer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/buyer */ "0+sa");
/* harmony import */ var src_app_models_discountCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/discountCode */ "HYO+");
/* harmony import */ var src_app_models_invoice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/invoice */ "ahTl");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/product */ "yHTb");
/* harmony import */ var src_app_sevices_invoices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sevices/invoices.service */ "vvq5");
/* harmony import */ var src_app_sevices_buyers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sevices/buyers.service */ "SbDr");
/* harmony import */ var src_app_sevices_products_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sevices/products.service */ "IsAJ");
/* harmony import */ var src_app_sevices_discounts_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sevices/discounts.service */ "5y8b");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");














function AdminInvoicesComponent_div_13_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Shipped: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inv_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, inv_r2.datumSlanja, ctx_r3.short));
} }
function AdminInvoicesComponent_div_13_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Shipped: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminInvoicesComponent_div_13_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tracking: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inv_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sent: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, inv_r2.datumSlanja, ctx_r6.short), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](inv_r2.pracenjePosiljke);
} }
function AdminInvoicesComponent_div_13_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sent: NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tracking: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "unavailable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminInvoicesComponent_div_13_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const st_r12 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Product: ", st_r12.proizvod.naziv, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Amount: ", st_r12.kolicina, " pcs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Discount: ", ctx_r9.getDiscountDescription(st_r12.popustKod), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: ", st_r12.ukupnaCijena, "HRK");
} }
function AdminInvoicesComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminInvoicesComponent_div_13_div_13_Template, 6, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdminInvoicesComponent_div_13_ng_template_14_Template, 4, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Buyer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Mobile: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Shipping ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AdminInvoicesComponent_div_13_div_43_Template, 8, 5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AdminInvoicesComponent_div_13_ng_template_44_Template, 6, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "address", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Comment: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "q");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, AdminInvoicesComponent_div_13_div_64_Template, 12, 4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inv_r2 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Invoice: #", inv_r2.brojRacuna, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 42, inv_r2.datumIzdavanja, ctx_r0.short));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", inv_r2.kupac.ime, " ", inv_r2.kupac.prezime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", inv_r2.datumSlanja != null)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "accordition", inv_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "heading-buyer" + inv_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("parent", "#accordition", inv_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapse-buyer" + inv_r2.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-controls", "collapse-buyer" + inv_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "collapse-buyer" + inv_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", "heading-buyer" + inv_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", inv_r2.kupac.ime, " ", inv_r2.kupac.prezime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "tel:", inv_r2.kupac.kontakt, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](inv_r2.kupac.kontakt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", inv_r2.kupac.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](inv_r2.kupac.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "heading-shipping" + inv_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("parent", "#accordition", inv_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapse-shipping" + inv_r2.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-controls", "collapse-shipping" + inv_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "collapse-shipping" + inv_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", "heading-shipping" + inv_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", inv_r2.datumSlanja != null)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Full name: ", inv_r2.kupac.ime, " ", inv_r2.kupac.prezime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", inv_r2.kupac.ulica, " ", inv_r2.kupac.kucniBroj, ", ", inv_r2.kupac.postanskiBroj, ", ", inv_r2.kupac.grad, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](inv_r2.komentarNarudzbe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "heading-items" + inv_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("parent", "#accordition", inv_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#collapse-items" + inv_r2.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-controls", "collapse-items" + inv_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "collapse-items" + inv_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", "heading-items" + inv_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", inv_r2.stavke);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](inv_r2.guid);
} }
function AdminInvoicesComponent_div_15_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r16 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", b_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", b_r16.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", b_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", b_r16.ime, " ", b_r16.prezime, ", ", b_r16.email, ", ", ctx_r13.getAddressString(b_r16), " ");
} }
function AdminInvoicesComponent_div_15_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", p_r17.naziv);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", p_r17.naziv);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", p_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", p_r17.naziv, " | ", p_r17.cijena, " HRK ");
} }
function AdminInvoicesComponent_div_15_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", d_r18.popustKod);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", d_r18.popustKod);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", d_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", d_r18.popustKod, " | ", d_r18.popustUpostocima, "% ");
} }
function AdminInvoicesComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add New Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Buyer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdminInvoicesComponent_div_15_option_14_Template, 2, 7, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "If buyer is not shown on this list, it's either removed or it does not exist!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Order comment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Order items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Product:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AdminInvoicesComponent_div_15_option_31_Template, 2, 5, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "If product is not shown on this list, it's either removed or it does not exist!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Quantity:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Discount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AdminInvoicesComponent_div_15_option_44_Template, 2, 5, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "If discount is not shown on this list, it's either removed or it does not exist!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminInvoicesComponent_div_15_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.OnAddCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminInvoicesComponent_div_15_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.OnAddConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.addForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.buyers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.discounts);
} }
class AdminInvoicesComponent {
    constructor(invoicesService, buyersService, productsService, discountsService, fb, toastr) {
        this.invoicesService = invoicesService;
        this.buyersService = buyersService;
        this.productsService = productsService;
        this.discountsService = discountsService;
        this.fb = fb;
        this.toastr = toastr;
        this.title = 'Admin - Invoices';
        this.invoices = new Array();
        this.buyers = new Array();
        this.products = new Array();
        this.discounts = new Array();
        this.showInactive = false;
        this.disabledBtn = null;
    }
    OnReloadClick() {
        this.invoices = [];
        this.invoices = new Array();
        if (this.showInactive) {
            this.invoicesService.getAll().subscribe((result) => {
                //console.log('UNPARSED: ' + JSON.stringify(result) + '\n\n');
                result.forEach((r) => {
                    this.invoice = new src_app_models_invoice__WEBPACK_IMPORTED_MODULE_4__["Invoice"]();
                    this.invoice.kupac = new src_app_models_buyer__WEBPACK_IMPORTED_MODULE_2__["Buyer"]();
                    this.invoice.stavke = new Array();
                    this.invoice.id = r['id'];
                    this.invoice.kupacId = r['kupacId'];
                    this.invoice.guid = r['guid'];
                    this.invoice.datumIzdavanja = r['datumIzdavanja'];
                    this.invoice.datumSlanja = r['datumSlanja'];
                    this.invoice.brojRacuna = r['brojRacuna'];
                    this.invoice.komentarNarudzbe = r['komentarNarudzbe'];
                    this.invoice.pracenjePosiljke = r['pracenjePosiljke'];
                    this.invoice.kupac = r['kupac'];
                    this.invoice.izbrisano = r['izbrisano'];
                    this.invoice.stavke = r['stavke'];
                    this.invoices.push(this.invoice);
                });
            });
            console.log('\nNumber of invoices: ' + this.invoices.length);
        }
        else {
            this.invoicesService.getActive().subscribe((result) => {
                result.forEach((r) => {
                    this.invoice = new src_app_models_invoice__WEBPACK_IMPORTED_MODULE_4__["Invoice"]();
                    this.invoice.kupac = new src_app_models_buyer__WEBPACK_IMPORTED_MODULE_2__["Buyer"]();
                    this.invoice.stavke = new Array();
                    this.invoice.id = r['id'];
                    this.invoice.kupacId = r['kupacId'];
                    this.invoice.guid = r['guid'];
                    this.invoice.datumIzdavanja = r['datumIzdavanja'];
                    this.invoice.datumSlanja = r['datumSlanja'];
                    this.invoice.brojRacuna = r['brojRacuna'];
                    this.invoice.komentarNarudzbe = r['komentarNarudzbe'];
                    this.invoice.pracenjePosiljke = r['pracenjePosiljke'];
                    this.invoice.kupac = r['kupac'];
                    this.invoice.izbrisano = r['izbrisano'];
                    this.invoice.stavke = r['stavke'];
                    this.invoices.push(this.invoice);
                });
            });
            console.log('\nNumber of invoices: ' + this.invoices.length);
        }
        if (this.disabledBtn != null) {
            this.disabledBtn.disabled = false;
            this.resetAllForms();
            this.hideAllForms();
        }
    }
    getDiscountDescription(pk) {
        let value = '';
        value = pk.popustKod + ' (' + pk['popustUpostocima'] + '%)';
        return value;
    }
    hideAllForms() {
        this.addFormShown = false;
        this.editFormShown = false;
        this.removeFormShown = false;
    }
    resetAllForms() {
        this.addForm.reset();
        this.editForm.reset();
        this.removeForm.reset();
    }
    ngOnInit() {
        this.initForms();
        document.title = this.title;
        this.addFormShown = false;
        this.editFormShown = false;
        this.removeFormShown = false;
        this.discountsService.getActive().subscribe((result) => {
            result.forEach((r) => {
                let d = new src_app_models_discountCode__WEBPACK_IMPORTED_MODULE_3__["DiscountCode"]();
                Object.assign(d, r);
                this.discounts.push(d);
                // console.log(JSON.stringify(d));
            });
        });
        this.buyersService.getActiveBuyers().subscribe((result) => {
            this.buyers = [];
            this.buyers = new Array();
            result.forEach((r) => {
                let b = new src_app_models_buyer__WEBPACK_IMPORTED_MODULE_2__["Buyer"]();
                Object.assign(b, r);
                this.buyers.push(b);
                // console.log(JSON.stringify(b));
            });
        });
        this.productsService.getActive().subscribe((result) => {
            this.products = [];
            this.products = new Array();
            result.forEach((r) => {
                let p = new src_app_models_product__WEBPACK_IMPORTED_MODULE_5__["Product"]();
                Object.assign(p, r);
                this.products.push(p);
                // console.log(JSON.stringify(p));
            });
        });
        this.OnReloadClick();
    }
    getAddressString(b) {
        return b.ulica + ' ' + b.kucniBroj + ', ' + b.postanskiBroj + ', ' + b.grad;
    }
    initForms() {
        this.addForm = this.fb.group({
            addBuyer: this.fb.array(this.buyers),
            addOrderComment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            addProduct: this.fb.array(this.products),
            addQuantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            addDiscount: this.fb.array(this.discounts),
        });
        this.editForm = this.fb.group({
            editId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editHtml: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editCharacteristics: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editTimesSold: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.removeForm = this.fb.group({
            removeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeHtml: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeCharacteristics: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removePrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeTimesSold: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    OnShowActiveChange(event) {
        this.showInactive = !this.showInactive;
        this.OnReloadClick();
    }
    //Add functions
    addBtn(event) {
        this.hideAllForms();
        this.resetAllForms();
        if (this.disabledBtn != null) {
            this.disabledBtn.disabled = false;
        }
        this.disabledBtn = event.target;
        this.disabledBtn.disabled = true;
        this.addFormShown = true;
    }
    OnAddCancel() {
        this.resetAllForms();
        this.hideAllForms();
        this.disabledBtn.disabled = false;
    }
    OnAddConfirm() {
        this.disabledBtn.disabled = false;
        let inv = new src_app_models_invoice__WEBPACK_IMPORTED_MODULE_4__["Invoice"]();
        var date = new Date();
        inv.datumIzdavanja = new Date(date.getFullYear(), date.getMonth(), date.getDay());
        inv.komentarNarudzbe;
        inv.izbrisano = false;
        // console.log(JSON.stringify(inv));
        this.invoicesService.add(inv).subscribe((result) => {
            this.toastr.success('Akcija uspješna!', 'Cascadus sustav');
            this.OnReloadClick();
        }, (error) => {
            this.toastr.success(error, 'Cascadus sustav');
        });
        this.hideAllForms();
        this.resetAllForms();
    }
}
AdminInvoicesComponent.ɵfac = function AdminInvoicesComponent_Factory(t) { return new (t || AdminInvoicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sevices_invoices_service__WEBPACK_IMPORTED_MODULE_6__["InvoicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sevices_buyers_service__WEBPACK_IMPORTED_MODULE_7__["BuyersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sevices_products_service__WEBPACK_IMPORTED_MODULE_8__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sevices_discounts_service__WEBPACK_IMPORTED_MODULE_9__["DiscountsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"])); };
AdminInvoicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminInvoicesComponent, selectors: [["app-admin-invoices"]], decls: 16, vars: 2, consts: [[1, "row"], [1, "col-8", "text-center"], [1, "justify-content-center", "text-center"], ["type", "checkbox", "id", "toggleActive", 1, "checkbox", 3, "change"], ["id", "lblToggleActive", "for", "toggleActive"], ["id", "addBtn", 1, "btn", "btn-lg", "btn-primary", "col-xs-12", 3, "click"], [1, "row", "p-0", "m-auto", "scrollable-y"], ["class", "col-md-4 col-sm-6 col-xs-12 p-0 m-0", 4, "ngFor", "ngForOf"], [1, "col-4", "text-center"], ["id", "addForm", "class", "card card-body ml-0 mr-4 mt-4 p-0", 4, "ngIf"], [1, "col-md-4", "col-sm-6", "col-xs-12", "p-0", "m-0"], [1, "m-2", "card"], [1, "card-header", "m-0", "p-0"], [1, "row", "p-0", "m-0", "text-center"], [1, "col-6"], [1, "col-12", "text-center"], [1, "d-inline"], [1, "card-body", "text-center"], [4, "ngIf", "ngIfElse"], ["not_shipped", ""], [3, "id"], ["role", "tab", 1, "panel-heading", 3, "id"], [1, "panel-title"], ["role", "button", "data-toggle", "collapse", "aria-expanded", "true", 1, "btn", "btn-outline-info", 3, "parent", "href"], ["role", "tabpanel", 1, "panel-collapse", "collapse", 3, "id"], [1, "panel-body"], [1, "text-center", "mx-auto", "p-auto", "my-1", "card"], [3, "href"], ["role", "button", "data-toggle", "collapse", "aria-expanded", "true", 1, "btn", "btn-outline-danger", 3, "parent", "href"], [1, "text-center", "mx-auto", "p-auto", "my-1"], ["class", "text-center", 4, "ngIf", "ngIfElse"], ["not_shipped1", ""], ["role", "button", "data-toggle", "collapse", "aria-expanded", "true", 1, "btn", "btn-outline-success", 3, "parent", "href"], [1, "card", "p-2"], [4, "ngFor", "ngForOf"], [1, "card-footer", "text-center", "px-2", "py-3", "m-0"], [1, "green-text"], [1, "red-text"], [1, "text-center"], [1, "card", "p-0", "my-1"], [1, "row", "text-center", "px-2"], [1, "col-12"], ["id", "addForm", 1, "card", "card-body", "ml-0", "mr-4", "mt-4", "p-0"], [3, "formGroup"], [1, "card-header"], [1, "card-body"], [1, "card", "m-0", "mb-3", "p-2"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], ["id", "addBuyer", "required", "", "formControlName", "addBuyer", "name", "addBuyer", 1, "custom-select"], [3, "value", "title", "id", 4, "ngFor", "ngForOf"], [1, "input-group"], ["type", "text", "formControlName", "addOrderComment", "name", "addOrderComment", "id", "addOrderComment", 1, "form-control"], [1, "card", "p-2", "m-0", "mb-3"], ["id", "addProduct", "required", "", "formControlName", "addProduct", "name", "addProduct", 1, "custom-select"], ["type", "number", "min", "0", "required", "", "formControlName", "addQuantity", "name", "addQuantity", "id", "addQuantity", 1, "form-control"], ["id", "addDiscount", "required", "", "formControlName", "addDiscount", "name", "addDiscount", 1, "custom-select"], [1, "card-footer"], ["id", "addFormCancel", "type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "addFormConfirm", "type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "value", "title", "id"]], template: function AdminInvoicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdminInvoicesComponent_Template_input_change_6_listener($event) { return ctx.OnShowActiveChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Show removed invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminInvoicesComponent_Template_button_click_10_listener($event) { return ctx.addBtn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "New invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminInvoicesComponent_div_13_Template, 68, 45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminInvoicesComponent_div_15_Template, 52, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.invoices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addFormShown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: [".scrollable-y[_ngcontent-%COMP%] {\n  height: 80vh;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1pbnZvaWNlcy9hZG1pbi1pbnZvaWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1pbnZvaWNlcy9hZG1pbi1pbnZvaWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGxhYmxlLXkge1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminInvoicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-invoices',
                templateUrl: './admin-invoices.component.html',
                styleUrls: ['./admin-invoices.component.scss'],
            }]
    }], function () { return [{ type: src_app_sevices_invoices_service__WEBPACK_IMPORTED_MODULE_6__["InvoicesService"] }, { type: src_app_sevices_buyers_service__WEBPACK_IMPORTED_MODULE_7__["BuyersService"] }, { type: src_app_sevices_products_service__WEBPACK_IMPORTED_MODULE_8__["ProductsService"] }, { type: src_app_sevices_discounts_service__WEBPACK_IMPORTED_MODULE_9__["DiscountsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "tPiu":
/*!*******************************************!*\
  !*** ./src/app/sevices/emails.service.ts ***!
  \*******************************************/
/*! exports provided: EmailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsService", function() { return EmailsService; });
/* harmony import */ var _models_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/email */ "/co8");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");






class EmailsService {
    constructor(http) {
        this.http = http;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].domain + "admin/email";
        this.token = localStorage.getItem("jwt");
    }
    subscribe(email) {
        var mail = new _models_email__WEBPACK_IMPORTED_MODULE_0__["Email"](email);
        const data = mail;
        return this.http
            .post(this.URL + "/subscribe", data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    getAll() {
        return this.http
            .get(this.URL + "/all", { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    getActive() {
        return this.http.get(this.URL + "/active", { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    getById(id) {
        return this.http.get(this.URL + "/get/" + id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    add(inv) {
        const data = {
            brojRacuna: 0,
            id: 0,
            datumIzdavanja: inv.datumIzdavanja,
            datumSlanja: null,
            guid: "",
            izbrisano: false,
            komentarNarudzbe: inv.komentarNarudzbe,
            pracenjePosiljke: "",
            stavke: inv.stavke,
            kupacId: inv.kupacId,
            kupac: inv.kupac
        };
        return this.http.post(this.URL + "/add", data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    edit(inv) {
        const data = {
            brojRacuna: 0,
            id: 0,
            datumIzdavanja: inv.datumIzdavanja,
            datumSlanja: null,
            guid: "",
            izbrisano: false,
            komentarNarudzbe: inv.komentarNarudzbe,
            pracenjePosiljke: "",
            stavke: inv.stavke,
            kupacId: inv.kupacId,
            kupac: inv.kupac
        };
        return this.http.post(this.URL + "/update/" + inv.id, data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    delete(id) {
        return this.http.get(this.URL + "/delete/" + id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
}
EmailsService.ɵfac = function EmailsService_Factory(t) { return new (t || EmailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EmailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EmailsService, factory: EmailsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EmailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "uhI6":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin/admin-product/admin-product.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdminProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductComponent", function() { return AdminProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/product */ "yHTb");
/* harmony import */ var src_app_sevices_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sevices/products.service */ "IsAJ");
/* harmony import */ var src_app_sevices_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sevices/categories.service */ "WLZD");
/* harmony import */ var src_app_sevices_discounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sevices/discounts.service */ "5y8b");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function AdminProductComponent_tr_38_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "bold", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminProductComponent_tr_38_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bold", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminProductComponent_tr_38_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", pro_r4.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", pro_r4.naziv, " - thumbnail");
} }
function AdminProductComponent_tr_38_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bold", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminProductComponent_tr_38_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "bold", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminProductComponent_tr_38_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bold", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminProductComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminProductComponent_tr_38_div_8_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminProductComponent_tr_38_ng_template_9_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AdminProductComponent_tr_38_div_20_Template, 2, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AdminProductComponent_tr_38_ng_template_21_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AdminProductComponent_tr_38_div_24_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AdminProductComponent_tr_38_ng_template_25_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductComponent_tr_38_Template_button_click_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const pro_r4 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.editBtn($event, pro_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductComponent_tr_38_Template_button_click_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const pro_r4 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.removeBtn($event, pro_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r4 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pro_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pro_r4.naziv);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pro_r4.kategorija);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pro_r4.putanja.length > 2)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pro_r4.karakteristike.substring(0, 30), "..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pro_r4.opis.substring(0, 30), "..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pro_r4.cijena, " kn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pro_r4.brojProdanihKomada, " kom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pro_r4.thumbnail != null)("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pro_r4.izbrisano)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "editBtn", pro_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", pro_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "removeBtn", pro_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", pro_r4.id);
} }
function AdminProductComponent_div_39_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", c_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", c_r19.naziv);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", c_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c_r19.naziv, " ");
} }
function AdminProductComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add New Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Category:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AdminProductComponent_div_39_option_16_Template, 2, 4, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "HTML:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Characteristics:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Price is in Croatian Kunas (HRK)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Inventory:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Thumbnail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductComponent_div_39_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.OnAddCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductComponent_div_39_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.OnAddConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.addForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
} }
function AdminProductComponent_div_40_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", c_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", c_r24.naziv);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", c_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c_r24.naziv, " ");
} }
function AdminProductComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Category:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AdminProductComponent_div_40_option_24_Template, 2, 4, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "HTML:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Characteristics:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Price is in Croatian Kunas (HRK)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Inventory:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Thumbnail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductComponent_div_40_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.OnEditCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductComponent_div_40_Template_button_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.OnEditConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.editForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.categories);
} }
function AdminProductComponent_div_41_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", c_r29.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", c_r29.naziv);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", c_r29.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c_r29.naziv, " ");
} }
function AdminProductComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Remove item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Category:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AdminProductComponent_div_41_option_21_Template, 2, 4, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "HTML:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Characteristics:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Price is in Croatian Kunas (HRK)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Inventory:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Thumbnail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "You won't be able to undo this action. Please check if this item is the one you want to remove.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductComponent_div_41_Template_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.OnRemoveCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductComponent_div_41_Template_button_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.OnRemoveConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.removeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.categories);
} }
class AdminProductComponent {
    constructor(productsService, categoriesService, discountsService, fb, toastr) {
        this.productsService = productsService;
        this.categoriesService = categoriesService;
        this.discountsService = discountsService;
        this.fb = fb;
        this.toastr = toastr;
        this.title = 'Admin - Products';
        this.showInactive = false;
        this.disabledBtn = null;
        this.OnReloadClick();
    }
    OnReloadClick() {
        this.categoriesService.getActiveCategories().subscribe((result) => {
            this.categories = result;
        });
        if (this.showInactive) {
            this.productsService.getAll().subscribe((result) => {
                this.products = result;
            });
        }
        else {
            this.productsService.getActive().subscribe((result) => {
                this.products = result;
            });
        }
        if (this.disabledBtn != null) {
            this.disabledBtn.disabled = false;
            this.resetAllForms();
            this.hideAllForms();
        }
        this.ngOnInit();
    }
    hideAllForms() {
        this.addFormShown = false;
        this.editFormShown = false;
        this.removeFormShown = false;
    }
    resetAllForms() {
        this.addForm.reset();
        this.editForm.reset();
        this.removeForm.reset();
    }
    ngOnInit() {
        this.initForms();
        document.title = this.title;
        this.addFormShown = false;
        this.editFormShown = false;
        this.removeFormShown = false;
    }
    initForms() {
        this.addForm = this.fb.group({
            addName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            addCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            addHtml: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            addCharacteristics: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            addDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            addPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            addTimesSold: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            addThumbnail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.editForm = this.fb.group({
            editId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editHtml: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editCharacteristics: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editTimesSold: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            editThumbnail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.removeForm = this.fb.group({
            removeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeHtml: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeCharacteristics: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removePrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeTimesSold: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            removeThumbnail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    OnShowActiveChange(event) {
        this.showInactive = !this.showInactive;
        this.OnReloadClick();
    }
    //Add functions
    addBtn(event) {
        this.hideAllForms();
        this.resetAllForms();
        if (this.disabledBtn != null) {
            this.disabledBtn.disabled = false;
        }
        this.disabledBtn = event.target;
        this.disabledBtn.disabled = true;
        this.addFormShown = true;
    }
    OnAddCancel() {
        this.resetAllForms();
        this.hideAllForms();
        this.disabledBtn.disabled = false;
    }
    OnAddConfirm() {
        this.disabledBtn.disabled = false;
        let pro = new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
        pro.naziv = this.addForm.get('addName').value;
        pro.kategorijaId = Number.parseInt(this.addForm.get('addCategoryId').value);
        pro.putanja = this.addForm.get('addHtml').value;
        pro.karakteristike = this.addForm.get('addCharacteristics').value;
        pro.kolicina = this.addForm.get('addTimesSold').value;
        pro.opis = this.addForm.get('addDescription').value;
        pro.cijena = this.addForm.get('addPrice').value;
        pro.thumbnail = this.addForm.get('addThumbnail').value;
        pro.izbrisano = false;
        // console.log(JSON.stringify(pro));
        this.productsService.add(pro).subscribe((result) => {
            //alert(JSON.stringify(result));
            setTimeout(() => {
                this.toastr.info('Akcija uspješna');
            }, 500);
            this.OnReloadClick();
        }, (error) => {
            setTimeout(() => {
                this.toastr.info(JSON.stringify(error), 'Greška!');
            }, 1500);
        });
        this.hideAllForms();
        this.resetAllForms();
    }
    //Edit functions
    editBtn(event, id) {
        if (this.disabledBtn != null) {
            this.disabledBtn.disabled = false;
        }
        this.disabledBtn = event.target;
        this.disabledBtn.disabled = true;
        this.hideAllForms();
        this.resetAllForms();
        this.fillEditForm(id);
    }
    fillEditForm(id) {
        this.productsService.getById(id).subscribe((result) => {
            this.product = Object.assign(new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"](), result);
            this.editForm = this.fb.group({
                editId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.product.id, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                editName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.product.naziv, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                editCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.product.kategorijaId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                editHtml: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.product.putanja, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                editCharacteristics: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.product.karakteristike, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                editDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.product.opis, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                editPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.product.cijena, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                editTimesSold: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.product.kolicina, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                editActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.product.izbrisano, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                editThumbnail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.product.thumbnail),
            }, (error) => {
                setTimeout(() => {
                    this.toastr.info(JSON.stringify(error), 'Greška!');
                }, 1500);
            });
        });
        this.editFormShown = true;
    }
    OnEditConfirm() {
        this.disabledBtn.disabled = false;
        this.product.id = this.editForm.get('editId').value;
        this.product.naziv = this.editForm.get('editName').value;
        this.product.kategorijaId = Number.parseInt(this.editForm.get('editCategoryId').value);
        this.product.putanja = this.editForm.get('editHtml').value;
        this.product.karakteristike = this.editForm.get('editCharacteristics').value;
        this.product.kolicina = this.editForm.get('editTimesSold').value;
        this.product.opis = this.editForm.get('editDescription').value;
        this.product.cijena = this.editForm.get('editPrice').value;
        this.product.izbrisano = this.editForm.get('editActive').value;
        this.product.thumbnail = this.editForm.get('editThumbnail').value;
        console.log(this.product);
        this.productsService.edit(this.product).subscribe((result) => {
            setTimeout(() => {
                this.toastr.info('Akcija uspješna');
            }, 500);
            this.OnReloadClick();
        }, (error) => {
            setTimeout(() => {
                this.toastr.info(JSON.stringify(error), 'Greška!');
            }, 1500);
        });
        this.hideAllForms();
        this.resetAllForms();
    }
    OnEditCancel() {
        this.disabledBtn.disabled = false;
        this.resetAllForms();
        this.hideAllForms();
    }
    //Remove functions
    removeBtn(event, id) {
        if (this.disabledBtn != null) {
            this.disabledBtn.disabled = false;
        }
        this.resetAllForms();
        this.hideAllForms();
        this.fillRemoveForm(id);
        this.removeFormShown = true;
        this.disabledBtn = event.target;
        this.disabledBtn.disabled = true;
    }
    fillRemoveForm(id) {
        this.productsService.getById(id).subscribe((result) => {
            this.product = Object.assign(new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"](), result);
            this.removeForm = this.fb.group({
                removeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.product.id, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                removeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.product.naziv, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                removeCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.product.kategorijaId, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                removeHtml: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.product.putanja, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                removeCharacteristics: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.product.karakteristike, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                removeDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.product.opis, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                removePrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.product.cijena, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                removeTimesSold: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.product.kolicina, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                removeThumbnail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.product.thumbnail, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                removeActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.product.izbrisano, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            });
        });
    }
    OnRemoveCancel() {
        this.disabledBtn.disabled = false;
        this.hideAllForms();
        this.resetAllForms();
    }
    OnRemoveConfirm() {
        this.disabledBtn.disabled = false;
        this.productsService.delete(this.product.id).subscribe((result) => {
            this.resetAllForms();
            this.hideAllForms();
            setTimeout(() => {
                this.toastr.info('Akcija uspješna');
            }, 500);
            this.OnReloadClick();
        });
    }
}
AdminProductComponent.ɵfac = function AdminProductComponent_Factory(t) { return new (t || AdminProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sevices_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sevices_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sevices_discounts_service__WEBPACK_IMPORTED_MODULE_5__["DiscountsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
AdminProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminProductComponent, selectors: [["app-admin-product"]], decls: 42, vars: 4, consts: [[1, "row"], [1, "col-8", "text-center"], [1, "justify-content-center", "text-center"], ["type", "checkbox", "id", "toggleActive", 1, "checkbox", 3, "change"], ["id", "lblToggleActive", "for", "toggleActive"], ["id", "addBtn", 1, "btn", "btn-lg", "btn-primary", "col-xs-12", 3, "click"], ["id", "productsTable", 1, "table", "text-center", "m-0", "p-0", "fixedTableHead"], ["id", "tableBody"], [4, "ngFor", "ngForOf"], ["id", "addForm", "class", "card card-body m-2 col-3", 4, "ngIf"], ["id", "editForm", "class", "card card-body m-2  my-0 col-3", 4, "ngIf"], ["id", "removeForm", "class", "card card-body m-2 my-0 col-3", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["no_html", ""], ["default_thumbnail", ""], ["izbrisano_false", ""], [1, "btn-group"], [1, "btn", "btn-sm", "btn-outline-success", 3, "id", "value", "click"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "id", "value", "click"], [1, "green-text", "font-weight-bold"], [1, "red-text", "font-weight-bold"], ["loading", "lazy", 1, "img", "img-fluid", "img-responsive", "rounded", "border", 3, "src", "alt"], ["id", "addForm", 1, "card", "card-body", "m-2", "col-3"], [3, "formGroup"], [1, "card-header"], [1, "card-body"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], ["formControlName", "addName", "required", "", "type", "text", "minlength", "3", "maxlength", "50", "name", "addName", "id", "addName", "aria-describedby", "basic-addon3", 1, "form-control"], ["id", "addCategoryId", "required", "", "formControlName", "addCategoryId", "name", "addCategoryId", 1, "custom-select"], [3, "value", "title", "id", 4, "ngFor", "ngForOf"], [1, "input-group"], ["value", " ", "type", "text", "formControlName", "addHtml", "name", "addHtml", "id", "addHtml", 1, "form-control"], ["required", "", "type", "text", "formControlName", "addCharacteristics", "name", "addCharacteristics", "id", "addCharacteristics", 1, "form-control"], ["required", "", "type", "text", "formControlName", "addDescription", "name", "addDescription", "id", "addDescription", 1, "form-control"], ["type", "number", "min", "0", "required", "", "formControlName", "addPrice", "name", "addPrice", "id", "addPrice", 1, "form-control"], ["type", "number", "min", "0", "required", "", "formControlName", "addTimesSold", "name", "addTimesSold", "id", "addTimesSold", 1, "form-control"], ["type", "text", "placeholder", "path (URL ACCEPTED)", "formControlName", "addThumbnail", "name", "addThumbnail", "id", "addThumbnail", 1, "form-control"], [1, "card-footer"], ["id", "addFormCancel", "type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "addFormConfirm", "type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "value", "title", "id"], ["id", "editForm", 1, "card", "card-body", "m-2", "my-0", "col-3"], [1, "col-12"], ["id", "editModalItemInfo"], ["readonly", "", "type", "text", "minlength", "1", "maxlength", "50", "name", "id", "id", "editId", "formControlName", "editId", "name", "editId", "aria-describedby", "basic-addon3", 1, "form-control"], ["formControlName", "editName", "required", "", "type", "text", "minlength", "3", "maxlength", "50", "name", "editName", "id", "editName", "aria-describedby", "basic-addon3", 1, "form-control"], ["id", "editCategoryId", "required", "", "formControlName", "editCategoryId", "name", "editCategoryId", 1, "custom-select"], ["value", " ", "type", "text", "formControlName", "editHtml", "name", "editHtml", "id", "editHtml", 1, "form-control"], ["required", "", "type", "text", "formControlName", "editCharacteristics", "name", "editCharacteristics", "id", "editCharacteristics", 1, "form-control"], ["required", "", "type", "text", "formControlName", "editDescription", "name", "editDescription", "id", "editDescription", 1, "form-control"], ["type", "number", "min", "0", "required", "", "formControlName", "editPrice", "name", "editPrice", "id", "editPrice", 1, "form-control"], ["type", "number", "min", "0", "required", "", "formControlName", "editTimesSold", "name", "editTimesSold", "id", "editTimesSold", 1, "form-control"], ["type", "text", "placeholder", "path (URL ACCEPTED)", "formControlName", "editThumbnail", "name", "editThumbnail", "id", "editThumbnail", 1, "form-control"], [1, "custom-control", "custom-checkbox", "d-none"], ["type", "checkbox", "name", "editActive", "formControlName", "editActive", "id", "editActive", 1, "custom-control-input"], ["for", "editActive", 1, "custom-control-label"], ["id", "btnEditCancel", "type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "btnEditSubmit", "type", "button", 1, "btn", "btn-success", 3, "click"], ["id", "removeForm", 1, "card", "card-body", "m-2", "my-0", "col-3"], ["readonly", "", "type", "text", "minlength", "1", "maxlength", "50", "name", "removeId", "id", "removeId", "formControlName", "removeId", "name", "removeId", "aria-describedby", "basic-addon3", 1, "form-control"], ["formControlName", "removeName", "required", "", "type", "text", "minlength", "3", "maxlength", "50", "name", "removeName", "id", "removeName", "aria-describedby", "basic-addon3", 1, "form-control"], ["id", "removeCategoryId", "required", "", "formControlName", "removeCategoryId", "name", "removeCategoryId", 1, "custom-select"], ["value", " ", "type", "text", "formControlName", "removeHtml", "name", "removeHtml", "id", "removeHtml", 1, "form-control"], ["required", "", "type", "text", "formControlName", "removeCharacteristics", "name", "removeCharacteristics", "id", "removeCharacteristics", 1, "form-control"], ["required", "", "type", "text", "formControlName", "removeDescription", "name", "removeDescription", "id", "removeDescription", 1, "form-control"], ["type", "number", "min", "0", "required", "", "formControlName", "removePrice", "name", "removePrice", "id", "removePrice", 1, "form-control"], ["type", "number", "min", "0", "required", "", "formControlName", "removeTimesSold", "name", "removeTimesSold", "id", "removeTimesSold", 1, "form-control"], ["type", "text", "placeholder", "path (URL ACCEPTED)", "formControlName", "removeThumbnail", "name", "removeThumbnail", "id", "removeThumbnail", 1, "form-control"], ["type", "checkbox", "name", "removeActive", "formControlName", "removeActive", "id", "removeActive", 1, "custom-control-input"], ["for", "removeActive", 1, "custom-control-label"], [1, "text-danger"], ["id", "btnRemoveCancel", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "btnRemoveSubmit", 1, "btn", "btn-danger", 3, "click"]], template: function AdminProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdminProductComponent_Template_input_change_6_listener($event) { return ctx.OnShowActiveChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Show Removed products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductComponent_Template_button_click_10_listener($event) { return ctx.addBtn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "New product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "HTML File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Characteristics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Pieces sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Thumbnail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Removed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tbody", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AdminProductComponent_tr_38_Template, 33, 17, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AdminProductComponent_div_39_Template, 54, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AdminProductComponent_div_40_Template, 66, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AdminProductComponent_div_41_Template, 65, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addFormShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editFormShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.removeFormShown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: ["tfoot[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 3px;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1wcm9kdWN0L2FkbWluLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLXByb2R1Y3QvYWRtaW4tcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRmb290IGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-product',
                templateUrl: './admin-product.component.html',
                styleUrls: ['./admin-product.component.scss'],
            }]
    }], function () { return [{ type: src_app_sevices_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }, { type: src_app_sevices_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"] }, { type: src_app_sevices_discounts_service__WEBPACK_IMPORTED_MODULE_5__["DiscountsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "vLfE":
/*!*******************************************!*\
  !*** ./src/app/sevices/cookie.service.ts ***!
  \*******************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CookieService {
    constructor() { }
    setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        const expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires;
    }
    getCookie(cname) {
        const name = cname + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i += 1) {
            let c = ca[i];
            while (c.charAt(0) === ' ')
                c = c.substring(1);
            if (c.indexOf(name) === 0)
                return c.substring(name.length, c.length);
        }
        return '';
    }
}
CookieService.ɵfac = function CookieService_Factory(t) { return new (t || CookieService)(); };
CookieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CookieService, factory: CookieService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_public_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/public/checkout/checkout.component */ "3loq");
/* harmony import */ var _components_public_test_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/public/test/test.component */ "JHJZ");
/* harmony import */ var _components_public_purchase_statement_purchase_statement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/public/purchase-statement/purchase-statement.component */ "WCbn");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth-guard.service */ "Hs9l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_admin_admin_buyers_admin_buyers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/admin-buyers/admin-buyers.component */ "FgzC");
/* harmony import */ var _components_admin_admin_category_admin_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/admin-category/admin-category.component */ "/wRq");
/* harmony import */ var _components_admin_admin_discout_code_admin_discout_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/admin-discout-code/admin-discout-code.component */ "aSMq");
/* harmony import */ var _components_admin_admin_homepage_admin_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin/admin-homepage/admin-homepage.component */ "lnid");
/* harmony import */ var _components_admin_admin_invoices_admin_invoices_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin/admin-invoices/admin-invoices.component */ "oEZD");
/* harmony import */ var _components_admin_admin_product_admin_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/admin-product/admin-product.component */ "uhI6");
/* harmony import */ var _components_auth_auth_auth_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/auth/auth/auth.component */ "mbCB");
/* harmony import */ var _components_public_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/public/about-us/about-us.component */ "QYNN");
/* harmony import */ var _components_public_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/public/contact/contact.component */ "DVJy");
/* harmony import */ var _components_public_content_content_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/public/content/content.component */ "GV//");
/* harmony import */ var _components_public_faq_faq_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/public/faq/faq.component */ "Rttg");
/* harmony import */ var _components_public_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/public/product-list/product-list.component */ "GIQH");
/* harmony import */ var _components_public_product_product_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/public/product/product.component */ "g3NY");
/* harmony import */ var _pages_admin_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/admin/admin-layout/admin-layout.component */ "XhIz");
/* harmony import */ var _pages_public_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/public/public-layout/public-layout.component */ "m82/");
/* harmony import */ var _components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/auth/logout/logout.component */ "UiRp");
/* harmony import */ var _components_public_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/public/privacy/privacy.component */ "8QaN");
/* harmony import */ var _components_public_payment_statement_payment_statement_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/public/payment-statement/payment-statement.component */ "WGzu");
/* harmony import */ var _components_public_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/public/order-success/order-success.component */ "WXvV");
/* harmony import */ var _components_public_order_fail_order_fail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/public/order-fail/order-fail.component */ "ii0D");
/* harmony import */ var _components_public_corvus_success_corvus_success_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/public/corvus-success/corvus-success.component */ "zTXk");
/* harmony import */ var _components_public_corvus_cancel_corvus_cancel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/public/corvus-cancel/corvus-cancel.component */ "007D");






























// prebaci sve na HR i id iz broja u naziv proizvoda. primjer: 'url/product/id' u 'url/proizvod/basser-m12'
const routes = [
    {
        path: '',
        component: _pages_public_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_20__["PublicLayoutComponent"],
        children: [
            { path: '', component: _components_public_content_content_component__WEBPACK_IMPORTED_MODULE_15__["ContentComponent"], pathMatch: 'full' },
            { path: 'home', redirectTo: '', pathMatch: 'full' },
            { path: 'faq', component: _components_public_faq_faq_component__WEBPACK_IMPORTED_MODULE_16__["FaqComponent"], pathMatch: 'full' },
            { path: 'contact', component: _components_public_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"], pathMatch: 'full' },
            { path: 'about', component: _components_public_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_13__["AboutUsComponent"], pathMatch: 'full' },
            { path: 'products', component: _components_public_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_17__["ProductListComponent"], pathMatch: 'full' },
            { path: 'product/:id', component: _components_public_product_product_component__WEBPACK_IMPORTED_MODULE_18__["ProductComponent"], pathMatch: 'full' },
            {
                path: 'corvus/success-order',
                component: _components_public_corvus_success_corvus_success_component__WEBPACK_IMPORTED_MODULE_26__["CorvusSuccessComponent"],
                pathMatch: 'full',
            },
            {
                path: 'corvus/cancel-order',
                component: _components_public_corvus_cancel_corvus_cancel_component__WEBPACK_IMPORTED_MODULE_27__["CorvusCancelComponent"],
                pathMatch: 'full',
            },
            {
                path: 'order-success/:buyer',
                component: _components_public_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_24__["OrderSuccessComponent"],
                pathMatch: 'full',
            },
            {
                path: 'order-fail/:buyer',
                component: _components_public_order_fail_order_fail_component__WEBPACK_IMPORTED_MODULE_25__["OrderFailComponent"],
                pathMatch: 'full',
            },
            { path: 'account', component: _components_auth_auth_auth_component__WEBPACK_IMPORTED_MODULE_12__["AuthComponent"], pathMatch: 'full' },
            { path: 'logout', component: _components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_21__["LogoutComponent"], pathMatch: 'full' },
            {
                path: 'privacy-statement',
                component: _components_public_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_22__["PrivacyComponent"],
                pathMatch: 'full',
            },
            {
                path: 'payment-statement',
                component: _components_public_payment_statement_payment_statement_component__WEBPACK_IMPORTED_MODULE_23__["PaymentStatementComponent"],
                pathMatch: 'full',
            },
            {
                path: 'purchase-statement',
                component: _components_public_purchase_statement_purchase_statement_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseStatementComponent"],
                pathMatch: 'full',
            },
            { path: 'test', component: _components_public_test_test_component__WEBPACK_IMPORTED_MODULE_1__["TestComponent"], pathMatch: 'full' },
            { path: 'checkout', component: _components_public_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_0__["CheckoutComponent"], pathMatch: 'full' },
        ],
    },
    {
        path: 'admin',
        component: _pages_admin_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_19__["AdminLayoutComponent"],
        children: [
            { path: '', component: _components_admin_admin_homepage_admin_homepage_component__WEBPACK_IMPORTED_MODULE_9__["AdminHomepageComponent"], pathMatch: 'full' },
            { path: 'home', component: _components_admin_admin_homepage_admin_homepage_component__WEBPACK_IMPORTED_MODULE_9__["AdminHomepageComponent"], pathMatch: 'full' },
            { path: 'products', component: _components_admin_admin_product_admin_product_component__WEBPACK_IMPORTED_MODULE_11__["AdminProductComponent"], pathMatch: 'full' },
            {
                path: 'categories',
                component: _components_admin_admin_category_admin_category_component__WEBPACK_IMPORTED_MODULE_7__["AdminCategoryComponent"],
                pathMatch: 'full',
            },
            {
                path: 'discounts',
                component: _components_admin_admin_discout_code_admin_discout_code_component__WEBPACK_IMPORTED_MODULE_8__["AdminDiscoutCodeComponent"],
                pathMatch: 'full',
            },
            { path: 'buyers', component: _components_admin_admin_buyers_admin_buyers_component__WEBPACK_IMPORTED_MODULE_6__["AdminBuyersComponent"], pathMatch: 'full' },
            {
                path: 'invoices',
                component: _components_admin_admin_invoices_admin_invoices_component__WEBPACK_IMPORTED_MODULE_10__["AdminInvoicesComponent"],
                pathMatch: 'full',
            },
            { path: 'logout', component: _components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_21__["LogoutComponent"], pathMatch: 'full' },
            // { path: 'prijava', component: LoginComponent, pathMatch: 'full', canActivate: [NotLoggedGuard] },
            // { path: 'zaboravljena-lozinka', component: ZaboravljenaLozinkaComponent, pathMatch: 'full', canActivate: [NotLoggedGuard]  },
            // { path: 'zaboravljena-lozinka/:kod', component: ZaboravljenaLozinkaResetComponent, pathMatch: 'full', canActivate: [NotLoggedGuard]  },
            { path: '**', redirectTo: 'home' },
        ],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vvq5":
/*!*********************************************!*\
  !*** ./src/app/sevices/invoices.service.ts ***!
  \*********************************************/
/*! exports provided: InvoicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesService", function() { return InvoicesService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class InvoicesService {
    constructor(http) {
        this.http = http;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].domain + "admin/invoices";
        this.token = localStorage.getItem("jwt");
    }
    getAll() {
        return this.http
            .get(this.URL + "/all", { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    getActive() {
        return this.http.get(this.URL + "/active", { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    getById(id) {
        return this.http.get(this.URL + "/get/" + id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    add(inv) {
        const data = {
            brojRacuna: 0,
            id: 0,
            datumIzdavanja: inv.datumIzdavanja,
            datumSlanja: null,
            guid: "",
            izbrisano: false,
            komentarNarudzbe: inv.komentarNarudzbe,
            pracenjePosiljke: "",
            stavke: inv.stavke,
            kupacId: inv.kupacId,
            kupac: inv.kupac
        };
        return this.http.post(this.URL + "/add", data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    edit(inv) {
        const data = {
            brojRacuna: 0,
            id: 0,
            datumIzdavanja: inv.datumIzdavanja,
            datumSlanja: null,
            guid: "",
            izbrisano: false,
            komentarNarudzbe: inv.komentarNarudzbe,
            pracenjePosiljke: "",
            stavke: inv.stavke,
            kupacId: inv.kupacId,
            kupac: inv.kupac
        };
        return this.http.post(this.URL + "/update/" + inv.id, data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    delete(id) {
        return this.http.get(this.URL + "/delete/" + id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
    getNextInvoiceNumber() {
        return this.http.get(this.URL + "/next", { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            }) });
    }
}
InvoicesService.ɵfac = function InvoicesService_Factory(t) { return new (t || InvoicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
InvoicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InvoicesService, factory: InvoicesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InvoicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "yHTb":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
}


/***/ }),

/***/ "yynU":
/*!********************************************!*\
  !*** ./src/app/sevices/payment.service.ts ***!
  \********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var _models_corvusVerify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/corvusVerify */ "mvZR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");






class PaymentService {
    constructor(http) {
        this.http = http;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].domain + 'public/cart/';
    }
    pay(order) {
        return this.http.post(this.URL + 'placeOrder', order, {
            observe: 'response',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        });
    }
    confirmCorvusPayment(orderNumber, signature, language, approvalCode, xsrfToken) {
        var data = new _models_corvusVerify__WEBPACK_IMPORTED_MODULE_0__["CorvusVerify"]();
        data.orderNumber = orderNumber;
        data.signature = signature;
        data.language = language;
        data.approvalCode = approvalCode;
        return this.http.post(this.URL + 'corvusVerify', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': xsrfToken
            }),
        });
    }
    cancelCorvusPayment(orderNumber, language, xsrfToken) {
        var data = new _models_corvusVerify__WEBPACK_IMPORTED_MODULE_0__["CorvusVerify"]();
        data.orderNumber = orderNumber;
        data.signature = '';
        data.language = language;
        data.approvalCode = '-1';
        return this.http.post(this.URL + 'corvusCancel', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': xsrfToken
            }),
        });
    }
    postCorvus(paymentUrl, parameters, xsrfToken) {
        var paramString = '';
        for (let i = 0; i < parameters.length; i++) {
            const p = parameters[i];
            paramString = paramString + p['Key'].toString() + '=' + p['Value'].toString();
            if (i != (parameters.length - 1)) {
                paramString = paramString + '&';
            }
        }
        console.info('Parameters string: [' + paramString + ']');
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromString: paramString });
        return this.http.post(paymentUrl, params, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': xsrfToken
            })
        });
    }
}
PaymentService.ɵfac = function PaymentService_Factory(t) { return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PaymentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PaymentService, factory: PaymentService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PaymentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zTXk":
/*!******************************************************************************!*\
  !*** ./src/app/components/public/corvus-success/corvus-success.component.ts ***!
  \******************************************************************************/
/*! exports provided: CorvusSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorvusSuccessComponent", function() { return CorvusSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_sevices_payment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sevices/payment.service */ "yynU");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CorvusSuccessComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Jurim!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CorvusSuccessComponent {
    constructor(route, _paymentService, toastr, router) {
        this.route = route;
        this._paymentService = _paymentService;
        this.toastr = toastr;
        this.router = router;
    }
    ngOnInit() {
        this.orderNumber = this.route.snapshot.queryParamMap.get('order_number');
        this.language = this.route.snapshot.queryParamMap.get('language');
        this.approvalCode = this.route.snapshot.queryParamMap.get('approval_code');
        this.signature = this.route.snapshot.queryParamMap.get('signature');
        console.log('orderNumber: ' +
            this.orderNumber +
            ' lang:' +
            this.language +
            ' approvalCode:' +
            this.approvalCode +
            ' signature:' +
            this.signature +
            ' xsrfToken:' +
            localStorage.getItem('X-XSRF-TOKEN').toString());
        this._paymentService
            .confirmCorvusPayment(this.orderNumber, this.signature, this.language, this.approvalCode, localStorage.getItem('X-XSRF-TOKEN').toString())
            .subscribe((data) => {
            if (data['value']['statusCode'] == 0) {
                window.location.href = 'order-success/' + data['value']['buyerId'].toString();
                // this.router.navigate([
                //   'order-success/' + data['value']['buyerId'].toString(),
                // ]);
            }
            else {
                window.location.href = 'order-fail/' + data['value']['buyerId'].toString();
                // this.router.navigate([
                //   'order-fail/' + data['value']['buyerId'].toString(),
                // ]);
            }
        });
    }
}
CorvusSuccessComponent.ɵfac = function CorvusSuccessComponent_Factory(t) { return new (t || CorvusSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sevices_payment_service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CorvusSuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CorvusSuccessComponent, selectors: [["app-corvus-success"]], decls: 1, vars: 1, consts: [["class", "loading-overlay", 4, "ngIf"], [1, "loading-overlay"], ["aria-hidden", "false", "role", "status", 1, "text-center"], ["alt", "cascadus pinguin with rocket - loading", "src", "../../../../assets/pinguin-rocket.png", 1, "spinner-pinguin", 2, "height", "100px", "width", "100px"], [1, "grey-text", "d-block"]], template: function CorvusSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CorvusSuccessComponent_div_0_Template, 5, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL2NvcnZ1cy1zdWNjZXNzL2NvcnZ1cy1zdWNjZXNzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CorvusSuccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-corvus-success',
                templateUrl: './corvus-success.component.html',
                styleUrls: ['./corvus-success.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_sevices_payment_service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map