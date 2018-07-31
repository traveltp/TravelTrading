import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { HttpClient } from "@angular/common/http";
import { Config } from "../../../../../../node_modules/protractor";
import { DataService } from '../../../../data.service';
import { SmoothScrollService } from '../../../smoothscroll/smoothscroll.service'

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
  photoReferences: Array<string> = ['CmRaAAAA3rYhFzi02Fojy2P3mssBf1bvxIyg7YvF8W-8NdMqNqQoMlTGW6N_nTrLZzB47RZSnQFmt24HLZGFjhopeX1btve7So09ubukWxWQKROOGaZSNTL4JdC_Hdvm4Tn5njHxEhCj7pyKTSceknLXsstVuXqyGhQq3F7Dfko__bzsSWLhd8Yj8sZnDg', 'CmRaAAAAqjmxkXmbu-CiZCniyDS8epaJUubqGfx5e6iPveVftJ16zzUqnqAlY3WgwyHV7lvMvqJDnURhyqWF9KRcHqqAt47mft4IVmpEOIuRDFO2W2Jp_tD9PkE7cgqrcmul3iFqEhC0uOkpdXlBppIZWNVvgKi1GhS-s0Hr7sCZQ5FMpG837ViNwF2aVw', 'CmRaAAAAKAf2yiLo1eieJ2u2-LEWoxbAOw2DnIYzDQxGXTV9_IqNAsnH1e8gCbv3Xv4qqBDgEi2MG7T1vjJEs9XpNgeBibRDdu5quSXHKKYVh4v4ZjXGXQaVq6XtRMTRJs4Ah9g1EhDVBGmLpTYv9dzRdno6QQmcGhQgym445NmosDt0MdU0nZkHechGuA'];
  images: Array<string> = [];
  constructor(
    private ngbCarouselConfig: NgbCarouselConfig,
    private http: HttpClient,
    private data: DataService,
    private smoothScroll: SmoothScrollService
  ) { }
  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.showOverlay = false;
      this.loading = false;
    }, 1500);
    this.ngbCarouselConfig.keyboard = true;
    this.ngbCarouselConfig.interval = 0;
    this.ngbCarouselConfig.pauseOnHover = true;
    this.photoReferences.forEach(element => {
      this.images.push("https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photoreference=" + element + "&key=AIzaSyATFcxyIdDzqUSvYzIslgAObXz4AhhCJfg");
    });

    this.data.cardDataObserver.subscribe(
      (card: any) => {
        if (card != null && card.title != null) {
          this.smoothScroll.smoothScrollToTop();
          this.destination = card.title;
        };
      }
    );
  }
}
