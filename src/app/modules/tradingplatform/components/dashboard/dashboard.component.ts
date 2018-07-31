import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  numbers: Array<number>;
  constructor(private router: Router) {
    this.numbers = Array(25).fill(1);
   }

  ngOnInit() {
  }
  redirectToGrid() {
    this.router.navigate(['/trading-grid']);
  }
}
