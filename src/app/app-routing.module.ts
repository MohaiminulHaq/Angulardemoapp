import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoniComponent} from './roni/roni.component';
import {RoniTwoComponent} from './roni-two/roni-two.component';

const routes: Routes = [
   {path: 'roni' , component: RoniComponent},
   {path: '' , component: RoniTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
