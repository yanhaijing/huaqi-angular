import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Communicate1Component } from './communicate1/communicate1.component';

@Component({
  selector: 'app-communicate',
  template: `
    <app-communicate1
      #child
      [count]="count"
      (onadd)="onAdd()"
    ></app-communicate1>
  `,
  styleUrls: ['./communicate.component.css'],
})
export class CommunicateComponent implements AfterViewInit {
  @ViewChild('child') child: Communicate1Component;

  ngAfterViewInit(): void {
    this.child.log();
  }

  count = 10;

  onAdd() {
    this.count = this.count + 1;
  }
}
