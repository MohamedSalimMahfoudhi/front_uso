import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieteCivileComponent } from './societe-civile.component';

describe('SocieteCivileComponent', () => {
  let component: SocieteCivileComponent;
  let fixture: ComponentFixture<SocieteCivileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocieteCivileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocieteCivileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
