import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Module
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
//Components
import { RegisterPageComponent } from './pages/register-page/register-page.component';



@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
