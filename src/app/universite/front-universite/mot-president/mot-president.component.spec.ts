import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotPresidentComponent } from './mot-president.component';

describe('MotPresidentComponent', () => {
  let component: MotPresidentComponent;
  let fixture: ComponentFixture<MotPresidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotPresidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotPresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
