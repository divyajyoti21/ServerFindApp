import { Component, OnInit, Input } from '@angular/core';
import { PagerService } from '../../services/pagination.service'
import { ChangeDetectorRef, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-dynamictable',
  templateUrl: './dynamictable.component.html',
  styleUrls: ['./dynamictable.component.css']
})
export class DynamictableComponent {

  title = 'servers-app';
  expanded = false;
  selectedValue = "4 TB";
  storageFilter = 0;
  hddCountFilter = 0;
  serverDetails : any = {};
  hddFilter = "";
  hddType = "";
  locationFilter = "";
  // array of all items to be paged
  private allItems = [];

  //filter items array
  filterItems: any[];

  // pager object
  pager: any = {};
  
  // paged items
  pagedItems: any[];

  // display items
  displayItems: any[];

  // apply filter
  applyFilter: any[];

  //remove filter
  removeFiler: any[];

  //list of filterr
  ramCapacityFilters: any[];

  //range slider
  sliderRange = ["0","250GB","500GB","1TB","2TB","3TB","4TB","8TB","12TB","24TB","48TB","72TB"];

  countryCode = {'AMSTERDAM': 'AmsterdamAMS-01', 'SINGAPORE': 'SingaporeSIN-11', 'WASHINGTON' : 'Washington D.C.WDC-01', 'DALLAS': 'DallasDAL-10', 'SANFRANSCISCO': 'San FranciscoSFO-12', 'FRANKFURT' : 'FrankfurtFRA-10'};

  //range slider values
  sliderValues = [0,250,500,1,2,3,4,8,12,24,48,72];

  @Input() serverData;

  constructor(private pagerService : PagerService, private changeDetectorRef : ChangeDetectorRef) {
    this.setPage(1);
   }
  
   ngOnChanges(change : SimpleChange) {
    for(let prop in change) {
      var current = (change[prop].currentValue);
    }
    this.allItems = current;
    this.displayItems = this.allItems;
    this.ramCapacityFilters = [];
    this.setPage(1);
   }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }
    // get pager object from service
    if(this.allItems.length > 0) {
    this.pager = this.pagerService.getPager(this.allItems.length, page);
    // get current page of items
    this.pagedItems = this.displayItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
  }
  
  checkValue(e) { 
    if(e.target.checked)
    this.ramCapacityFilters.push(e.target.value);
    if(!e.target.checked)
    this.ramCapacityFilters.splice( this.ramCapacityFilters.indexOf(e.target.value), 1 );
    this.applyFilters();
    this.setPage(1);
  }

  hddCountSlider(e) {
    this.hddCountFilter = e;
    this.applyFilters();
  }

  hddStorageSlider(e) {
    this.storageFilter = e;
    this.applyFilters();
  }

  hddTypeChanged(hddValue) {
    this.hddFilter = hddValue;
    this.applyFilters();
  }

  locationChanged(location) {
    this.locationFilter = this.countryCode[location];
    this.applyFilters();
  }

  clearFilter() {
    this.displayItems = this.allItems;
    this.setPage(1);
  }

  applyFilters(){
    this.filterItems = this.allItems;
    var storageFiltered = this.allItems;
    if(this.storageFilter !== 0) {
      storageFiltered = this.allItems.filter((value) => parseInt(value.hdd.memory) == this.storageFilter);
    }
    var hddCountFiltered = storageFiltered;
    if(this.hddCountFilter !== 0) {
      hddCountFiltered = hddCountFiltered.filter((value) => parseInt(value.hdd.count) == this.hddCountFilter);
    }
    var locationFiltered = hddCountFiltered;
    if(this.locationFilter) {
      locationFiltered = hddCountFiltered.filter((value) => value.location == this.locationFilter);
    }
    if(this.hddFilter) {
      var hddFiltered = locationFiltered.filter((value) => value.hdd.type == this.hddFilter);
    } else {
      hddFiltered = locationFiltered;
    }
    if(this.ramCapacityFilters.length!=0) {
    var ramCapFiltered = [];
    for(let i=0;i<hddFiltered.length;i++) {
      for(let j=0;j<this.ramCapacityFilters.length;j++) {
        if(hddFiltered[i].ram.memory == this.ramCapacityFilters[j]) {
          ramCapFiltered.push(hddFiltered[i]);
        }
      }
    }
  } else {
    ramCapFiltered = hddFiltered;
  }
    this.displayItems = ramCapFiltered;
    this.setPage(1);

  }

}
