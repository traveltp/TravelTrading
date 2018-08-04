import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TradingHomeComponent } from './modules/tradingplatform/components/trading-home/trading-home.component';
import { TradegridComponent } from './modules/tradingplatform/components/tradegrid/tradegrid.component';
import { TravellerRecosComponent } from './modules/travellerportal/components/traveller-recos/traveller-recos.component';
import { TravellerHomeComponent } from './modules/travellerportal/components/traveller-home/traveller-home.component';
import { HomeComponent } from './modules/travelbuzz/components/home/home.component';
import { TradingplatformModule } from './modules/tradingplatform/tradingplatform.module';
import { TravelbuzzModule } from './modules/travelbuzz/travelbuzz.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'trading-home', component: TradingHomeComponent },
  { path: 'trading-grid', component: TradegridComponent},
  { path: 'traveller-home/:id', component: TravellerHomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [
    CommonModule,
    TradingplatformModule,
    TravelbuzzModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
