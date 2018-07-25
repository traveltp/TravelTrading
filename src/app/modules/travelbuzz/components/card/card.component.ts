import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../../data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  card: Object;
  @Input() cardtype: string;

  ngOnInit() {
    class Card {
      constructor(
        public image: string,
        public title: string,
        public text: string
      ) { }
    }
    this.card = new Card('https://placeimg.com/640/480/nature', 'Kangaroo Valley Safari', 'Located two hours south of Sydney in the Southern Highland of New South Wales...');

  }

}
