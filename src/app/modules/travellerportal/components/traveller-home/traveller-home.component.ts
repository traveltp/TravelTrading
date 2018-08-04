import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../../data.service";
import { HTTPService } from '../../../../modules/providers';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-traveller-home',
  templateUrl: './traveller-home.component.html',
  styleUrls: ['./traveller-home.component.scss']
})
export class TravellerHomeComponent implements OnInit {

  constructor(private http: HTTPService) { }

  private id: any;
  private hotels:any;
  private hotelData:any;

  ngOnInit() {
    this.id = "testParam";
    //this.hotelData = [];
    this.getCardDetails().subscribe(
        (data: any) => {
        	 this.hotelData = data;
        });
  }

   getCardDetails() {
  	var urlRequest = "https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?apikey=lA2oAYa7Hkie9dHntgLxhnkVoSAGrd7k&location=NCE&check_in=2018-09-01&check_out=2018-09-28";
  	const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer OEW4buy0voNY4LUlXjbw4Qa7zu1Sdi'
      })
    };

    return this.http.processGetRequest(urlRequest, httpOptions);
  }

}
