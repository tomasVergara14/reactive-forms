import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from 'src/app/shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required, Validators.pattern(customValidators.emailPattern)]],
    username:['', [Validators.required, customValidators.cantBeStrider]],
    password:['',[Validators.required, Validators.minLength(6)]],
    password2:['',[Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
  ){}

  isValidField(){
    //TODO: obtener validacion de un servicio
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

}
