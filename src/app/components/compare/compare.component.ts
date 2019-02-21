import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  @ViewChild(HomeComponent) compare;
  items: any[] = [];

  constructor() { }

  ngOnInit() {
    this.items = JSON.parse(localStorage.getItem('compare'));
    console.log(this.items);
  }
}
