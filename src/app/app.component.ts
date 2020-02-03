import { Component } from '@angular/core';
import  { ServerdetailsService } from './services/serverdetails.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // display items
  displayItems: any[];
      
  allItems = [];
  serverDetails : any;
  // apply filter
  applyFilter: any[];

  constructor(private serverdetailsService : ServerdetailsService) {
    this.serverdetailsService.getServerDetails().subscribe((values) => {
      this.serverDetails = values; 
      this.allItems = this.serverDetails.servers; 
      this.displayItems = this.allItems;
    });
  }
}
