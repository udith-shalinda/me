import { Component, OnInit } from '@angular/core';
import { fadeInDownBigOnEnterAnimation, fadeInDownAnimation, fadeInDownOnEnterAnimation, fadeInUpOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-navgationbar',
  templateUrl: './navgationbar.component.html',
  styleUrls: ['./navgationbar.component.css'],
  animations: [
    fadeInUpOnEnterAnimation({
      duration: 500,
      delay:1000
    }),
  ],
})
export class NavgationbarComponent implements OnInit {
  fadeInDownBigOnEnter = true;
  constructor() { }

  ngOnInit() {
  }

}
