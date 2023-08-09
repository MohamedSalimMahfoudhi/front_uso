import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePartenaireComponent } from './home-partenaire.component';

describe('HomePartenaireComponent', () => {
  let component: HomePartenaireComponent;
  let fixture: ComponentFixture<HomePartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
