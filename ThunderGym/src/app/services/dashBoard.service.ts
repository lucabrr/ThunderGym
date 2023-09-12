import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {
  clientiUrl:string ="http://localhost:8080/api/dashboard/allClienti"

constructor(private http:HttpClient) { }

test(){
 return this.http.get(this.clientiUrl);
}

}
