import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitesRechercheComponent } from './unites-recherche.component';

describe('UnitesRechercheComponent', () => {
  let component: UnitesRechercheComponent;
  let fixture: ComponentFixture<UnitesRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitesRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitesRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
