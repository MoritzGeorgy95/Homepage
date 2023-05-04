import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoading= true;
  constructor(public router: Router) {}

  ngOnInit() {
    setTimeout(()=> {
      this.isLoading= false;
    }, 2500)
  }
}
