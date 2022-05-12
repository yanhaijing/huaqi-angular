import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `<p #wp>{{ time }}</p>`,
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent implements OnInit, OnDestroy, AfterViewInit {
  time = 0;

  tid = null;
  @ViewChild('wp') wp: ElementRef;

  ngOnInit(): void {
    this.tid = setInterval(() => {
      this.time += 1;
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.tid);
  }

  ngAfterViewInit(): void {
    console.log(this.wp.nativeElement);
  }
}
