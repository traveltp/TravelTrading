import { Component, OnInit } from '@angular/core';
import {HTTPService} from './../../../providers/';
import { HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http:HTTPService) { }

  ngOnInit() {
  	const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer OEW4buy0voNY4LUlXjbw4Qa7zu1Sdi'
    })
   };
  	this.http.processGetRequest("https://api.predicthq.com/v1/events/?limit=10&location_around.origin=18.912352,72.821922", httpOptions).subscribe(
        function(data){
          //primus data here
          console.log(data);
        }
  		);
  }

}
