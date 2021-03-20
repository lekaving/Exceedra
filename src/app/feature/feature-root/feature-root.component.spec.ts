import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureRootComponent } from './feature-root.component';

describe('FeatureRootComponent', () => {
  let component: FeatureRootComponent;
  let fixture: ComponentFixture<FeatureRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
