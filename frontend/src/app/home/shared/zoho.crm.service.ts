import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ZohoCrmService {

      constructor(private http: HttpClient) { }

      public getZohoCrmReport() {
         const headers = this.getHeaders();
         return this.http.get("http://localhost:8080/crm/getOpenDealReport", {
           headers: headers
         });
      }

      public getHeaders() {
        const headers = new HttpHeaders ( {
          'Content-Type': 'application/json',
        });
        return headers;
      }
}
