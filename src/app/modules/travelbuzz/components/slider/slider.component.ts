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
  
  public loading = false;
  showOverlay: boolean = true;
  @Input()source: string = "Current Location";
  @Input()destination: string = "Australia";
  //destination: string = "Australia";
  // take images only with height greater than 700px
  photoReferences: Array<string>;
  images: Array<any>;
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
  // create image data for carousel
  createCarouselImage() {
    /*this.googleCustomSearch.getPhotos("Art for Concern - Masters of Today and Tomorrow").subscribe((data: any) => {
      console.log(data);
      data.items.forEach(item => {
        var ext = item.link.substr(item.link.lastIndexOf('.') + 1);
        if ((ext === "jpg" || ext === "png" || ext === "gif") && item.image.width > 710 && item.image.height > 530) {
          this.images.push({
            imageUrl: item.link,
            captionHeading: "First slide label",
            captionDetail:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          });
        }
      });
      
    });*/
    this.images = [
      {id: "1",imageUrl:"assets/images/bangalore_festivals.jpg", captionHeading: "First slide label", captionDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
      {id: "2",imageUrl:"assets/images/bangalore_concerts.jpg", captionHeading: "First slide label", captionDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
      {id: "3",imageUrl:"assets/images/bangalore_sports.jpg", captionHeading: "First slide label", captionDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
      {id: "4",imageUrl:"assets/images/london_concerts.jpg", captionHeading: "First slide label", captionDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
      {id: "5",imageUrl:"assets/images/london_festivals.jpg", captionHeading: "First slide label", captionDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
      {id: "6",imageUrl:"assets/images/paris_sports.jpg", captionHeading: "First slide label", captionDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
      {id: "7",imageUrl:"assets/images/paris_concerts.jpg", captionHeading: "First slide label", captionDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
      {id: "8",imageUrl:"assets/images/frankfurt_festivals.jpg", captionHeading: "First slide label", captionDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
      {id: "9",imageUrl:"assets/images/frankfurt_concerts.jpg", captionHeading: "First slide label", captionDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
      {id: "10",imageUrl:"assets/images/paris_festivals.jpg", captionHeading: "First slide label", captionDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    ];
    this.showOverlay = false;
    this.loading = false;

    // Listens for card click events from bookmarks home page
    this.data.cardDataObserver.subscribe((card: any) => {
      if (card != null && card.title != null) {
        this.smoothScroll.smoothScrollToTop();
        this.destination = card.title;

        // Send details from the clicked card
        var latitude: string = card.latitude;
        var longitude: string = card.longitude;
        var category: string = card.category;

        var activeImage:any;
        this.images.forEach(image => {
          if (image.id === '1') {
            activeImage = image;
          }
        });
        this.images.forEach(image => {
          if (image.imageUrl === card.image) {
            var temp = activeImage.id;  
            activeImage.id = image.id;  
            image.id = temp;
          }
        });
        // Gets the events from predictHQ based on the card details
        this.data.getEvents(latitude, longitude, category).subscribe(
          (data: any) => {
            console.log(data);
          },
          error => {
            console.log(error);
          }
        );
      }
    });
  }
}
