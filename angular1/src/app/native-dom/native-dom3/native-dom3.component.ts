import {
  AfterViewInit,
  Component,
  ElementRef, Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-native-dom3',
  template: `
    <div>
      div
      <p>
        p
        <span #span>span</span>
      </p>
    </div>
  `,
  styleUrls: ['./native-dom3.component.css'],
})
export class NativeDom3Component implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  @ViewChild('span') span: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.span);
    this.renderer.setStyle(this.span.nativeElement, 'backgroundColor', 'red');
  }
}
