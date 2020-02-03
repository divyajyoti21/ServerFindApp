import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectdropdownfilterComponent } from './selectdropdownfilter.component';


describe('SelectdropdownfilterComponent', () => {
  let component: SelectdropdownfilterComponent;
  let fixture: ComponentFixture<SelectdropdownfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectdropdownfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectdropdownfilterComponent);
    component = fixture.componentInstance;
    component.dropDownValues = ['SAS','SSD'];
    component.filterHeader = ['HDD']
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
