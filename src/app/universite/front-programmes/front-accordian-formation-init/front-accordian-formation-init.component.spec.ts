import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontAccordianFormationInitComponent } from './front-accordian-formation-init.component';

describe('FrontAccordianFormationInitComponent', () => {
  let component: FrontAccordianFormationInitComponent;
  let fixture: ComponentFixture<FrontAccordianFormationInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontAccordianFormationInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontAccordianFormationInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
