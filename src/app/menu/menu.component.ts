import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/services/menu.service';
import { MenuList } from 'src/models/menuList';
import { ActivatedRoute, Router } from '@angular/router';
import { Item2 } from 'src/models/item2';
import { Menu } from 'src/models/menu';
import { Item } from 'src/models/Item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public config = { multi: false };
  public responseMessage: MenuList;
  public menuList: Array<Item>;

  constructor(private menuService: MenuService, private router: Router) {
    this.getMenu();
  }

  public getMenu() {
    this.menuService.getMenu().subscribe(response => {

      this.responseMessage = response;

      this.responseMessage.message.menus.forEach(element => {
        element.active = false;
      });
    })
  }

  ngOnInit() {
  }


  toggle(index: number) {
    if (!this.config.multi) {
      this.responseMessage.message.menus.filter(
        (menu, i) => i !== index && menu.active
      ).forEach(menu => menu.active = !menu.active);
    }

    this.responseMessage.message.menus[index].active = !this.responseMessage.message.menus[index].active;
  }

  openMenu(submenu: Menu){

    console.log(submenu);
    if(!submenu.items){
      this.router.navigate(["/content",submenu]);
      this.menuList = null;
    }else{
      this.menuList = submenu.items;
    }
  }

}
