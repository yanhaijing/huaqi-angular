import { Injectable } from '@angular/core';
import { forkJoin, from, of, race } from 'rxjs';
import {
  catchError,
  concatMap,
  delay,
  map,
  mergeMap,
  reduce,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ControlService {
  constructor() {}

  timeout() {
    return race(of('正常'), of('超时').pipe(delay(10000)));
  }

  get(id) {
    return of({ id });
  }
  getByIds(ids: number[]) {
    if (!ids.length) {
      return of([]);
    }
    return concatMap((id) =>
      this.get(id).pipe(
        catchError((err) => of(null)),
        reduce((res, cur) => [...res, cur], []),
        [] as unknown as any
      )
    );
  }

  getByIds2(ids: number[]) {
    if (!ids.length) {
      return of([]);
    }
    return forkJoin(
      ids.map((id) => this.get(id).pipe(catchError((err) => of(null))))
    );
  }

  getByIds3(ids) {
    if (!ids.length) {
      return of([]);
    }

    return from(chunk(ids, 20)).pipe(
      concatMap((subids) =>
        forkJoin(
          subids.map((id) => this.get(id).pipe(catchError((err) => of(null))))
        )
      ),
      reduce((res, cur) => [...res, ...cur], [])
    );
  }

  getByIds4(ids: number[]) {
    if (!ids.length) {
      return of([]);
    }

    return from(ids).pipe(
      mergeMap((id) => this.get(id).pipe(catchError((err) => of(null))), 20),
      reduce((res, cur) => {
        if (cur) {
          res[cur.id] = cur;
        }
        return res;
      }, {}),
      map((dataMap) => ids.map((id) => dataMap[id] || null))
    );
  }
}
function chunk(ids: any, arg1: number): any[] {
  // throw new Error('Function not implemented.');
}
