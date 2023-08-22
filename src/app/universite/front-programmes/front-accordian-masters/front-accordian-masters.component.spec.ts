import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontAccordianMastersComponent } from './front-accordian-masters.component';

describe('FrontAccordianMastersComponent', () => {
  let component: FrontAccordianMastersComponent;
  let fixture: ComponentFixture<FrontAccordianMastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontAccordianMastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontAccordianMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
