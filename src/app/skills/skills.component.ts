import { Component, OnInit } from '@angular/core';
import { bounceInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    bounceInOnEnterAnimation({
      duration: 500,
      delay:0
    }),
  ],
})
export class SkillsComponent implements OnInit {
  bouncestatus = true;
  constructor() { }

  ngOnInit() {
  }

}
