import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { ParticlesModule } from 'angular-particle';
import { ProfileImageComponent } from './profile-image/profile-image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule,MatButtonModule, MatIconModule, MatToolbarModule, MatProgressSpinnerModule} from '@angular/material';
import { NavgationbarComponent } from './navgationbar/navgationbar.component';
import { HomeComponent } from './home/home.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { LayoutModule } from '@angular/cdk/layout';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    ProfileImageComponent,
    NavgationbarComponent,
    HomeComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    BrowserAnimationsModule,
    NgxTypedJsModule,
    LayoutModule,
    ScrollingModule,
    

    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
