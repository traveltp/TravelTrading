import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TradingHomeComponent } from './components/trading-home/trading-home.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
    
  ],
  declarations: [TradingHomeComponent],
  exports: [TradingHomeComponent]
})
export class TradingplatformModule { }
