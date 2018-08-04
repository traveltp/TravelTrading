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
          latitude: "52.3702",
          longitude: "4.8952",
          category: "festivals",
          image: "assets/images/bookmarks/bangalore_festivals.jpg",
          title: 'Amsterdam - Festivals',
          text: "Click here to view all the upcoming Festivals in Amsterdam",
          country: "Netherlands"
        },
        {
          latitude: "51.5074",
          longitude: "0.1278",
          category: "concerts",
          image: "assets/images/bookmarks/bangalore_concerts.jpg",
          title: 'London - Concerts',
          text: "Click here to view all the upcoming Concerts in London",
          country: "England"
        },
        {
          latitude: "43.6532",
          longitude: "79.3832",
          category: "sports",
          image: "assets/images/bookmarks/bangalore_sports.jpg",
          title: 'Toronto - Sports',
          text: "Click here to view all the upcoming Sports Events in Toronto",
          country: "Canada"
        },
        {
          latitude: "35.6895",
          longitude: "139.6917",
          category: "concerts",
          image: "assets/images/bookmarks/london_concerts.jpg",
          title: 'Tokyo - Concerts',
          text: "Click here to view all the upcoming Concerts in Tokyo",
          country: "Japan"
        },
        {
          latitude: "52.5200",
          longitude: "13.4050",
          category: "festivals",
          image: "assets/images/bookmarks/london_festivals.jpg",
          title: 'Berlin - Festivals',
          text: "Click here to view all the upcoming Festivals in Berlin",
          country: "Germany"
        },
        {
          latitude: "33.8688",
          longitude: "151.2093",
          category: "sports",
          image: "assets/images/bookmarks/paris_sports.jpg",
          title: 'Sydney - Sports',
          text: "Click here to view all the upcoming Sports Events in Sydney",
          country: "Australia"
        },
        {
          latitude: "37.7749",
          longitude: "122.4194",
          category: "festivals",
          image: "assets/images/bookmarks/paris_festivals.jpg",
          title: 'San Francisco - Festivals',
          text: "Click here to view all the upcoming Festivals in San Francisco",
          country: "United States of America"
        },
        {
          latitude: "48.8566",
          longitude: "2.3522",
          category: "concerts",
          image: "assets/images/bookmarks/paris_concerts.jpg",
          title: 'Paris - Concerts',
          text: "Click here to view all the upcoming Concerts in Paris",
          country: "England"
        },
        {
          latitude: "50.1109",
          longitude: "8.6821",
          category: "festivals",
          image: "assets/images/bookmarks/frankfurt_festivals.jpg",
          title: 'Frankfurt - Festivals',
          text: "Click here to view all the upcoming Festivals in Frankfurt",
          country: "Germany"
        },
        {
          latitude: "41.9028",
          longitude: "12.4964",
          category: "concerts",
          image: "assets/images/bookmarks/frankfurt_concerts.jpg",
          title: 'Rome - Concerts',
          text: "Click here to view all the upcoming Concerts in Rome",
          country: "Italy"
        }
      ];

    this.cardList = cardsMockData;
  }

}
