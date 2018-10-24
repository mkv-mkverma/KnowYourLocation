import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UtilsModule } from './utils/utils.module';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { HeaderComponent, FooterComponent } from './utils/components';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      // uncomment below code after generating google API key and replace 'YOUR_KEY' with actual key
      // apiKey: 'YOUR_KEY',
      libraries: ['places']
    }),
    BrowserModule,
    UtilsModule,
    AppRoutingModule,
    // DashboardRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
