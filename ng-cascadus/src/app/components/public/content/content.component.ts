import { ToastrService } from 'ngx-toastr';
import { EmailsService } from 'src/app/sevices/emails.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  subscribeForm: FormGroup;
  constructor(private fb: FormBuilder,
    private emailsService: EmailsService,
    private toastr: ToastrService,
    private titleService: Title) {
        
  }
  ngOnInit(): void {
    this.initForms();
    this.titleService.setTitle("Cascadus - Početna stranica");
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

