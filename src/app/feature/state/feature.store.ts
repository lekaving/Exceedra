import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Feature } from './feature.model';

export interface FeatureState {
  data: Feature;
  loading: boolean;
}

const createInitialState = (): FeatureState => ({
    data: {} as Feature,
    loading: true
  });

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'feature'})
export class FeatureStore extends Store<FeatureState> {

  constructor() {
    super(createInitialState());
  }

}
