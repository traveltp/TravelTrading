import { Component, OnInit, Input } from "@angular/core";
import {
  SlideInOutAnimation,
  SlideOutInAnimation,
  SlideOutInMinAnimation,
  FilterSlideOutAnimation
} from "../../../../../animations";
import { DataService } from "../../../../data.service";
@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"],
  animations: [
    SlideInOutAnimation,
    SlideOutInAnimation,
    SlideOutInMinAnimation,
    FilterSlideOutAnimation
  ]
})
export class FiltersComponent implements OnInit {
  @Input() selectedLocation: any;
  private filterState: string = "in";
  public filters: any;
  public selectedCategory: string;

  constructor(private data: DataService) {
    this.filters = [
      { category: "sports", class: "sports" },
      { category: "expos", class: "expos" },
      { category: "concerts", class: "concerts" },
      { category: "festivals", class: "festivals" },
      { category: "conferences", class: "conferences" }
    ];
  }

  ngOnInit() {
    this.selectedCategory = this.selectedLocation.category;

    this.data.dataObserver.subscribe((event: any) => {
      if (event != null && event.category != null) {
        this.selectedCategory = event.category;
      }
    });
  }
  // to update data on the basis of filter selected
  toggleFilter(category) {
    this.selectedCategory = category;

    var data:any = {};
    data.title = "From Filter";
    data.category = category;
    data.latitude = this.selectedLocation.latitude;
    data.longitude = this.selectedLocation.longitude;
    this.data.getCardData(data);
  }

  // to show and hide filter panel on click of filters element
  toggleFilterPanel() {
    if (this.filterState === "out") {
      this.filterState = "in";
    } else {
      this.filterState = "out";
    }
  }
}
