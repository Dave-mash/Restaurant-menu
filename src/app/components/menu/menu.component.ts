import { Component, OnInit } from '@angular/core';
import { menuOptions } from 'src/app/menuJson';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuOptions = menuOptions;
  relatedOptions = [];

  constructor() { }

  toggleMenu (el) {
    const element = el.textContent.trim();
    el.setAttribute('data-target', `#${element}`)
    console.log(el.getAttribute('data-target'))
  }

  checkboxToggle(el) {
    const element = el.parentElement.nextElementSibling;

    if (el.checked) {
      // this.menuOptions.forEach(option => {
      //   option.related.forEach(relatedOption => {
      //     if (el.nextElementSibling.textContent == relatedOption['name']) {
      //       this.relatedOptions = relatedOption['choices'];
      //     }
      //   })
      // });
      // console.log(`#${el.nextElementSibling.textContent}`)
      console.log('checked')
      console.log(element);
      element.style.display = 'flex';
    } else {
      console.log('unchecked')
      // this.relatedOptions = [];
      console.log(element.style.display);
      // console.log(this.relatedOptions)
      element.style.display = 'none';
    }
  }

  ngOnInit() {
    this.menuOptions.forEach(option => console.log(option['name']));
    const dataProperties = {
      
    }
    this.menuOptions[0]['properties'] = dataProperties;
  }

}
