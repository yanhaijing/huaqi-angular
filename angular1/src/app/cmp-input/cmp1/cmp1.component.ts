import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cmp1',
  template: `
    <div>
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
      <p>组件的内容</p>
    </div>
  `,
  styleUrls: ['./cmp1.component.css'],
})
export class Cmp1Component {
  @Input() title: string;
  @Input('h2') subtitle: string;
}
