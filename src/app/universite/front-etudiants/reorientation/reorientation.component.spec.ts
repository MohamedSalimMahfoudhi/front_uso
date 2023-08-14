import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReorientationComponent } from './reorientation.component';

describe('ReorientationComponent', () => {
  let component: ReorientationComponent;
  let fixture: ComponentFixture<ReorientationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReorientationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReorientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
