import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TravelbuzzModule } from './modules/travelbuzz/travelbuzz.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HTTPService } from './modules/providers/';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TravelbuzzModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [HTTPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
