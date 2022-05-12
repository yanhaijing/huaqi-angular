import { Component } from '@angular/core';

@Component({
  selector: 'app-hoc-card',
  template: `
    <section>
      <header>
        <h2>header</h2>
      </header>

      <div class="content">
        <ng-content></ng-content>
      </div>

      <footer>footer</footer>
    </section>
  `,
  styleUrls: ['./hoc-card.component.css'],
})
export class HocCardComponent {}
