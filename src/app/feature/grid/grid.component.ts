import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UiGrid } from '../state/feature.model';
import { FeatureQuery } from '../state/feature.query';
import { FeatureService } from '../state/feature.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnDestroy, AfterViewInit {

  displayedColumns: string[] = [];
  uiRates$: Observable<UiGrid[]> = this.query.uiRates$;

  private destroyed$ = new Subject();

  constructor(
    private readonly http: FeatureService,
    private readonly query: FeatureQuery
  ) {
  }

  ngAfterViewInit(): void {
    this.http.get().pipe(takeUntil(this.destroyed$)).subscribe();

    this.uiRates$.pipe(takeUntil(this.destroyed$)).subscribe((rates) => {
      Object.keys(rates[0]).forEach(val => this.displayedColumns.push(val));
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
