import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from './menu';
import { menuItems } from './menu-data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems : Menu[] = [];
  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    console.log("init");
    this.menuService.getMenus().subscribe((data) => {
      console.log(data);
      this.menuItems=data;
    });
  }

}
