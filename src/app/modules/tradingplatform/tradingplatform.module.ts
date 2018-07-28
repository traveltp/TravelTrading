import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TradingHomeComponent } from './components/trading-home/trading-home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
    
  ],
  declarations: [TradingHomeComponent, DashboardComponent],
  exports: [TradingHomeComponent]
})
export class TradingplatformModule { }
