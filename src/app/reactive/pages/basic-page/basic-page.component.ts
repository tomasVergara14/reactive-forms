import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


const rxt5090 = {
  name: 'RXT 5090',
  price: 2500,
  inStorage: 3
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})

export class BasicPageComponent implements OnInit {
  
  public myForm: FormGroup = this.fb.group({
    name:['' , [ Validators.required, Validators.minLength(3)]],
    price:[0, [ Validators.required, Validators.min(0)]],
    inStorage:[0, [ Validators.required, Validators.min(0)]],
  })

  constructor( private fb: FormBuilder){}

  ngOnInit(): void {
    this.myForm.reset( rxt5090 )
  }

  onSave(){
    if(this.myForm.invalid) return;

    console.log(this.myForm)


    this.myForm.reset({ price: 10, inStorage: 0 })

  }

}
