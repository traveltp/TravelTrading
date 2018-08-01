import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation, SlideOutInAnimation, SlideOutInMinAnimation, FilterSlideOutAnimation } from '../../../../../animations';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  animations: [SlideInOutAnimation, SlideOutInAnimation, SlideOutInMinAnimation, FilterSlideOutAnimation]
})
export class FiltersComponent implements OnInit {
  filterState: string = 'in';
  constructor() { }

  ngOnInit() {
  }

  toggleFilter() {
    if (this.filterState === 'out') {
      this.filterState = 'in';
    } else {
      this.filterState = 'out';
    }
  }

}
