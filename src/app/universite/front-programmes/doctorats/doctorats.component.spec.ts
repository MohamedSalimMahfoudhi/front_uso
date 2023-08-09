import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoratsComponent } from './doctorats.component';

describe('DoctoratsComponent', () => {
  let component: DoctoratsComponent;
  let fixture: ComponentFixture<DoctoratsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctoratsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
