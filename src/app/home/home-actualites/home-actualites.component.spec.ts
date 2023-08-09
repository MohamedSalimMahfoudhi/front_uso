import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeActualitesComponent } from './home-actualites.component';

describe('HomeActualitesComponent', () => {
  let component: HomeActualitesComponent;
  let fixture: ComponentFixture<HomeActualitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeActualitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeActualitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
