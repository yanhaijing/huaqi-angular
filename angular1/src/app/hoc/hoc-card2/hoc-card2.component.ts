import { Component } from '@angular/core';

@Component({
  selector: 'app-hoc-card2',
  template: `
    <section>
      <header>
        <h2>header</h2>
      </header>

      <div class="content">
        <ng-content select=".content"></ng-content>
      </div>

      <footer>
        <ng-content select="footer"></ng-content>
      </footer>
    </section>
  `,
  styleUrls: ['./hoc-card2.component.css'],
})
export class HocCard2Component {}
