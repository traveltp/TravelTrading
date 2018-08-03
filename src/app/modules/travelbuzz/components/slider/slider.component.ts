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
  @Input() source: string;
  @Input() destination: string = "Australia";
  @Input() eventData: any;
  public selectedLocation: any;
  public showOverlay: boolean = true;
  public startDate: string;
  public endDate: string;
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

  submitInterest(category) {
    var activeImageId: any;
    var startDate: string;
    var endDate: string;
    var activeElements:any = document.getElementsByClassName('active ng-star-inserted');
    for (let index = 0; index < activeElements.length; index++) {
      if (activeElements[index].localName === 'li') {
        activeImageId = activeElements[index].id;
      }
    }
    this.startDate = this.images[category][activeImageId].data.start.split("T")[0];
    this.endDate = this.images[category][activeImageId].data.end.split("T")[0];
    var placeLocation = this.images[category][activeImageId].data.location;
    this.destination = this.images[category][activeImageId].data.title;
    var placeId = this.images[category][activeImageId].data.place_hierarchies[0][5];
    this.data.getPlace(placeId).subscribe(
      (data: any) => {
        var formData = {
          start: this.startDate,
          end: this.endDate,
          location: placeLocation,
          destination: this.destination,
          city: data.results[0].county.split(" ")[0],
          country: data.results[0].country
        }
        this.data.getCardData(formData);
      },
      error => {
        console.log(error);
      }
    );
    
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
          this.source = "Current Location";
        },
        error => {
          console.log(error);
        }
      );
    }
}
