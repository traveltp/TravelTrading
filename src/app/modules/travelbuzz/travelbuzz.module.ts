import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule
  ],
  declarations: [CardComponent, FiltersComponent, FormComponent, HomeComponent, SliderComponent],
  exports: [CardComponent, FiltersComponent, FormComponent, HomeComponent, SliderComponent]
})
export class TravelbuzzModule { }
