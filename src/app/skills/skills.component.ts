import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { bounceInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    bounceInOnEnterAnimation({
      duration: 500,
      delay:0
    }),
  ],
})
export class SkillsComponent implements OnInit {
  bouncestatus = true;
  items=[
    {
      url:"assets/Images/icons/flutter.png",
      alt:"flutter"
    },
    {
      url:"assets/Images/icons/java.png",
      alt:"java"
    },
    {
      url:"assets/Images/icons/spring_boot.png",
      alt:"spring_boot"
    },
    {
      url:"assets/Images/icons/angular.png",
      alt:"angular"
    },
    {
      url:"assets/Images/icons/nodejs.png",
      alt:"nodejs"
    },
    {
      url:"assets/Images/icons/reactjs.png",
      alt:"reactjs"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
