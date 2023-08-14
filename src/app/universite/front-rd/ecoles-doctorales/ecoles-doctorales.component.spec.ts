import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcolesDoctoralesComponent } from './ecoles-doctorales.component';

describe('EcolesDoctoralesComponent', () => {
  let component: EcolesDoctoralesComponent;
  let fixture: ComponentFixture<EcolesDoctoralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcolesDoctoralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcolesDoctoralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
