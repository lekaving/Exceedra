import { Component, OnInit } from '@angular/core';
import { FeatureQuery } from '../state/feature.query';

@Component({
  selector: 'app-feature-root',
  templateUrl: './feature-root.component.html',
  styleUrls: ['./feature-root.component.scss']
})
export class FeatureRootComponent implements OnInit {

  loading$ = this.query.selectLoading();
  constructor(private readonly query: FeatureQuery) { }

  ngOnInit(): void {
  }

}
