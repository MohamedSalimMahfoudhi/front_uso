import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsInternationauxComponent } from './projets-internationaux.component';

describe('ProjetsInternationauxComponent', () => {
  let component: ProjetsInternationauxComponent;
  let fixture: ComponentFixture<ProjetsInternationauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsInternationauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsInternationauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
