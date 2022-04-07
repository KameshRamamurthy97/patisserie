import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from './menu/menu';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient:HttpClient) { }

  getMenus():Observable<Menu[]> {
    return this.httpClient.get<Menu[]>("http://localhost:8080/menus");
  }
}
