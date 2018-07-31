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
  cardDataObserver = this.messageSource.asObservable();

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
    var urlRequest: string = "https://api.predicthq.com/v1/events/?limit=10&location_around.origin=" + latitude + "," + longitude + "&category=" + category;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer OEW4buy0voNY4LUlXjbw4Qa7zu1Sdi'
      })
    };

    return this.http.processGetRequest(urlRequest, httpOptions);
  }
}
