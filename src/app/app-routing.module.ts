import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'reactive',
    loadChildren: ()=> import('./reactive/reactive-routing.module').then(m=>m.ReactiveRoutingModule),
  },
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth-routing.module').then(m=>m.AuthRoutingModule),
  },
  {
    path:'**',
    redirectTo:'reactive'
  },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
