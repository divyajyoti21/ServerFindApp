import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-rangeslider',
  templateUrl: './rangeslider.component.html',
  styleUrls: ['./rangeslider.component.css']
})
export class RangesliderComponent {

  @Input() sliderRange : any[];
  @Input() sliderValues : any[];
  @Input() filterHeader : any[];
  @Output() rangeSliderValue = new EventEmitter<number>();
  storageFilterValue = 0;
  displayValue = "";
  //range slider
  //sliderRange = ["0","250GB","500GB","1TB","2TB","3TB","4TB","8TB","12TB","24TB","48TB","72TB"];

  //range slider values
  //sliderValues = [0,250,500,1,2,3,4,8,12,24,48,72];
  constructor() { }

  sliderValue(e) {
    
    this.displayValue = this.sliderRange[e.target.value];
    this.storageFilterValue = this.sliderValues[e.target.value];
    this.rangeSliderValue.emit(this.storageFilterValue);
  }

}
