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

    // Mock data to fill the bookmarks home page
    const cardsMockData: any =
      [
        {
          latitude: "12.9716",
          longitude: "77.5946",
          category: "festivals",
          image: "assets/images/bangalore_festivals.jpg",
          title: 'Bangalore - Festivals',
          text: "Click here to view all the latest Festivals in Bangalore"
        },
        {
          latitude: "12.9716",
          longitude: "77.5946",
          category: "concerts",
          image: "assets/images/bangalore_concerts.jpg",
          title: 'Bangalore - Concerts',
          text: "Click here to view all the latest Concerts in Bangalore"
        },
        {
          latitude: "12.9716",
          longitude: "77.5946",
          category: "sports",
          image: "assets/images/bangalore_sports.jpg",
          title: 'Bangalore - Sports',
          text: "Click here to view all the latest Sports in Bangalore"
        },
        {
          latitude: "51.5074",
          longitude: "0.1278",
          category: "concerts",
          image: "assets/images/london_concerts.jpg",
          title: 'London - Concerts',
          text: "Click here to view all the latest Concerts in London"
        },
        {
          latitude: "51.5074",
          longitude: "0.1278",
          category: "festivals",
          image: "assets/images/london_festivals.jpg",
          title: 'London - Festivals',
          text: "Click here to view all the latest Festivals in London"
        },
        {
          latitude: "48.8566",
          longitude: "2.3522",
          category: "sports",
          image: "assets/images/paris_sports.jpg",
          title: 'Paris - Sports',
          text: "Click here to view all the latest Sports in Paris"
        },
        {
          latitude: "48.8566",
          longitude: "2.3522",
          category: "festivals",
          image: "assets/images/paris_festivals.jpg",
          title: 'Paris - Festivals',
          text: "Click here to view all the latest Festivals in Paris"
        },
        {
          latitude: "48.8566",
          longitude: "2.3522",
          category: "concerts",
          image: "assets/images/paris_concerts.jpg",
          title: 'Paris - Concerts',
          text: "Click here to view all the latest Concerts in Paris"
        },
        {
          latitude: "50.1109",
          longitude: "8.6821",
          category: "festivals",
          image: "assets/images/frankfurt_festivals.jpg",
          title: 'Frankfurt - Festivals',
          text: "Click here to view all the latest Festivals in Frankfurt"
        },
        {
          latitude: "50.1109",
          longitude: "8.6821",
          category: "concerts",
          image: "assets/images/frankfurt_concerts.jpg",
          title: 'Frankfurt - Concerts',
          text: "Click here to view all the latest Concerts in Frankfurt"
        }
      ];

    this.cardList = cardsMockData;
  }

}
