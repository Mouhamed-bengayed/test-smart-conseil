import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  url:string="http://api.shield.kaisens.fr/api/users/john/"
  constructor(private httpClient:HttpClient) { }
  getUser(){
    return this.httpClient.get(this.url);
  }
  updateUser(newProfil:any){
    return this.httpClient.put(`${this.url}`,newProfil)
  }
}
