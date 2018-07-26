import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "../../../../../../node_modules/@ng-bootstrap/ng-bootstrap";
import { HttpClient } from "../../../../../../node_modules/@angular/common/http";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnInit {
  images: Array<string> = [
    "https://picsum.photos/900/500?image=1",
    "https://picsum.photos/900/500?image=2",
    "https://picsum.photos/900/500?image=3"
  ];
  constructor(public ngbCarouselConfig: NgbCarouselConfig, public http: HttpClient) {
    //ngbCarouselConfig.keyboard=true;
  }
  ngOnInit() {

    this.ngbCarouselConfig.keyboard = true;
    this.ngbCarouselConfig.pauseOnHover = true;
  }


}
