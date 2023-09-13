import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/service/validators.service';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent {

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  })

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
  ){}


  isValidField( field: string ):boolean | null{
    return this.validatorService.isValidField(this.myForm, field)
  }

  getFieldError( field: string ): string | null{
    if( !this.myForm.controls[field]) return null

    const errors = this.myForm.controls[field].errors || {}
    
    for (const key of Object.keys(errors)) {
      switch( key ){
        case 'required':
          return 'This field must be completed';
        case 'requiredTrue':
          return 'this field must be true';
        default: break;
      }
    }

    return null;
  }


  onSubmit(){
    if( this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm)
  }

}
