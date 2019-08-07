import { Component, OnInit } from '@angular/core';
import { menuOptions } from 'src/app/menuJson';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuOptions = menuOptions;
  match = false;
  relatedOptions = [];
  textContent;

  constructor() { }

  toggleMenu (el) {
    const element = el.textContent.trim();
    el.setAttribute('data-target', `#${element}`)
    console.log(el.getAttribute('data-target'))
  }

  toggleOption (el, related) {    
    let options = el.parentElement.nextElementSibling;
    
    el.checked ? options.style.display = 'block' : options.style.display = 'none';
  }

  ngOnInit() {
    this.menuOptions.forEach(option => console.log(option['name']));
    const dataProperties = {
      
    }
    this.menuOptions[0]['properties'] = dataProperties;
  }

}
