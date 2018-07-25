import { NgModule } from '@angular/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import {NgbModule, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BookmarksHomeComponent } from './components/bookmarks-home/bookmarks-home.component';

@NgModule({
  imports: [
    CommonModule,
    GooglePlaceModule,
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule
  ],
  declarations: [CardComponent, FiltersComponent, FormComponent, HomeComponent, SliderComponent, BookmarksHomeComponent],
  providers: [NgbCarouselConfig],
  exports: [CardComponent, FiltersComponent, FormComponent, HomeComponent, SliderComponent]
})
export class TravelbuzzModule { }
