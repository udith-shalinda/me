import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { ParticlesModule } from 'angular-particle';
import { ProfileImageComponent } from './profile-image/profile-image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule,MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import { NavgationbarComponent } from './navgationbar/navgationbar.component';
import { HomeComponent } from './home/home.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { LayoutModule } from '@angular/cdk/layout';
// import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    ProfileImageComponent,
    NavgationbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    BrowserAnimationsModule,
    NgxTypedJsModule,
    LayoutModule,
    // FlexLayoutModule,
  
    

    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
