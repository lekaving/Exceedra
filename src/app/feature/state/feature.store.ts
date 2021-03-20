import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Feature } from './feature.model';

export interface FeatureState {
  data: Feature;
}

export function createInitialState(): FeatureState {
  return {} as FeatureState;
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'feature'})
export class FeatureStore extends Store<FeatureState> {

  constructor() {
    super(createInitialState());
  }

}
