import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Rate, UiGrid } from './feature.model';
import { FeatureState, FeatureStore } from './feature.store';

@Injectable({providedIn: 'root'})
export class FeatureQuery extends Query<FeatureState> {

  uiRates$: Observable<UiGrid[]> = this.select((state) => state?.data?.rates)
    .pipe(
      filter((res) => !!res),
      map((rates) => Object.keys(rates).sort().reduce(
          (obj: Rate, key: string) => {
            obj[key] = rates[key];
            return obj;
          },
          {}
        )),
      map(((rates: Rate) => Object.keys(rates).map((val) => ({date: val, ...rates[val]})))));

  constructor(protected store: FeatureStore) {
    super(store);
  }

}
