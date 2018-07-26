import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition,
  animate, group, query, stagger, keyframes
} from '@angular/animations';
import { SlideInOutAnimation } from '../../../../../animations';

@Component({
  selector: 'trading-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [SlideInOutAnimation]
})
export class HomeComponent implements OnInit {

  animationState: string = 'in';

  constructor() { }

  ngOnInit() {}

  toggleElement() {
    
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
  }
}
