import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Car } from '../../shared/models/car';
import { CarService } from '../../shared/services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars: Car[] = [];
  itemselected: any[] = [];
  title = 'carshop';
  searchText = '';
  carSpec: Car;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCars().subscribe(
      (data) => {
        this.cars = data;
        this.cars.sort((a, b) => a.brand.localeCompare(b.brand));
        this.cars.filter(d => {
          return this.carSpec = d;
        });
      }
    );
  }

  selected(car: Car) {
    if (this.itemselected.length <= 2 && car.selected) {
      this.itemselected.push(car);
      localStorage.setItem('compare', JSON.stringify(this.itemselected));
    } else {
      this.itemselected.splice(this.itemselected.indexOf(car), 1);
    }
  }
  modalData(car: Car) {
    this.carSpec = car;
  }
}
