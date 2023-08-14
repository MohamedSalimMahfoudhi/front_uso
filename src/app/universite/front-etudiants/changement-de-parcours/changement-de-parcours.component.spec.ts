import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangementDeParcoursComponent } from './changement-de-parcours.component';

describe('ChangementDeParcoursComponent', () => {
  let component: ChangementDeParcoursComponent;
  let fixture: ComponentFixture<ChangementDeParcoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangementDeParcoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangementDeParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
