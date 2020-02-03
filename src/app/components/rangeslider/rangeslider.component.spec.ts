import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangesliderComponent } from './rangeslider.component';

describe('RangesliderComponent', () => {
  let component: RangesliderComponent;
  let fixture: ComponentFixture<RangesliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangesliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangesliderComponent);
    component = fixture.componentInstance;
    component.filterHeader = ['RANGE SLIDER'];
    component.sliderValues = [0,1,2,4,6,8,10,12,14,16,18,24];
    component.sliderRange = ['0','1','2','4','6','8','10','12','14','16','18','24'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
