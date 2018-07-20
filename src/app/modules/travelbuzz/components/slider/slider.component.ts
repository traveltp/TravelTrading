import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  images: Array<string> = ["https://picsum.photos/900/500?image=1", "https://picsum.photos/900/500?image=2", "https://picsum.photos/900/500?image=3"]
  constructor() {
  }
  ngOnInit() {
  }
}
