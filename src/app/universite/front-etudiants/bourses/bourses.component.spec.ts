import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoursesComponent } from './bourses.component';

describe('BoursesComponent', () => {
  let component: BoursesComponent;
  let fixture: ComponentFixture<BoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
