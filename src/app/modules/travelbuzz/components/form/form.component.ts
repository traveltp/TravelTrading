import { Component, OnInit, Input } from "@angular/core";
import { HTTPService } from "../../../providers";
import { HttpClient } from "../../../../../../node_modules/@angular/common/http";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  @Input() source: string = "";
  @Input() destination: string = "";
  @Input() destinationCity: string = "London";
  @Input() email: string = "ankursinghal@gmail.com";
  @Input() fromDate: string = "2018-08-03";
  @Input() toDate: string = "2018-08-05";
  @Input() pax: string;
  @Input() modeOfTravel: string;
  @Input() country: string = "India";
  public loading: boolean = false;

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
    name: "Destination City",
    type: "text",
    iconSide: "left-side",
    icon: "fa fa-building"
  };
  field4 = {
    name: "Email",
    type: "text",
    iconSide: "left-side",
    icon: "fa fa-envelope"
  };
  field5 = {
    name: "Date",
    type: "select",
    iconSide: "left-side",
    icon: "fa fa-calendar"
  };
  field6 = {
    name: "Pax",
    type: "select",
    iconSide: "left-side",
    icon: "fa fa-users"
  };
  field7 = {
    name: "Preferences",
    type: "select",
    iconSide: "left-side",
    icon: "fa fa-plane"
  };
  constructor(private http: HTTPService) {}

  ngOnInit() {}

  submitInterest() {
    this.loading = true;
    this.http.processPostRequest("http://localhost:4000/interest/postInterest", {
      source: {
        name: "Bengaluru",
        lat: "12.9437181",
        long: "77.6910817",
        country: "India"
      },
      destination: {
        name: this.destinationCity,
        lat: "12.971599",
        long: "77.594563",
        country: "Europe"
      },
      email: this.email,
      fromDate: this.fromDate,
      toDate: this.toDate,
      status: 0,
    }, "")
      .subscribe(
        (data: any) => {
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
