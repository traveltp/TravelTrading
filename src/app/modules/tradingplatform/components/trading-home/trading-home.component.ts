import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition,
  animate, group, query, stagger, keyframes
} from '@angular/animations';
import { SlideInOutAnimation, SlideOutInAnimation } from '../../../../../animations';

@Component({
  selector: 'app-trading-home',
  templateUrl: './trading-home.component.html',
  styleUrls: ['./trading-home.component.scss'],
  animations: [SlideInOutAnimation, SlideOutInAnimation]
})
export class TradingHomeComponent implements OnInit {
  animationState: string = 'in';
  largeLayoutState: string = 'in';

  constructor() { }

  ngOnInit() {
  }

  toggleElement() {
    var content: any = document.getElementsByClassName('large-layout');
    if (this.animationState === 'out') {
      this.animationState = 'in';
      this.largeLayoutState = 'out';
    } else {
      this.animationState = 'out';
      this.largeLayoutState = 'in';
    }
  }

}
