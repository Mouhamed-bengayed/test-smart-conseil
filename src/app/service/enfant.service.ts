import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  private apiUrl = 'https://webserver.staging.4indata.fr/api/users/testwalidparent/childs/';
  private apiUrl2='https://webserver.staging.4indata.fr/api/childs/616/'

  constructor(private http: HttpClient) { }

  getChild(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateChild(newProfil:any){
    return this.http.put(`${this.apiUrl2}`,newProfil)
  }
}
