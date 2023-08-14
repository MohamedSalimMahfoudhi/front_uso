import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoursesAlternanceComponent } from './bourses-alternance.component';

describe('BoursesAlternanceComponent', () => {
  let component: BoursesAlternanceComponent;
  let fixture: ComponentFixture<BoursesAlternanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoursesAlternanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoursesAlternanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
