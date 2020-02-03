import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxfilterComponent } from './checkboxfilter.component';

describe('CheckboxfilterComponent', () => {
  let component: CheckboxfilterComponent;
  let fixture: ComponentFixture<CheckboxfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
