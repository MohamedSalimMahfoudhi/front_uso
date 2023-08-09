import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteChiffresComponent } from './universite-chiffres.component';

describe('UniversiteChiffresComponent', () => {
  let component: UniversiteChiffresComponent;
  let fixture: ComponentFixture<UniversiteChiffresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversiteChiffresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversiteChiffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
