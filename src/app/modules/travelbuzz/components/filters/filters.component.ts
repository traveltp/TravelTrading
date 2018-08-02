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
  public loading: boolean = false;
  constructor(private data: DataService) {
    this.filters = [
      { category: "sports", class: "fa fa-envelope fa-2x"},
      { category: "expos", class: "fa fa-users fa-2x" },
      { category: "concerts", class: "fa fa-shopping-cart fa-2x" },
      { category: "festivals", class: "fa fa-briefcase fa-2x" },
      { category: "conferences", class: "fa fa-envelope fa-2x" }
    ];
  }

  ngOnInit() {
    console.log(this.selectedLocation);
  }

  toggleFilter(category) {
    console.log(category);
    this.loading = true;
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

  toggleFilterPanel() {
    if (this.filterState === "out") {
      this.filterState = "in";
    } else {
      this.filterState = "out";
    }
  }
}
