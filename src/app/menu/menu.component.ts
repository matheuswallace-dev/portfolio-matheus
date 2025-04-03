import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Menu } from '../models/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  constructor(private menuService: MenuService) {}

  menuStatus = 'closed';

  menuItems?: Array<Menu>;

  ngOnInit() {
    const menu = this.menuService.getItems();

    this.menuItems = menu;
  }

  menuClick(): void {
    this.menuStatus = this.menuStatus == 'open' ? 'closed' : 'open';
  }
}
