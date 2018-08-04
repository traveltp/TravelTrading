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
  constructor(private router: Router, private http: HTTPService) {
    this.numbers = Array(25).fill(1);
   }

  ngOnInit() {
    this.http.processGetRequest("http://172.22.184.26:4000/locationCount/getLocationsCount", "").subscribe((data: any) => {
      console.log(data[0].count);
      this.countData = data;
    });
    setInterval(()=>{
      this.http.processGetRequest("http://172.22.184.26:4000/locationCount/getLocationsCount", "").subscribe((data: any) => {
        console.log(data[0].count);
        this.countData = data;
      });
    },10000)
  }
  redirectToGrid() {
    this.router.navigate(['/trading-grid']);
  }

}
