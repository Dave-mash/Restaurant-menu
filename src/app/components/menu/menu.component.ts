import { Component, OnInit } from '@angular/core';
import { menuOptions } from 'src/app/menuJson';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuOptions = menuOptions;

  constructor() { }

  toggleMenu (el) {
    const element = el.textContent.trim();
    el.setAttribute('data-target', `#${element}`)
    console.log(el.getAttribute('data-target'))
  }

  ngOnInit() {
    this.menuOptions.forEach(option => console.log(option['name']));
    const dataProperties = {
      
    }
    this.menuOptions[0]['properties'] = dataProperties;
  }

}
