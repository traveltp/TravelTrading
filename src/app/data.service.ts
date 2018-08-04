import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HTTPService } from './modules/providers';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // BehaviorSubject is used as it will ensure that data supplied is always latest
  private messageSource = new BehaviorSubject('Listening for card Click Event');
  dataObserver = this.messageSource.asObservable();

  constructor(private http: HTTPService) { }

  /* 
   * Function to pass card data on click to other components
   * @param any card
   */
  getCardData(card: any) {
    this.messageSource.next(card);
  }

  /* 
   * Function to get Events from predictHQ based on location and category
   * @param string latitude
   * @param string longitude
   * @param string category
   * @return Observable<any> contains data of events based on input params
   */
  getEvents(latitude: string, longitude: string, category: string): Observable<any> {
    //var urlRequest: string = "https://api.predicthq.com/v1/events/?limit=10&location_around.origin=" + latitude + "," + longitude + "&category=" + category;
    var urlRequest: string = "https://api.predicthq.com/v1/events/?limit=5&within=20km@" + latitude + "," + longitude + "&category=" + category;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer OEW4buy0voNY4LUlXjbw4Qa7zu1Sdi'
      })
    };

    return this.http.processGetRequest(urlRequest, httpOptions);
  }
  /* 
   * Function to get place based on id
   * @param string id
   * @return Observable<any> contains data of events based on input params
   */
  getPlace(id: string): Observable<any> {
    var urlRequest: string = "https://api.predicthq.com/v1/places/?id=" + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer OEW4buy0voNY4LUlXjbw4Qa7zu1Sdi'
      })
    };

    return this.http.processGetRequest(urlRequest, httpOptions);
  }

  /* 
   * Function to build Carousel Image Data From PredictHQ Events Response
   * @param any data
   * @return Array<any> images contains Carousel Image Data
   */
  buildCarouselImageDataFromPredictHQEventsResponse(data: any): any {
    var images: any = {};

    if (data != null && data.results != null && data.results.length > 0) {
      images[data.results[0].category] = [];
      for (var i = 0; i < data.results.length; i++) {
        var image: any = {};
        var result: any = data.results[i];
        image.id = i;
        image.imageUrl = "assets/images/" + result.category + "/" + (i + 1) + ".jpg";
        image.captionHeading = result.title;
        //image.captionDetail = result.description;
        image.start = result.start;
        image.end = result.end;
        image.countryCode = result.country;
        image.duration = result.duration;
        image.data = data.results[i];
        images[result.category].push(image);
        images['category'] = result.category;
      }
    }
    return images;
  }

  getMockFlightData(): Observable<any> {
    var urlRequest: string = "http://172.22.88.39:4000/recos/getFlights";

    return this.http.processGetRequest(urlRequest, {});
  }

  /* 
   * Function to get date from string of format 2018-09-01T07:55
   * @param string data
   * @return string will be in format Sat, 01 Sep 2018
   */
  getDateFromString(data: string): any {
    // return new Date("2018-09-01T07:55").toUTCString().split(' ').slice(0, 4).join(' ');
    return new Date(data).toString().split(' ').slice(0, 4).join(' ');
  }

  /* 
   * Function to get time from string of format 2018-09-01T07:55
   * @param string data
   * @return string will be in format 07:55
   */
  getTimeFromString(data: string): any {
    return new Date(data).toString().split(' ').slice(4, 5).join(' ').split(':').slice(0, 2).join(':')
  }

    /* 
   * Function to get time from string of format 2018-09-01T07:55
   * @param string data
   * @return string will be in format Sat, 01 Sep 2018 07:55
   */
  getDateAndTimeFromString(data: string): any {
    return this.getDateFromString(data) + " " + this.getTimeFromString(data);
  }
}
