import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoursesInternationalesComponent } from './bourses-internationales.component';

describe('BoursesInternationalesComponent', () => {
  let component: BoursesInternationalesComponent;
  let fixture: ComponentFixture<BoursesInternationalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoursesInternationalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoursesInternationalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
