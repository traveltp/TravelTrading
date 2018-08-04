import { Component, Input, OnInit } from '@angular/core';
import { DataService } from "../../../../data.service";

@Component({
  selector: 'app-air-reco-card',
  templateUrl: './air-reco-card.component.html',
  styleUrls: ['./air-reco-card.component.scss']
})
export class AirRecoCardComponent implements OnInit {

  constructor(private data: DataService) { }

  private airReco:any;
  private currencyCode:string;
  private outbounds:any;
  private inbounds:any;
  @Input() airData;
  @Input() currency;


  ngOnInit() {
    this.airReco = this.airData;
    this.currencyCode = this.currency;
    this.outbounds = this.airReco.itineraries[0].outbound;
    this.inbounds = this.airReco.itineraries[0].inbound;
  }

}
