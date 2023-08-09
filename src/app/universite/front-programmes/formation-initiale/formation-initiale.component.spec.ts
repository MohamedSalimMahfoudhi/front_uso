import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationInitialeComponent } from './formation-initiale.component';

describe('FormationInitialeComponent', () => {
  let component: FormationInitialeComponent;
  let fixture: ComponentFixture<FormationInitialeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationInitialeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationInitialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
