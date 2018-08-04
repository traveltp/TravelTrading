import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AppComponent } from './app.component';
import { TravelbuzzModule } from './modules/travelbuzz/travelbuzz.module';
import { TradingplatformModule } from './modules/tradingplatform/tradingplatform.module';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HTTPService } from './modules/providers/';
import { TravellerHomeComponent } from './modules/travellerportal/components/traveller-home/traveller-home.component';
import { TravellerRecosComponent } from './modules/travellerportal/components/traveller-recos/traveller-recos.component';
import { AirRecoCardComponent } from './modules/travellerportal/components/air-reco-card/air-reco-card.component';
import { HotelCardComponent } from './modules/travellerportal/components/hotel-card/hotel-card.component';
import { CarRecoCardComponent } from './modules/travellerportal/components/car-reco-card/car-reco-card.component';
@NgModule({
  declarations: [
    AppComponent,
    TravellerHomeComponent,
    TravellerRecosComponent,
    AirRecoCardComponent,
    HotelCardComponent,
    CarRecoCardComponent
  ],
  imports: [
    BrowserModule,
    GooglePlaceModule,
    TravelbuzzModule,
    TradingplatformModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HTTPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
