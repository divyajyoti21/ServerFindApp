import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerdetailsService } from './services/serverdetails.service';
import { PagerService } from './services/pagination.service';
import { FormsModule } from '@angular/forms';
import { RangesliderComponent } from './components/rangeslider/rangeslider.component';
import { CheckboxfilterComponent } from './components/checkboxfilter/checkboxfilter.component';
import { SelectdropdownfilterComponent } from './components/selectdropdownfilter/selectdropdownfilter.component';
import { DynamictableComponent } from './components/dynamictable/dynamictable.component';

@NgModule({
  declarations: [
    AppComponent,
    RangesliderComponent,
    CheckboxfilterComponent,
    SelectdropdownfilterComponent,
    DynamictableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServerdetailsService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
