import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamictableComponent } from './dynamictable.component';
import { RangesliderComponent } from '../rangeslider/rangeslider.component';
import { SelectdropdownfilterComponent } from '../selectdropdownfilter/selectdropdownfilter.component';
import { CheckboxfilterComponent } from '../checkboxfilter/checkboxfilter.component';
describe('DynamictableComponent', () => {
  let component: DynamictableComponent;
  let fixture: ComponentFixture<DynamictableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamictableComponent, RangesliderComponent, SelectdropdownfilterComponent, CheckboxfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamictableComponent);
    component = fixture.componentInstance;
    component.serverData = [{'test' : 123},{'test2' : 456}];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
