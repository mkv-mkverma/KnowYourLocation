import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    // The path in AppRoutingModule is already set
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'search-address',
        loadChildren: './search-address/search-address.module#SearchAddressModule'
      },
      {
        path: 'view-address',
        loadChildren: './view-address/view-address.module#ViewAddressModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class DashboardRoutingModule { }
