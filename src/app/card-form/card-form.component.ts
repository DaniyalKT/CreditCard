import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  cardForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
    cardNumber: new FormControl('', Validators.required),
    expiration: new FormControl('', Validators.required),
    securityCode : new FormControl('', Validators.required)
  })

  constructor() { }

  submitForm(){
    console.log(this.cardForm.value)
  }
  
  onResetForms(){
    this.cardForm.reset()
  }

  get f(){
    return this.cardForm.controls
  }

}
