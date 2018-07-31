import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../../data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private data: DataService) { }

  private card: any;
  @Input() cardtype: string;
  @Input() cardDetails;

  ngOnInit() {
    this.card = this.cardDetails;
  }

  onClickCard(card: any) {
    this.data.getCardData(card)
  }

}
