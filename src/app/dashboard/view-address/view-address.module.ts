import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAddressComponent } from './view-address.component';
import { ViewAddressRoutingModule } from './view-address-routing.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    ViewAddressRoutingModule,
    AgmCoreModule
  ],
  declarations: [ ViewAddressComponent ]
})
export class ViewAddressModule { }
