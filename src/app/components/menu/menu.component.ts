import { Component, OnInit } from '@angular/core';
import { menuOptions } from 'src/app/menuJson';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuOptions = menuOptions;
  greek = document.querySelector('#Greek');
  greekIsChecked = this.greek && this.greek.checked;

  constructor() { }

  toggleRelated (el) {
    let options = el.parentElement.parentElement.parentElement.lastElementChild.lastElementChild;
    let idMatch = el.id === 'Greek' || el.id === 'Minestrone';

    if (el.checked) {
      if (idMatch) {
        options.style.display = 'block';
      }
    } else {
      if (idMatch) {
        options.style.display = 'none';
      }
    }
  }

  toggleMenu (el) {
    let options = el.parentElement.parentElement.nextElementSibling;
    let isChecked = el.firstElementChild.firstElementChild.checked;
    
    isChecked ? options.style.display = 'block' : options.style.display = 'none';
    console.log(document.querySelector('#Greek').checked)
  }

  toggleOption (el) {    
    let options = el.parentElement.nextElementSibling;
    
    el.checked ? options.style.display = 'block' : options.style.display = 'none';
  }

  ngOnInit() {}

}
