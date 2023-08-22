import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontAccordianComponent } from './front-accordian.component';

describe('FrontAccordianComponent', () => {
  let component: FrontAccordianComponent;
  let fixture: ComponentFixture<FrontAccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontAccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
