import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  template: `
    <div *ngFor="let item of list; let i = index">
      id: {{ item.id }}; index: {{i}}
    </div>
    <button (click)="onQuery()">query</button>
  `,
  styleUrls: ['./ngfor.component.css'],
})
export class NgforComponent {
  private id = 4;

  list = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  onQuery() {
    this.list = [{ id: this.id++ }, ...this.list];
  }
}
