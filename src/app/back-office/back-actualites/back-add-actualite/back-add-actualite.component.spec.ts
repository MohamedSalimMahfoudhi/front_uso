import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackAddActualiteComponent } from './back-add-actualite.component';

describe('BackAddActualiteComponent', () => {
  let component: BackAddActualiteComponent;
  let fixture: ComponentFixture<BackAddActualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackAddActualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackAddActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
