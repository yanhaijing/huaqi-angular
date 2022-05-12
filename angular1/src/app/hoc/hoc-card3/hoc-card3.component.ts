import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-hoc-card3',
  template: `
    <section>
      <header>
        <h2>header</h2>
      </header>

      <div class="content">
        <ng-template [ngTemplateOutlet]="content"></ng-template>
      </div>

      <footer>
        <ng-template [ngTemplateOutlet]="footer"></ng-template>
      </footer>
    </section>
  `,
  styleUrls: ['./hoc-card3.component.css'],
})
export class HocCard3Component {
  @Input() content: TemplateRef<any>;
  @Input() footer: TemplateRef<any>;
}
