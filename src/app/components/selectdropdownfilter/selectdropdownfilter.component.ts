import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selectdropdownfilter',
  templateUrl: './selectdropdownfilter.component.html',
  styleUrls: ['./selectdropdownfilter.component.css']
})
export class SelectdropdownfilterComponent  {
  
  selectedVal = "";
  selectedParam = "";
  @Input() filterHeader : any[];
  @Input() dropDownValues : any[];
  @Output() selectedValue = new EventEmitter<any>();
  
  
  dropDownValueChanged(e) {
    this.selectedVal = this.selectedParam;
    this.selectedValue.emit(e.target.value);
  }
  
}
