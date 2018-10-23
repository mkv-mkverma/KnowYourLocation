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
      apiKey: "AIzaSyDGeFJ6LdIE8jTJRgymfzP7HcL3Ll2CYfw",
      libraries: ["places"]
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
