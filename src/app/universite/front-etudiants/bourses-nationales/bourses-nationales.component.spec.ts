import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoursesNationalesComponent } from './bourses-nationales.component';

describe('BoursesNationalesComponent', () => {
  let component: BoursesNationalesComponent;
  let fixture: ComponentFixture<BoursesNationalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoursesNationalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoursesNationalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
