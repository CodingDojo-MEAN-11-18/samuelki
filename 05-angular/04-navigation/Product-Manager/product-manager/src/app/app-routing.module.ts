import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: AllproductsComponent },
  { path: 'products/new', component: NewproductComponent },
  { path: 'products/edit/:id', component: EditproductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
