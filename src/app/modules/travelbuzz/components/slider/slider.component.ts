import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { NgbCarouselConfig, NgbCarousel } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../../../../data.service";
import { SmoothScrollService } from "../../../smoothscroll/smoothscroll.service";
import { HTTPService } from "./../../../providers/";
import { GoogleCustomSearchService } from "../../../providers/google-custom-search.service";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnInit {
  public loading = true;
  @Input() source: string = "Current Location";
  @Input() destination: string = "Australia";
  @Input() eventData: any;
  public selectedLocation: any;
  public showOverlay: boolean = true;
  category: string;
  //destination: string = "Australia";
  // take images only with height greater than 700px
  photoReferences: Array<string>;
  images: any;
  constructor(
    private ngbCarouselConfig: NgbCarouselConfig,
    @ViewChild("myCarousel") public myCarousel: NgbCarousel,
    private http: HTTPService,
    private data: DataService,
    private smoothScroll: SmoothScrollService,
    private googleCustomSearch: GoogleCustomSearchService
  ) {
    /*this.photoReferences = [
      "CmRaAAAA3rYhFzi02Fojy2P3mssBf1bvxIyg7YvF8W-8NdMqNqQoMlTGW6N_nTrLZzB47RZSnQFmt24HLZGFjhopeX1btve7So09ubukWxWQKROOGaZSNTL4JdC_Hdvm4Tn5njHxEhCj7pyKTSceknLXsstVuXqyGhQq3F7Dfko__bzsSWLhd8Yj8sZnDg",
      "CmRaAAAAqjmxkXmbu-CiZCniyDS8epaJUubqGfx5e6iPveVftJ16zzUqnqAlY3WgwyHV7lvMvqJDnURhyqWF9KRcHqqAt47mft4IVmpEOIuRDFO2W2Jp_tD9PkE7cgqrcmul3iFqEhC0uOkpdXlBppIZWNVvgKi1GhS-s0Hr7sCZQ5FMpG837ViNwF2aVw",
      "CmRaAAAAKAf2yiLo1eieJ2u2-LEWoxbAOw2DnIYzDQxGXTV9_IqNAsnH1e8gCbv3Xv4qqBDgEi2MG7T1vjJEs9XpNgeBibRDdu5quSXHKKYVh4v4ZjXGXQaVq6XtRMTRJs4Ah9g1EhDVBGmLpTYv9dzRdno6QQmcGhQgym445NmosDt0MdU0nZkHechGuA"
    ];*/
    this.images = [];
  }
  ngOnInit() {
    this.getCurrentLocation();
    this.category = this.selectedLocation.category;
    this.fillDatatoCarousel(this.selectedLocation.latitude, this.selectedLocation.longitude, this.selectedLocation.category)
    this.createInitialOverlay();
    this.configureCarousel();
    this.createCarouselImage();
  }

  // initial overlay till the original image loads
  createInitialOverlay() {
    this.loading = true;
  }
  // configuration for ngb carousel
  configureCarousel() {
    this.ngbCarouselConfig.keyboard = true;
    this.ngbCarouselConfig.interval = 0;
    this.ngbCarouselConfig.pauseOnHover = true;
  }

  getCurrentLocation() {
    this.selectedLocation = {
      latitude: '12.972442',
      longitude: '77.580643',
      category: "sports"
    };
  }
  // create image data for carousel
  createCarouselImage() {
    // Listens for card click events from bookmarks home page
    this.data.dataObserver.subscribe((data: any) => {
      if (data != null && data.title != null) {
        this.loading = true;
        this.smoothScroll.smoothScrollToTop();
        this.destination = data.title;

        // Send details from the clicked card
        var latitude: string = data.latitude;
        var longitude: string = data.longitude;
        var category: string = data.category;

        this.fillDatatoCarousel(latitude,longitude, category);
      }
    });
  }

    // configuration for ngb carousel
    fillDatatoCarousel(latitude, longitude, category) {
      this.data.getEvents(latitude, longitude, category).subscribe(
        (data: any) => {
          this.images = this.data.buildCarouselImageDataFromPredictHQEventsResponse(data);
          this.category = this.images.category;
          this.selectedLocation.category = this.category;
          this.selectedLocation.latitude = latitude;
          this.selectedLocation.longitude = longitude;
          for (let index = 0; index < data.results.length; index++) {
            var startDateTime = data.results[index].start.split("T");
            var startDate = startDateTime[0];
            var startTime = startDateTime[1].split("Z")[0];
            this.images[this.category][index].captionHeading = data.results[index].title;
            this.images[this.category][index].captionDetail = "Starting on " + startDate + " at " + startTime;
          }
          this.loading = false;
          this.showOverlay = false;
        },
        error => {
          console.log(error);
        }
      );
    }
}
