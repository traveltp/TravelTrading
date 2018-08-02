import { Component, OnInit } from "@angular/core";
import { HTTPService } from "./../../../providers/";
import { HttpHeaders } from "@angular/common/http";
import { DataService } from "../../../../data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private http: HTTPService, private data: DataService) {}
  public loading = false;
  public httpOptions:any;

  ngOnInit() {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer OEW4buy0voNY4LUlXjbw4Qa7zu1Sdi"
      })
    };
    this.getCurrentLocation();
  }
  // get user's current location
  getCurrentLocation() {
    if (navigator.geolocation) {
      this.loading = true;
      navigator.geolocation.getCurrentPosition(position => {
        var latitude: string = String(position.coords.latitude);
        var longitude: string = String(position.coords.longitude);
        var category: string = "sports";
        this.data.getEvents(latitude, longitude, category).subscribe(
          (data: any) => {
            console.log(data);
            this.loading = false;
          },
          error => {
            console.log(error);
            this.loading = false;
          }
        );
      });
    }
  }
}
