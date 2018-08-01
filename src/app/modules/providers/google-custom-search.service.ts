import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HTTPService } from './';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleCustomSearchService {
  
  constructor(private http: HTTPService) { }

  createImageSearchUrl(queryString: string): string {
    let searchEngineCXId:string = "010377209335488705937:mzqmapxclqe";
    let customSearchBaseUrl:string = "https://content.googleapis.com/customsearch/v1?";
    let searchEngineApiKey:string = "AIzaSyC1si6nWi6JZvADJ8FShOg4SKsH9RknXtg";
    let searchImgSize:string = "large";
    let searchType:string = "image";
    let searchEngineCXIdParams:string = "cx=" + searchEngineCXId;
    let searchEngineApiKeyParams:string = "&key=" + searchEngineApiKey;
    let searchImgSizeParams:string = "&imgSize=" + searchImgSize;
    let queryStringParams:string = "&q=" + queryString;
    let searchTypeParams:string = "&searchType=" + searchType;
    let ImageSearchUrl:string = customSearchBaseUrl + searchEngineCXIdParams + searchImgSizeParams + searchTypeParams + queryStringParams + searchEngineApiKeyParams;
    return ImageSearchUrl;
  }

  getPhotos(queryString): Observable<any> {
    let url: string = this.createImageSearchUrl(queryString);
    return this.http.processGetRequest(url, "");
  }
}
