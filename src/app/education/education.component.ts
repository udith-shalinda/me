import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  isLoaded = true;

  constructor() { }

  ngOnInit() {
    this.isLoaded = false ;
  }

}
