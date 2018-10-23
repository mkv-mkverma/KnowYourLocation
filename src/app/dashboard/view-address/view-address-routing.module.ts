import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAddressComponent } from './view-address.component';

const routes: Routes = [
  { path: '', component: ViewAddressComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class ViewAddressRoutingModule { }
