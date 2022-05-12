import { Component, OnInit } from '@angular/core';
import { Error1Service } from '../service/error1.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  constructor(private error1Service: Error1Service) {}

  ngOnInit(): void {
    this.error1Service.retry$().subscribe((res) => console.log('1', res));
  }
}
