import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

import { AppComponent } from './app.component';
import { TravelbuzzModule } from './modules/travelbuzz/travelbuzz.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GooglePlaceModule,
    TravelbuzzModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
