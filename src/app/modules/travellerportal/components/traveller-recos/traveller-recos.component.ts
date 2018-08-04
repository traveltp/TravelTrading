import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../../../data.service";

@Component({
  selector: 'app-traveller-recos',
  templateUrl: './traveller-recos.component.html',
  styleUrls: ['./traveller-recos.component.scss']
})
export class TravellerRecosComponent implements OnInit {

  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log(params.id);
      }
    );

    this.data.getMockFlightData().subscribe(
      (data: any) => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
