import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackListeActualiteComponent } from './back-liste-actualite.component';

describe('BackListeActualiteComponent', () => {
  let component: BackListeActualiteComponent;
  let fixture: ComponentFixture<BackListeActualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackListeActualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackListeActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
