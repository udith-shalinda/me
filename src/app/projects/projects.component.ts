import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {

  items = [
    {
      name:"clone of Facebook(micro-services)",
      description:["flutter","spring boot"],
      url:"https://github.com/udith-shalinda/facebook_clone_flutter"
    },
    {
      name:"clone of Medium",
      description:["reactjs","spring boot"],
      url:"https://github.com/udith-shalinda/Blog_Post_Backend"
    },
    {
      name:"clone of stackoverflow(real-time)",
      description:["reactjs","spring boot"],
      url:"https://github.com/udith-shalinda/stackoverflow_clone"
    },
    {
      name:"Student management system",
      description:["futter","Node js"],
      url:"https://github.com/udith-shalinda/Student_management_system_flutter"
    },
    {
      name:"Post Sharing Site",
      description:["Angular","Node js"],
      url:"https://github.com/udith-shalinda/Post_sharing_site"
    },
    {
      name:"Clone of Stack overFlow",
      description:["futter","Firebase"],
      url:"https://github.com/udith-shalinda/My_stackoverflow"
    },
  ];
  
  constructor() { 
  }

  ngOnInit() {
  }

}
