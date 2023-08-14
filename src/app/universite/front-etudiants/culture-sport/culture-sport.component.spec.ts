import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureSportComponent } from './culture-sport.component';

describe('CultureSportComponent', () => {
  let component: CultureSportComponent;
  let fixture: ComponentFixture<CultureSportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureSportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
