import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  template: `
    <p *ngIf="flag1">flag1</p>
    <p *ngIf="flag1; else empty">flag1</p>
    <p *ngIf="flag2; else empty">flag2</p>
    <ng-template #empty>无</ng-template>
  `,
  styleUrls: ['./ngif.component.css'],
})
export class NgifComponent implements OnInit {
  flag1 = null;

  flag2 = true;

  constructor() {}

  ngOnInit(): void {}
}
