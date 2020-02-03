23

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ServerdetailsService } from './serverdetails.service';

describe('ServerdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [ServerdetailsService]
  }));

  it('should be created', () => {
    const service: ServerdetailsService = TestBed.get(ServerdetailsService);
    expect(service).toBeTruthy();
  });

   it('should have getData function', () => {
    const service: ServerdetailsService = TestBed.get(ServerdetailsService);
    expect(service.getServerDetails).toBeTruthy();
   });
});
