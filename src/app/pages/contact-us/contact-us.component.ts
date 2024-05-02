import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ButtonModule, InputTextareaModule ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  contactFormGroup = new FormGroup({
    nameFormControl: new FormControl(''),
    emailFormControl: new FormControl(''),
    messageFormControl: new FormControl(''),
  })

  handleSubmit() {
    console.log(this.contactFormGroup.value);
    //this.contactFormGroup.reset();
  }

  constructor(
   // private route: ActivatedRoute,
   // public globalService: GlobalService
  ) {}
}
