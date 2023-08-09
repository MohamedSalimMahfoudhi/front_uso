import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsCompComponent } from './formations-comp.component';

describe('FormationsCompComponent', () => {
  let component: FormationsCompComponent;
  let fixture: ComponentFixture<FormationsCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationsCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
