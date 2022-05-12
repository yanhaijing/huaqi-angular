import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent implements OnInit {
  name = 'yan';
  arr = [1, 2, 3];
  get time() {
    return Date.now();
  }
  constructor() {}

  ngOnInit(): void {}
}
