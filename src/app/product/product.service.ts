import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  @Output() chartCount :EventEmitter<any> =  new  EventEmitter();
    
  constructor() {}

  

  changes(chartCount : Number) {
    this.chartCount.emit(chartCount);    
  }

  GetchartCount(data :any=[]) {
    return this.chartCount;
  }
}