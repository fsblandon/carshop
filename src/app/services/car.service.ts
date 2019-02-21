import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from 'src/app/models/car';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  itemsG = new BehaviorSubject({});

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get<Car[]>('../../assets/cars.json');
  }

  getItems(items: any[]) {
    this.itemsG.next(items);
  }
}
