import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackby',
  template: `
    <div *ngFor="let item of list; trackBy: trackByList">
      id: {{ item.id }}<input type="text" />
    </div>
    <button (click)="onQuery()">query</button>
  `,
  styleUrls: ['./trackby.component.css'],
})
export class TrackbyComponent {
  private id = 3;

  list = [];

  onQuery() {
    this.list = [...Array(this.id++)].map((_, index) => ({ id: index }));
  }

  trackByList(_, item) {
    return item.id;
  }
}
