import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars: Car[] = [];
  itemselected: any[] = [];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCars().subscribe(
      (data) => {
        this.cars = data;
        this.cars.sort((a, b) => a.brand.localeCompare(b.brand));
      }
    );
  }

  selected(car: Car) {
    if (this.itemselected.length <= 2) {
      this.itemselected.push(car);
      localStorage.setItem('compare', JSON.stringify(this.itemselected));
    }
  }

}
