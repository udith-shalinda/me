import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent
},{
  path:'skills',
  component:SkillsComponent 
},{
  path:'education',
  component:EducationComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
