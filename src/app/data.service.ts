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
 * Function to build Carousel Image Data From PredictHQ Events Response
 * @param any data
 * @return Array<any> images contains Carousel Image Data
 */
  buildCarouselImageDataFromPredictHQEventsResponse(data: any): any {
    var images:any = {};

    if (data != null && data.results != null && data.results.length > 0) {
      images[data.results[0].category] = [];
      for (var i = 0; i < data.results.length; i++) {
        var image: any = {};
        var result: any = data.results[i];
        image.id = i + 1;
        image.imageUrl = "assets/images/" + result.category + "/" + image.id + ".jpg";
        image.captionHeading = result.title;
        //image.captionDetail = result.description;
        image.start = result.start;
        image.end = result.end;
        image.countryCode = result.country;
        image.duration = result.duration;
        images[result.category].push(image);
        images['category'] = result.category;
      }
    }
    return images;
  }
}
