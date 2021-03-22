import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Feature } from './feature.model';
import { FeatureStore } from './feature.store';

@Injectable({providedIn: 'root'})
export class FeatureService {

  constructor(private featureStore: FeatureStore, private http: HttpClient) {
  }

  get(): Observable<Feature> {
    const query = `start_at=2020-01-01&end_at=2020-01-31`;
    return this.http.get<Feature>(`/history?${query}`).pipe(
      delay(1000),
      tap((data) => {
      this.featureStore.update({data, loading: false});
    }));
  }

}
