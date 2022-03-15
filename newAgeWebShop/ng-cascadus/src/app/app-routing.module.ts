import { CheckoutComponent } from './components/public/checkout/checkout.component';
import { TestComponent } from './components/public/test/test.component';
import { PurchaseStatementComponent } from './components/public/purchase-statement/purchase-statement.component';
import { AuthGuard } from './guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBuyersComponent } from './components/admin/admin-buyers/admin-buyers.component';
import { AdminCategoryComponent } from './components/admin/admin-category/admin-category.component';
import { AdminDiscoutCodeComponent } from './components/admin/admin-discout-code/admin-discout-code.component';
import { AdminHomepageComponent } from './components/admin/admin-homepage/admin-homepage.component';
import { AdminInvoicesComponent } from './components/admin/admin-invoices/admin-invoices.component';
import { AdminProductComponent } from './components/admin/admin-product/admin-product.component';
import { AuthComponent } from './components/auth/auth/auth.component';
import { AboutUsComponent } from './components/public/about-us/about-us.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { ContentComponent } from './components/public/content/content.component';
import { FaqComponent } from './components/public/faq/faq.component';
import { ProductListComponent } from './components/public/product-list/product-list.component';
import { ProductComponent } from './components/public/product/product.component';
import { AdminLayoutComponent } from './pages/admin/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './pages/public/public-layout/public-layout.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { PrivacyComponent } from './components/public/privacy/privacy.component';
import { PaymentStatementComponent } from './components/public/payment-statement/payment-statement.component';
import { OrderSuccessComponent } from './components/public/order-success/order-success.component';
import { OrderFailComponent } from './components/public/order-fail/order-fail.component';
import { CorvusSuccessComponent } from './components/public/corvus-success/corvus-success.component';
import { CorvusCancelComponent } from './components/public/corvus-cancel/corvus-cancel.component';

// prebaci sve na HR i id iz broja u naziv proizvoda. primjer: 'url/product/id' u 'url/proizvod/basser-m12'

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: ContentComponent, pathMatch: 'full' },
      { path: 'home', redirectTo: '', pathMatch: 'full' },
      { path: 'faq', component: FaqComponent, pathMatch: 'full' },
      { path: 'contact', component: ContactComponent, pathMatch: 'full' },
      { path: 'about', component: AboutUsComponent, pathMatch: 'full' },
      { path: 'products', component: ProductListComponent, pathMatch: 'full' },
      { path: 'product/:id', component: ProductComponent, pathMatch: 'full' },
      {
        path: 'corvus/success-order',
        component: CorvusSuccessComponent,
        pathMatch: 'full',
      },
      {
        path: 'corvus/cancel-order',
        component: CorvusCancelComponent,
        pathMatch: 'full',
      },
      {
        path: 'order-success/:buyer',
        component: OrderSuccessComponent,
        pathMatch: 'full',
      },
      {
        path: 'order-fail/:buyer',
        component: OrderFailComponent,
        pathMatch: 'full',
      },
      { path: 'account', component: AuthComponent, pathMatch: 'full' },
      { path: 'logout', component: LogoutComponent, pathMatch: 'full' },
      {
        path: 'privacy-statement',
        component: PrivacyComponent,
        pathMatch: 'full',
      },
      {
        path: 'payment-statement',
        component: PaymentStatementComponent,
        pathMatch: 'full',
      },
      {
        path: 'purchase-statement',
        component: PurchaseStatementComponent,
        pathMatch: 'full',
      },
      { path: 'test', component: TestComponent, pathMatch: 'full' },
      { path: 'checkout', component: CheckoutComponent, pathMatch: 'full' },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: AdminHomepageComponent, pathMatch: 'full' },
      { path: 'home', component: AdminHomepageComponent, pathMatch: 'full' },
      { path: 'products', component: AdminProductComponent, pathMatch: 'full' },
      {
        path: 'categories',
        component: AdminCategoryComponent,
        pathMatch: 'full',
      },
      {
        path: 'discounts',
        component: AdminDiscoutCodeComponent,
        pathMatch: 'full',
      },
      { path: 'buyers', component: AdminBuyersComponent, pathMatch: 'full' },
      {
        path: 'invoices',
        component: AdminInvoicesComponent,
        pathMatch: 'full',
      },
      { path: 'logout', component: LogoutComponent, pathMatch: 'full' },
      // { path: 'prijava', component: LoginComponent, pathMatch: 'full', canActivate: [NotLoggedGuard] },
      // { path: 'zaboravljena-lozinka', component: ZaboravljenaLozinkaComponent, pathMatch: 'full', canActivate: [NotLoggedGuard]  },
      // { path: 'zaboravljena-lozinka/:kod', component: ZaboravljenaLozinkaResetComponent, pathMatch: 'full', canActivate: [NotLoggedGuard]  },
      { path: '**', redirectTo: 'home' },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
