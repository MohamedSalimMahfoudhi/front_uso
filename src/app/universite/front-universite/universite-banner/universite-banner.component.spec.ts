import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteBannerComponent } from './universite-banner.component';

describe('UniversiteBannerComponent', () => {
  let component: UniversiteBannerComponent;
  let fixture: ComponentFixture<UniversiteBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversiteBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversiteBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
