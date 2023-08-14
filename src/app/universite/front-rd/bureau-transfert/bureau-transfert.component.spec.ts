import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauTransfertComponent } from './bureau-transfert.component';

describe('BureauTransfertComponent', () => {
  let component: BureauTransfertComponent;
  let fixture: ComponentFixture<BureauTransfertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BureauTransfertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BureauTransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
