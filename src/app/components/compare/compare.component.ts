import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  items: any[] = [];

  constructor() { }

  ngOnInit() {
    this.items = JSON.parse(localStorage.getItem('compare'));
  }
}
