import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontAccordianDocComponent } from './front-accordian-doc.component';

describe('FrontAccordianDocComponent', () => {
  let component: FrontAccordianDocComponent;
  let fixture: ComponentFixture<FrontAccordianDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontAccordianDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontAccordianDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
