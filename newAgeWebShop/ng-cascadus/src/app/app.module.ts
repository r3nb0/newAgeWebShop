import { CheckoutComponent } from './components/public/checkout/checkout.component';
import { AuthGuard } from './guards/auth-guard.service';
import { BuyersService } from './sevices/buyers.service';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { PublicLayoutComponent } from './pages/public/public-layout/public-layout.component';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './pages/admin/admin-layout/admin-layout.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { ProductListComponent } from './components/public/product-list/product-list.component';
import { ProductComponent } from './components/public/product/product.component';
import { ProductCardComponent } from './components/public/product-card/product-card.component';
import { AdminSideBarComponent } from './components/admin/admin-side-bar/admin-side-bar.component';
import { AdminHomepageComponent } from './components/admin/admin-homepage/admin-homepage.component';
import { NavbarComponent } from './components/public/navbar/navbar.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ContentComponent } from './components/public/content/content.component';
import { FaqComponent } from './components/public/faq/faq.component';
import { OrderProductComponent } from './components/public/order-product/order-product.component';
import { AboutUsComponent } from './components/public/about-us/about-us.component';
import { OrderFailComponent } from './components/public/order-fail/order-fail.component';
import { OrderSuccessComponent } from './components/public/order-success/order-success.component';
import { AdminDiscoutCodeComponent } from './components/admin/admin-discout-code/admin-discout-code.component';
import { AdminProductComponent } from './components/admin/admin-product/admin-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesService } from './sevices/categories.service';
import { AdminBuyersComponent } from './components/admin/admin-buyers/admin-buyers.component';
import { AdminInvoicesComponent } from './components/admin/admin-invoices/admin-invoices.component';
import { AdminCategoryComponent } from './components/admin/admin-category/admin-category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DiscountsService } from './sevices/discounts.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsService } from './sevices/products.service';
import { InvoicesService } from './sevices/invoices.service';
import { AuthService } from './sevices/auth.service';
import { AuthComponent } from './components/auth/auth/auth.component';
import { JwtModule } from '@auth0/angular-jwt';
import { RegisterComponent } from './components/auth/register/register.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { EmailsService } from './sevices/emails.service';
import { ToastrModule } from 'ngx-toastr';
import { PrivacyComponent } from './components/public/privacy/privacy.component';
import { PaymentStatementComponent } from './components/public/payment-statement/payment-statement.component';
import { PurchaseStatementComponent } from './components/public/purchase-statement/purchase-statement.component';
import { PaymentService } from './sevices/payment.service';
import { CorvusCancelComponent } from './components/public/corvus-cancel/corvus-cancel.component';
import { CorvusSuccessComponent } from './components/public/corvus-success/corvus-success.component';
import { CookieService } from './sevices/cookie.service';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ContentComponent,
    FaqComponent,
    OrderProductComponent,
    AboutUsComponent,
    PublicLayoutComponent,
    AdminLayoutComponent,
    ContactComponent,
    ProductComponent,
    ProductListComponent,
    ContentComponent,
    ProductCardComponent,
    AdminCategoryComponent,
    AdminProductComponent,
    AdminDiscoutCodeComponent,
    AdminSideBarComponent,
    AdminHomepageComponent,
    OrderFailComponent,
    OrderSuccessComponent,
    AdminBuyersComponent,
    AdminInvoicesComponent,
    LoginComponent,
    AuthComponent,
    RegisterComponent,
    LogoutComponent,
    PrivacyComponent,
    PaymentStatementComponent,
    PurchaseStatementComponent,
    CheckoutComponent,
    CorvusCancelComponent,
    CorvusSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:4200", "cascadus.hr", "api.cascadus.hr"],
        disallowedRoutes: []
      }
    }),
    ToastrModule.forRoot(),

  ],
  providers: [
    AuthService,
    AuthGuard,
    CategoriesService,
    BuyersService,
    DiscountsService,
    ProductsService,
    InvoicesService,
    EmailsService,
    PaymentService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
