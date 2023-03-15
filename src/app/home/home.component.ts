import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-slideshow></app-slideshow>
  <app-about></app-about>
  <app-projects></app-projects>
`,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
