import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-native-dom2',
  template: `
    <div>
      div
      <p>
        p
        <span #span>span</span>
      </p>
    </div>
  `,
  styleUrls: ['./native-dom2.component.css'],
})
export class NativeDom2Component implements AfterViewInit {
  @ViewChild('span') span: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.span);
    this.span.nativeElement.style.backgroundColor = 'red';
  }
}
