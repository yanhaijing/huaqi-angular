import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class S1Service {
  constructor() {}

  log() {
    console.log('s1');
  }
}
