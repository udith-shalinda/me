import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { ParticlesModule } from 'angular-particle';
import { ProfileImageComponent } from './profile-image/profile-image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule,MatButtonModule, MatIconModule} from '@angular/material';
import { NavgationbarComponent } from './navgationbar/navgationbar.component';



@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    ProfileImageComponent,
    NavgationbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    BrowserAnimationsModule,
    

    MatCardModule,
    MatButtonModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
