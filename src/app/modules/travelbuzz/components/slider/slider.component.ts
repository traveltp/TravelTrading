import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { HttpClient } from "@angular/common/http";
import { Config } from "../../../../../../node_modules/protractor";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
  /*styles: [
    `
      /deep/ @media only screen and (max-width: 1620px) {
        .carousel-item {
          max-height: 725px;
        }
      }
      /deep/ @media only screen and (min-width: 1621px) {
        .carousel-item {
          max-height: 1321px;
        }
      }
    `
  ]*/
})
export class SliderComponent implements OnInit {
  showOverlay: boolean = true;
  source: string = "Bangalore";
  destination: string = "Australia";
  // take images only with height greater than 700px
  images: Array<string> = [
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photoreference=CmRaAAAA3rYhFzi02Fojy2P3mssBf1bvxIyg7YvF8W-8NdMqNqQoMlTGW6N_nTrLZzB47RZSnQFmt24HLZGFjhopeX1btve7So09ubukWxWQKROOGaZSNTL4JdC_Hdvm4Tn5njHxEhCj7pyKTSceknLXsstVuXqyGhQq3F7Dfko__bzsSWLhd8Yj8sZnDg&key=AIzaSyATFcxyIdDzqUSvYzIslgAObXz4AhhCJfg",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photoreference=CmRaAAAAqjmxkXmbu-CiZCniyDS8epaJUubqGfx5e6iPveVftJ16zzUqnqAlY3WgwyHV7lvMvqJDnURhyqWF9KRcHqqAt47mft4IVmpEOIuRDFO2W2Jp_tD9PkE7cgqrcmul3iFqEhC0uOkpdXlBppIZWNVvgKi1GhS-s0Hr7sCZQ5FMpG837ViNwF2aVw&key=AIzaSyATFcxyIdDzqUSvYzIslgAObXz4AhhCJfg",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photoreference=CmRaAAAAKAf2yiLo1eieJ2u2-LEWoxbAOw2DnIYzDQxGXTV9_IqNAsnH1e8gCbv3Xv4qqBDgEi2MG7T1vjJEs9XpNgeBibRDdu5quSXHKKYVh4v4ZjXGXQaVq6XtRMTRJs4Ah9g1EhDVBGmLpTYv9dzRdno6QQmcGhQgym445NmosDt0MdU0nZkHechGuA&key=AIzaSyATFcxyIdDzqUSvYzIslgAObXz4AhhCJfg"
  ];
  constructor(
    private ngbCarouselConfig: NgbCarouselConfig,
    private http: HttpClient
  ) {}
  ngOnInit() {
    setTimeout(() => {
      this.showOverlay = false;
    }, 1500);
    this.ngbCarouselConfig.keyboard = true;
    this.ngbCarouselConfig.pauseOnHover = true;
  }
}
