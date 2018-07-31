import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../../../../data.service";
import { SmoothScrollService } from "../../../smoothscroll/smoothscroll.service";
import { HTTPService } from "./../../../providers/";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnInit {
  public loading = false;
  showOverlay: boolean = true;
  source: string = "Bangalore";
  destination: string = "Australia";
  // take images only with height greater than 700px
  photoReferences: Array<string>;
  images: Array<any>;
  constructor(
    private ngbCarouselConfig: NgbCarouselConfig,
    private http: HTTPService,
    private data: DataService,
    private smoothScroll: SmoothScrollService
  ) {
    this.photoReferences = [
      "CmRaAAAA3rYhFzi02Fojy2P3mssBf1bvxIyg7YvF8W-8NdMqNqQoMlTGW6N_nTrLZzB47RZSnQFmt24HLZGFjhopeX1btve7So09ubukWxWQKROOGaZSNTL4JdC_Hdvm4Tn5njHxEhCj7pyKTSceknLXsstVuXqyGhQq3F7Dfko__bzsSWLhd8Yj8sZnDg",
      "CmRaAAAAqjmxkXmbu-CiZCniyDS8epaJUubqGfx5e6iPveVftJ16zzUqnqAlY3WgwyHV7lvMvqJDnURhyqWF9KRcHqqAt47mft4IVmpEOIuRDFO2W2Jp_tD9PkE7cgqrcmul3iFqEhC0uOkpdXlBppIZWNVvgKi1GhS-s0Hr7sCZQ5FMpG837ViNwF2aVw",
      "CmRaAAAAKAf2yiLo1eieJ2u2-LEWoxbAOw2DnIYzDQxGXTV9_IqNAsnH1e8gCbv3Xv4qqBDgEi2MG7T1vjJEs9XpNgeBibRDdu5quSXHKKYVh4v4ZjXGXQaVq6XtRMTRJs4Ah9g1EhDVBGmLpTYv9dzRdno6QQmcGhQgym445NmosDt0MdU0nZkHechGuA"
    ];
    this.images = [];
  }
  ngOnInit() {
    this.createInitialOverlay();
    this.configureCarousel();
    this.createCarouselImage();

    this.data.cardDataObserver.subscribe((card: any) => {
      if (card != null && card.title != null) {
        this.smoothScroll.smoothScrollToTop();
        this.destination = card.title;
      }
    });
  }
  createInitialOverlay() {
    this.loading = true;
    setTimeout(() => {
      this.showOverlay = false;
      this.loading = false;
    }, 1500);
  }
  configureCarousel() {
    this.ngbCarouselConfig.keyboard = true;
    this.ngbCarouselConfig.interval = 0;
    this.ngbCarouselConfig.pauseOnHover = true;
  }
  createCarouselImage() {
    this.photoReferences.forEach(element => {
      this.images.push({
        imageUrl:
          "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photoreference=" +
          element +
          "&key=AIzaSyATFcxyIdDzqUSvYzIslgAObXz4AhhCJfg",
        captionHeading: "First slide label",
        captionDetail:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      });
    });

    // Listens for card click events from bookmarks home page
    this.data.cardDataObserver.subscribe(
      (card: any) => {
        if (card != null && card.title != null) {
          this.smoothScroll.smoothScrollToTop();
          this.destination = card.title;

          // Send details from the clicked card
          var latitude: string = card.latitude;
          var longitude: string = card.longitude;
          var category: string = card.category;

          // Gets the events from predictHQ based on the card details
          this.data.getEvents(latitude, longitude, category).subscribe(
            (data: any) => {
              console.log(data);
            },
            error => {
              console.log(error);
            }
          );
        };
      }
    );
  }
}
