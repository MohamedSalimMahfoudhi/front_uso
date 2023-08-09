import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuresAppuiComponent } from './structures-appui.component';

describe('StructuresAppuiComponent', () => {
  let component: StructuresAppuiComponent;
  let fixture: ComponentFixture<StructuresAppuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuresAppuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuresAppuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
