import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkboxfilter',
  templateUrl: './checkboxfilter.component.html',
  styleUrls: ['./checkboxfilter.component.css']
})
export class CheckboxfilterComponent {
  @Output() checkBoxEvent = new EventEmitter<any>();
  constructor() { }

  checkValue(e) {
    this.checkBoxEvent.emit(e);
  }

}
