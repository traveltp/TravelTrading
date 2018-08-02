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
  public loading: boolean = false;

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
  }
  // to update data on the basis of filter selected
  toggleFilter(category) {
    console.log(category);
    this.loading = true;
    this.selectedCategory = category;
    this.data
      .getEvents(
        this.selectedLocation.latitude,
        this.selectedLocation.longitude,
        category
      )
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

  // to show and hide filter panel on click of filters element
  toggleFilterPanel() {
    if (this.filterState === "out") {
      this.filterState = "in";
    } else {
      this.filterState = "out";
    }
  }
}
