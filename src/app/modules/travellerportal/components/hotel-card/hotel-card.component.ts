import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {

  private hotelDetails:any;
  @Input() hotelData;

  ngOnInit() {
  	this.hotelDetails = this.hotelData;
  }

}
