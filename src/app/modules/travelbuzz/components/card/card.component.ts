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
  @Input() cardDetails;

  ngOnInit() {
    class Card {
      constructor(
        public image: string,
        public title: string,
        public text: string
      ) { }
    }
    var image: string = this.cardDetails.image;
    var title: string = this.cardDetails.title;
    var text: string = this.cardDetails.text;

    this.card = new Card(image, title, text);
  }

}
