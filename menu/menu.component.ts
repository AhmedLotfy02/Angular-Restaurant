import { Component, OnInit } from '@angular/core';
import { MENUS } from '../mock-menu';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus = MENUS;

  constructor() { }

  ngOnInit(): void {
  }

}
