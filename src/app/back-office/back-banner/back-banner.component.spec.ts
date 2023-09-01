import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackBannerComponent } from './back-banner.component';

describe('BackBannerComponent', () => {
  let component: BackBannerComponent;
  let fixture: ComponentFixture<BackBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
