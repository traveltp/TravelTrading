import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class HTTPService {
  //accessToken OEW4buy0voNY4LUlXjbw4Qa7zu1Sdi
  //predictHQ id: qDA7UGW3yDeM
  constructor(public http: HttpClient) {  
   
  }
  processGetRequest (url: string, options:any): Observable<any> {
    return this.http.get<any>(url, options)
    .pipe(
      catchError(this.handleError.bind(this))
    );
  }
  processPostRequest (url: string, data: any,options:any): Observable<any> {
    return this.http.post<any>(url, data, options)
    .pipe(
      catchError(this.handleError.bind(this))
    );
  }
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

}
