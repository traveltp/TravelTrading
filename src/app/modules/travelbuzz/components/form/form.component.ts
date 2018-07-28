import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() source: string;
  @Input() destination: string;
  @Input() email: string;
  @Input() date: string;
  @Input() pax: string;
  @Input() modeOfTravel: string;

  field1 = {'name':'Source','type':'text','iconSide':'left-side','icon':'fa fa-search'};
  field2 = {'name':'Destination','type':'text','iconSide':'left-side','icon':'fa fa-search'};
  field3 = {'name':'Email','type':'text','iconSide':'left-side','icon':'fa fa-envelope'};
  field4 = {'name':'Date','type':'select','iconSide':'left-side','icon':'fa fa-calendar'};
  field5 = {'name':'Pax','type':'select','iconSide':'left-side','icon':'fa fa-users'};
  field6 = {'name':'Mode of Travel','type':'select','iconSide':'left-side','icon':'fa fa-plane'};
  constructor() { }

  ngOnInit() {
  }

}
