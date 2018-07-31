import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('Listening for card Click Event');
  cardDataObserver = this.messageSource.asObservable();

  constructor() { }

  getCardData(card: any) {
    this.messageSource.next(card);
  }
  
}
