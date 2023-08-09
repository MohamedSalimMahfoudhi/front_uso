import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignementDistComponent } from './enseignement-dist.component';

describe('EnseignementDistComponent', () => {
  let component: EnseignementDistComponent;
  let fixture: ComponentFixture<EnseignementDistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignementDistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignementDistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
