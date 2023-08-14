import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertionProfessionnelComponent } from './insertion-professionnel.component';

describe('InsertionProfessionnelComponent', () => {
  let component: InsertionProfessionnelComponent;
  let fixture: ComponentFixture<InsertionProfessionnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertionProfessionnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertionProfessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
