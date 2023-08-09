import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAdministratifsComponent } from './services-administratifs.component';

describe('ServicesAdministratifsComponent', () => {
  let component: ServicesAdministratifsComponent;
  let fixture: ComponentFixture<ServicesAdministratifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesAdministratifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAdministratifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
