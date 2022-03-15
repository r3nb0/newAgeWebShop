import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmailsService } from 'src/app/sevices/emails.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  subscribeForm: FormGroup;
  year: Number;

  constructor(
    private fb: FormBuilder,
    private emailsService: EmailsService,
    private toastr: ToastrService
  ) {
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {
    this.initForms();
  }

  initForms() {
    this.subscribeForm = this.fb.group({
      email: new FormControl('', Validators.required),
    });
  }

  subscribe(): void {
    if (this.subscribeForm.valid) {
      var email = this.subscribeForm.get('email').value;

      this.emailsService.subscribe(email).subscribe((result) => {
        if (result.toString() == "true") {
          this.toastr.success(
            'Od sada si služebno pretplaćen/a na naš newsletter. Nitko neće prije tebe saznati za opasne popuste!',
            'Newsletter',
            { timeOut: 1500 }
          );
        } else if (result.toString() == "false") {
          this.toastr.warning(
            'Već ti pretplaćen/a na naš newsletter. No cijenimo to što bi se pretplatio/la i dva puta!',
            'Newsletter',
            { timeOut: 1500 }
          );
        } else {
          this.toastr.warning(
            'Neuspješna pretplata na newsletter!',
            'Newsletter',
            { timeOut: 1500 }
          );
        }
      });
    }
  }
}
