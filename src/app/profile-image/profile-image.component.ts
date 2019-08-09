import { Component, OnInit } from '@angular/core';
import { bounceIn } from 'ng-animate/lib/bouncing';
import { useAnimation, transition, trigger } from '@angular/animations';
import { bounceAnimation, flashAnimation, bounceInOnEnterAnimation, collapseOnLeaveAnimation, fadeInDownOnEnterAnimation,bounceInAnimation,bounceInUpAnimation } from 'angular-animations';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css'],
  animations: [
    bounceInOnEnterAnimation({
      duration: 500,
      delay:0
    }),
    bounceAnimation({}),
    bounceInUpAnimation()
  ],
})
export class ProfileImageComponent implements OnInit {
  bouncestatus = false;

  constructor() { }

  ngOnInit() {
    
  }

}
