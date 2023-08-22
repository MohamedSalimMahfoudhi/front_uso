import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontQueryFormComponent } from './front-query-form.component';

describe('FrontQueryFormComponent', () => {
  let component: FrontQueryFormComponent;
  let fixture: ComponentFixture<FrontQueryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontQueryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontQueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
