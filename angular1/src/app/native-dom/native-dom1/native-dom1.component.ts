import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-native-dom1',
  template: `
    <div>
      div
      <p>
        p
        <span>span</span>
      </p>
    </div>
  `,
  styleUrls: ['./native-dom1.component.css'],
})
export class NativeDom1Component implements AfterViewInit {
  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    console.log(this.el);
    this.el.nativeElement.querySelector('span').style.backgroundColor = 'red';
  }
}
