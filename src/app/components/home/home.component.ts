import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from './car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars: Car[] = [];
  compare = false;
  car: Car = null;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCars().subscribe(
      (data) => {
        this.cars = data;
        this.cars.sort((a, b) => a.brand.localeCompare(b.brand));
      }
    );
  }

  selected(item: boolean) {
    console.log(this.cars);
    console.log(item);
    this.cars.filter(d => this.car = d);
    console.log(this.car.selected);
  }

}
