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
    const element = el.nextElementSibling.textContent.trim();
    // el.setAttribute('data-target', `#${element}`);
    // let children = document.querySelector('.custom-choices');
    // console.log(el.getAttribute('data-target'));
    console.log(element)
    this.textContent = el.nextElementSibling.textContent;

    if (el.checked && this.textContent === related.name) {
      // console.log(el);
      // let text = document.createElement('p');
      // text.innerHTML = `<p class="some-text">Some text</p>`
      // children.appendChild(text); 
      this.relatedOptions = related.choices;
      console.log('match');
      this.match = true;
      // console.log(document.getElementById('related-category'));
      // document.getElementById('related-category').textContent = 'here';
    } else {
      this.relatedOptions = [];
      this.match = false;
      let children = document.querySelector('#related-category');
      console.log(children)
    }
    console.log(this.relatedOptions);
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
