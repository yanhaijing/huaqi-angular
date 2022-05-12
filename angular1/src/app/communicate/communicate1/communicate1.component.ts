import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-communicate1',
  template: `
    <div>Input: {{ selfCount }}</div>
    <button (click)="onadd.emit()">add</button>
  `,
  styleUrls: ['./communicate1.component.css'],
})
export class Communicate1Component {
  log() {
    console.log('Communicate1Component log');
  }

  selfCount = 0;

  @Input() set count(count) {
    this.selfCount = count;
    // 做其他操作
  }

  @Output() onadd = new EventEmitter<void>();
}
