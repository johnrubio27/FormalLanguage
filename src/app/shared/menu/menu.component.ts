import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Alfabeto',
        icon: 'pi pi-align-justify',
        routerLink: '/alfabeto'
      },
      {
        label: 'Lenguaje',
        icon: 'pi pi-file',
        routerLink: '/lenguaje'
      },
      {
        label: 'Palabra',
        icon: 'pi pi-book',
        routerLink: '/palabra'
      }
    ];
   }

  ngOnInit(): void { }

}
