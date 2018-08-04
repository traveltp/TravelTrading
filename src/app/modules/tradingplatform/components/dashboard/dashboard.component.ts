import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HTTPService } from '../../../providers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  numbers: Array<number>;
  countData: any;
  cityUpdatedData: any;
  constructor(private router: Router, private http: HTTPService) {
    this.numbers = Array(25).fill(1);
   }

  ngOnInit() {
    this.http.processGetRequest("http://172.22.184.26:4000/locationCount/getLocationsCount", "").subscribe((data: any) => {
      this.countData = data;
    });
    setInterval(()=>{
      this.http.processGetRequest("http://172.22.184.26:4000/locationCount/getLocationsCount", "").subscribe((data: any) => {
        for (let index = 0; index < this.countData.length; index++) {
          if (this.countData[index].count < data[index].count) {
            this.cityUpdatedData = this.countData[index]._id;
          }
          this.countData = data;
        }
      });
    },10000)
  }
  redirectToGrid(city) {
    this.router.navigate(['/trading-grid', {city: city}]);
  }

}
