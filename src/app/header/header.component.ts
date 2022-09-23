import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toggleButton() {
    const navToggle = document.getElementsByClassName('nav-toggle')[0];
    const navigation = document.getElementById('navigation');
    const visibility = navigation.getAttribute('data-visible');

    if (visibility === 'false') {
      navigation.setAttribute('data-visible', 'true');
      navToggle.setAttribute('aria-expanded', 'true');
    } else {
      navigation.setAttribute('data-visible', 'false');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  }
}
