import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../../../data.service";
import { HTTPService } from '../../../../modules/providers';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-traveller-home',
  templateUrl: './traveller-home.component.html',
  styleUrls: ['./traveller-home.component.scss']
})
export class TravellerHomeComponent implements OnInit {

  constructor(private http: HTTPService, private route: ActivatedRoute) { }

  private id: any;
  private hotels: any;
  private airRecos: any;
  private hotelData: any;
  private currency: any;

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        this.getRecos(params.id).subscribe(
          (data: any) => {
            if (data != null && data[0] != null) {
              if (data[0].AirRecos != null && data[0].AirRecos.air != null) {
                var parsedData:any = JSON.parse(data[0].AirRecos.air);
                this.airRecos = parsedData.results;
                this.currency = parsedData.currency;
              }
              if (data[0].HotelRecos != null && data[0].HotelRecos.hotel != null) {
                this.hotelData = JSON.parse(data[0].HotelRecos.hotel);
              }
            }
          });
      }
    );

    // this.getHotelData().subscribe(
    //   (data: any) => {
    //     this.hotelData = data;
    //   });

    // this.getAirData().subscribe(
    //   (data: any) => {
    //     this.airRecos = data.results;
    //     this.currency = data.currency;
    //   });
  }

  getHotelData() {
    var urlRequest = "https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?apikey=lA2oAYa7Hkie9dHntgLxhnkVoSAGrd7k&location=NCE&check_in=2018-09-01&check_out=2018-09-28";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer OEW4buy0voNY4LUlXjbw4Qa7zu1Sdi'
      })
    };

    return this.http.processGetRequest(urlRequest, httpOptions);
  }

  getAirData() {
    var urlRequest = "https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=lA2oAYa7Hkie9dHntgLxhnkVoSAGrd7k&origin=NCE&destination=BLR&departure_date=2018-09-01&return_date=2018-09-28";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer OEW4buy0voNY4LUlXjbw4Qa7zu1Sdi'
      })
    };

    return this.http.processGetRequest(urlRequest, httpOptions);
  }

  getCarData() {
    var urlRequest = "https://api.sandbox.amadeus.com/v1.2/cars/search-circle?apikey=lA2oAYa7Hkie9dHntgLxhnkVoSAGrd7k&latitude=35.1504&longitude=-114.57632&radius=42&pick_up=2018-12-07&drop_off=2018-12-08";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer OEW4buy0voNY4LUlXjbw4Qa7zu1Sdi'
      })
    };

    return this.http.processGetRequest(urlRequest, httpOptions);
  }

  // Gets both air and hotel data from mongoDB
  getRecos(id: string) {
    // var urlRequest = "http://172.22.184.26:4000/recos/getRecos/5b65c70d228a7e40c56888c0";
    var urlRequest = "http://172.22.184.26:4000/recos/getRecos/" + id;
    const httpOptions = {};

    return this.http.processGetRequest(urlRequest, httpOptions);
  }

}
