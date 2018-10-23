import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchAddressComponent } from './search-address.component';

const routes: Routes = [
  { path: '', component: SearchAddressComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class SearchAddressRoutingModule { }
