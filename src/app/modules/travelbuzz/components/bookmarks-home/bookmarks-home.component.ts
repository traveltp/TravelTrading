import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks-home',
  templateUrl: './bookmarks-home.component.html',
  styleUrls: ['./bookmarks-home.component.scss']
})
export class BookmarksHomeComponent implements OnInit {

  private cardList: any;

  constructor() { }

  ngOnInit() {

    const cardsMockData: any = [
      { image: "https://placeimg.com/640/480/nature", title: 'Location 1', text: "Put Location 1 Details here" },
      { image: "https://placeimg.com/640/480/architecture", title: 'Location 2', text: "Put Location 2 Details here" },
      { image: "https://placeimg.com/640/480/animals", title: 'Location 3', text: "Put Location 3 Details here" },
      { image: "https://placeimg.com/640/480/people", title: 'Location 4', text: "Put Location 4 Details here" },
      { image: "https://placeimg.com/640/480/tech", title: 'Location 5', text: "Put Location 5 Details here" },
      { image: "https://placeimg.com/640/480/grayscale", title: 'Location 6', text: "Put Location 6 Details here" },
      { image: "https://placeimg.com/640/480/sepia", title: 'Location 7', text: "Put Location 7 Details here" },
      { image: "https://placeimg.com/640/480/any", title: 'Location 8', text: "Put Location 8 Details here" },
      { image: "https://placeimg.com/640/640/any", title: 'Location 9', text: "Put Location 9 Details here" },
      { image: "https://placeimg.com/640/500/any", title: 'Location 10', text: "Put Location 10 Details here" }
    ];

    this.cardList = cardsMockData;
  }

}
