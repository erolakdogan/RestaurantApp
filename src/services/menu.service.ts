import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuList } from 'src/models/menuList';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  httpHeaders = new HttpHeaders()
  .set('Accept', 'application/json');

  constructor(private httpClient: HttpClient) { }

  public getMenu(): Observable<MenuList>{
    return this.httpClient.get<MenuList>("http://localhost:3000/api",{headers: this.httpHeaders});
  }
}
