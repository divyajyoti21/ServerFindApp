import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerdetailsService {

  constructor(private http: HttpClient) { }

  serverDetailsUrl = 'http://api.candidate.lsw.hs1.nl:4300/api/servers';

  getServerDetails() {
    console.log("http call made");
    return this.http.get(this.serverDetailsUrl);
  }

  
}
