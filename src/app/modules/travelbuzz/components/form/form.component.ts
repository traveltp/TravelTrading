import { Component, OnInit, Input } from "@angular/core";
import { HTTPService } from "../../../providers";
import { DataService } from "../../../../data.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  @Input() source: string;
  @Input() destination: string = "";
  @Input() destinationCity: string = "London";
  @Input() email: string;
  @Input() startDate: string = "2018-08-03";
  @Input() endDate: string = "2018-08-05";
  @Input() pax: string;
  @Input() modeOfTravel: string;
  @Input() country: string = "India";
  public loading: boolean = false;
  public placeLocation: Array<string>;
  public noOfAdults: string;
  public noOfChildren: string;
  public showSnackBar: boolean = false;

  field1 = {
    name: "Source",
    type: "text",
    iconSide: "left-side",
    icon: "fa fa-search"
  };
  field2 = {
    name: "Destination",
    type: "text",
    iconSide: "left-side",
    icon: "fa fa-search"
  };
  field3 = {
    name: "Email",
    type: "text",
    iconSide: "left-side",
    icon: "fa fa-envelope"
  };
  field4 = {
    name: "Date",
    type: "select",
    iconSide: "left-side",
    icon: "fa fa-calendar"
  };
  field5 = {
    name: "Pax",
    type: "select",
    iconSide: "left-side",
    icon: "fa fa-users"
  };
  constructor(private http: HTTPService, private data: DataService) {}

  ngOnInit() {
    console.log(this.source);
    this.data.dataObserver.subscribe((data: any) => {
      if (data != null && data.location != null) {
        this.startDate = data.start;
        this.endDate = data.end;
        this.placeLocation = data.location;
        this.destination = data.destination;
        this.destinationCity = data.city;
        this.country = data.country;
      }
    });
  }

  submitInterest() {
    console.log(this.email);
    this.loading = true;
    this.http.processPostRequest("http://localhost:4000/interest/postInterest", {
      source: {
        name: "Bengaluru",
        city: "Bangalore",
        lat: "12.972442",
        long: "77.580643",
        country: "India"
      },
      destination: {
        name: this.destinationCity,
        lat: this.placeLocation[1],
        long: this.placeLocation[0],
        country: this.country,
        city: this.destinationCity
      },
      pax: {
        noOfAdults: this.noOfAdults,
        noOfChildren: this.noOfChildren
      },
      email: this.email,
      fromDate: this.startDate,
      toDate: this.endDate,
      status: 0,
    }, "")
      .subscribe(
        (data: any) => {
          this.showSnackBar = true;
          setTimeout(()=>{
            this.showSnackBar = false;
          },2000)
          console.log(data);
          this.loading = false;
        },
        error => {
          console.log(error);
          this.loading = false;
        }
      );
  }
}
