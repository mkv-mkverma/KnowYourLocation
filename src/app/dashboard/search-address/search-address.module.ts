import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchAddressComponent } from './search-address.component';
import { SearchAddressRoutingModule } from './search-address-routing.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    AgmCoreModule,
    CommonModule,
    SearchAddressRoutingModule
  ],
  declarations: [ SearchAddressComponent ]
})
export class SearchAddressModule { }
