import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-reco-card',
  templateUrl: './car-reco-card.component.html',
  styleUrls: ['./car-reco-card.component.scss']
})
export class CarRecoCardComponent implements OnInit {

  @Input() carResults;

  constructor() { }

  ngOnInit() {
    
  }

}
