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
  public loading: boolean = false;
  public showFilters: boolean = false;
  public selectedLocation: any = {};
  public source: string;
  public destination: string;
  public eventData: any;
  public showCarousel: boolean = false;
  public showOverlay: boolean = true;

  ngOnInit() {
    this.getCurrentLocation();
  }
  
  // get user's current location
  getCurrentLocation() {
    if (navigator.geolocation) {
      this.loading = true;
      navigator.geolocation.getCurrentPosition(position => {
        this.source = "Current Location";
        this.destination = "";
        this.selectedLocation = {
          latitude: String(position.coords.latitude),
          longitude: String(position.coords.longitude),
          category: "sports"
        };
        this.showFilters = true;
        // get events from predict HQ for current location
        this.data
          .getEvents(
            this.selectedLocation.latitude,
            this.selectedLocation.longitude,
            this.selectedLocation.category
          )
          .subscribe(
            (data: any) => {
              this.showCarousel = true;
              this.showOverlay = false;
              this.eventData = data.results;
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
