import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationOuverteComponent } from './education-ouverte.component';

describe('EducationOuverteComponent', () => {
  let component: EducationOuverteComponent;
  let fixture: ComponentFixture<EducationOuverteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationOuverteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationOuverteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
