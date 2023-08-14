import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompagnementEcouteComponent } from './accompagnement-ecoute.component';

describe('AccompagnementEcouteComponent', () => {
  let component: AccompagnementEcouteComponent;
  let fixture: ComponentFixture<AccompagnementEcouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccompagnementEcouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccompagnementEcouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
