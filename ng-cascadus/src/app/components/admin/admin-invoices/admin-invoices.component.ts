import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Buyer } from 'src/app/models/buyer';
import { DiscountCode } from 'src/app/models/discountCode';
import { Invoice } from 'src/app/models/invoice';
import { InvoiceItem } from 'src/app/models/invoiceItem';
import { Product } from 'src/app/models/product';
import { BuyersService } from 'src/app/sevices/buyers.service';
import { InvoicesService } from 'src/app/sevices/invoices.service';
import { ProductsService } from 'src/app/sevices/products.service';
import { DiscountsService } from 'src/app/sevices/discounts.service';

@Component({
  selector: 'app-admin-invoices',
  templateUrl: './admin-invoices.component.html',
  styleUrls: ['./admin-invoices.component.scss'],
})
export class AdminInvoicesComponent implements OnInit {
  title = 'Admin - Invoices';
  disabledBtn: HTMLButtonElement;
  showInactive: Boolean;

  addForm: FormGroup;
  editForm: FormGroup;
  removeForm: FormGroup;
  addFormShown: Boolean;
  editFormShown: Boolean;
  removeFormShown: Boolean;

  invoices: Array<Invoice>;
  invoice: Invoice;
  products: Array<Product>;
  buyers: Array<Buyer>;
  discounts: Array<DiscountCode>;

  constructor(
    private invoicesService: InvoicesService,
    private buyersService: BuyersService,
    private productsService: ProductsService,
    private discountsService: DiscountsService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.invoices = new Array<Invoice>();
    this.buyers = new Array<Buyer>();
    this.products = new Array<Product>();
    this.discounts = new Array<DiscountCode>();
    this.showInactive = false;
    this.disabledBtn = null;
  }

  OnReloadClick() {
    this.invoices = [];
    this.invoices = new Array<Invoice>();
    if (this.showInactive) {
      this.invoicesService.getAll().subscribe((result) => {
        //console.log('UNPARSED: ' + JSON.stringify(result) + '\n\n');
        result.forEach((r) => {
          this.invoice = new Invoice();
          this.invoice.kupac = new Buyer();
          this.invoice.stavke = new Array<InvoiceItem>();

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
    } else {
      this.invoicesService.getActive().subscribe((result) => {
        result.forEach((r) => {
          this.invoice = new Invoice();
          this.invoice.kupac = new Buyer();
          this.invoice.stavke = new Array<InvoiceItem>();

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

  getDiscountDescription(pk: DiscountCode): String {
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

  ngOnInit(): void {
    this.initForms();
    document.title = this.title;
    this.addFormShown = false;
    this.editFormShown = false;
    this.removeFormShown = false;

    this.discountsService.getActive().subscribe((result) => {
      result.forEach((r) => {
        let d = new DiscountCode();
        Object.assign(d, r);
        this.discounts.push(d);
        // console.log(JSON.stringify(d));
      });
    });

    this.buyersService.getActiveBuyers().subscribe((result) => {
      this.buyers = [];
      this.buyers = new Array<Buyer>();
      result.forEach((r) => {
        let b = new Buyer();
        Object.assign(b, r);
        this.buyers.push(b);
        // console.log(JSON.stringify(b));
      });
    });

    this.productsService.getActive().subscribe((result) => {
      this.products = [];
      this.products = new Array<Product>();
      result.forEach((r) => {
        let p = new Product();
        Object.assign(p, r);
        this.products.push(p);
        // console.log(JSON.stringify(p));
      });
    });

    this.OnReloadClick();
  }

  getAddressString(b: Buyer): String {
    return b.ulica + ' ' + b.kucniBroj + ', ' + b.postanskiBroj + ', ' + b.grad;
  }

  initForms() {
    this.addForm = this.fb.group({
      addBuyer: this.fb.array(this.buyers),
      addOrderComment: new FormControl('', Validators.required),
      addProduct: this.fb.array(this.products),
      addQuantity: new FormControl('', Validators.required),
      addDiscount: this.fb.array(this.discounts),
    });

    this.editForm = this.fb.group({
      editId: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      editName: new FormControl({ value: '' }, Validators.required),
      editCategoryId: new FormControl({ value: '' }, Validators.required),
      editHtml: new FormControl({ value: '' }, Validators.required),
      editCharacteristics: new FormControl({ value: '' }, Validators.required),
      editDescription: new FormControl({ value: '' }, Validators.required),
      editPrice: new FormControl({ value: '' }, Validators.required),
      editTimesSold: new FormControl({ value: '' }, Validators.required),
      editActive: new FormControl({ value: '' }, Validators.required),
    });

    this.removeForm = this.fb.group({
      removeId: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      removeName: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      removeCategoryId: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      removeHtml: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      removeCharacteristics: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      removeDescription: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      removePrice: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      removeTimesSold: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
      removeActive: new FormControl(
        { value: '', disabled: true },
        Validators.required
      ),
    });
  }

  OnShowActiveChange(event: Event): void {
    this.showInactive = !this.showInactive;
    this.OnReloadClick();
  }

  //Add functions
  addBtn(event: Event): void {
    this.hideAllForms();
    this.resetAllForms();

    if (this.disabledBtn != null) {
      this.disabledBtn.disabled = false;
    }
    this.disabledBtn = event.target as HTMLButtonElement;
    this.disabledBtn.disabled = true;
    this.addFormShown = true;
  }

  OnAddCancel(): void {
    this.resetAllForms();
    this.hideAllForms();
    this.disabledBtn.disabled = false;
  }

  OnAddConfirm(): void {
    this.disabledBtn.disabled = false;
    let inv = new Invoice();
    var date = new Date();
    inv.datumIzdavanja = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDay()
    );
    inv.komentarNarudzbe;
    inv.izbrisano = false;

    // console.log(JSON.stringify(inv));
    this.invoicesService.add(inv).subscribe(
      (result) => {
        this.toastr.success('Akcija uspješna!', 'Cascadus sustav');
        this.OnReloadClick();
      },
      (error) => {
        this.toastr.success(error, 'Cascadus sustav');
      }
    );
    this.hideAllForms();
    this.resetAllForms();
  }
}
