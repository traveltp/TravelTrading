import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { HTTPService } from '../../../providers';

@Component({
  selector: 'app-tradegrid',
  templateUrl: './tradegrid.component.html',
  styleUrls: ['./tradegrid.component.scss']
})
export class TradegridComponent implements OnInit {

  public interestData: any;
  constructor(private route: ActivatedRoute, private http: HTTPService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.http.processGetRequest("http://172.22.184.26:4000/location/getInterests/" + params.city, "").subscribe((data: any) => {
      this.interestData = data;
    });
   });
  }
  attachRecos(_id) {
    this.http.processGetRequest("http://172.22.184.26:4000/recos/getRecos/" + _id, "").subscribe(() => {
      alert("request sent");
    });;
  }
}
