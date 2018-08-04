import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../../data.service";

@Component({
  selector: 'app-traveller-home',
  templateUrl: './traveller-home.component.html',
  styleUrls: ['./traveller-home.component.scss']
})
export class TravellerHomeComponent implements OnInit {

  constructor(private data: DataService) { }

  private id: any;

  ngOnInit() {
    this.id = "testParam";
  }

}
