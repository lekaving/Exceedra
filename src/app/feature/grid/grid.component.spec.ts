import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { combineLatest, of } from 'rxjs';
import { CoreModule } from '../../core/core.module';
import { UiGrid } from '../state/feature.model';
import { FeatureQuery } from '../state/feature.query';
import { FeatureService } from '../state/feature.service';

import { GridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  let featureQueryMock: jasmine.SpyObj<FeatureQuery>;

  const expectedUiGrid = buildArray();

  beforeEach(async () => {

    featureQueryMock = jasmine.createSpyObj<FeatureQuery>(
      'featureQuery',
      ['uiRates$']
    );
    featureQueryMock.uiRates$ = of(expectedUiGrid as UiGrid[]);

    await TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [GridComponent],
      providers: [{provide: FeatureQuery, useValue: featureQueryMock}, FeatureService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load all UIGrid from query', () => {
    expect(component).toBeTruthy();
    combineLatest([component.uiRates$]).subscribe({
      next: ([uiRates]) => {
        expect(uiRates).toBeTruthy();
        expect(uiRates.length).toEqual(expectedUiGrid.length);
      }
    });
  });
});

function buildArray(): UiGrid[] {
  return [{
    date: '2020-01-02',
    CAD: 1.4549,
    HKD: 8.7203,
    ISK: 136.9,
    PHP: 56.825,
    DKK: 7.4719,
    HUF: 329.98,
    CZK: 25.411,
    AUD: 1.6006,
    RON: 4.7828,
    SEK: 10.4728,
    IDR: 15540.92,
    INR: 79.9065,
    BRL: 4.487,
    RUB: 69.1893,
    HRK: 7.4445,
    JPY: 121.75,
    THB: 33.741,
    CHF: 1.0865,
    SGD: 1.5084,
    PLN: 4.2544,
    BGN: 1.9558,
    TRY: 6.6699,
    CNY: 7.7946,
    NOK: 9.8408,
    NZD: 1.6718,
    ZAR: 15.7496,
    USD: 1.1193,
    MXN: 21.1383,
    ILS: 3.869,
    GBP: 0.84828,
    KRW: 1298.24,
    MYR: 4.5764
  }];
}
