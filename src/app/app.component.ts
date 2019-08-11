import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personalSite';
  
  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'keywords', content:'udith shalinda,udith,shalinda,udith-shalida,udith-shalinda.github.io/me' });
  }
}
