import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Error1Service {
  constructor(public httpClient: HttpClient) {}

  get() {
    return of(1).pipe(
      map(() => {
        throw 123;
      }),
      catchError(() => of(0))
    );
  }

  retry$() {
    return of(1, 2, 3).pipe(
      map((val) => {
        if (val < 3) {
          return throwError('Error!');
        }
        return val;
      }),
      retry(5)
    );
  }

  backup() {
    return of('A').pipe(
      (val) => {
        return throwError('Error!');
      },
      catchError(() => of('B'))
    );
  }
}
