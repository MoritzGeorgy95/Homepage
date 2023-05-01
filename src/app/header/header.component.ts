import { Component, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 

  mobile = false;
  menuOpen = false;

  constructor(public router: Router) {
    this.checkMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkMobile();
  }

  private checkMobile() {
    if (window.innerWidth < 700) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }

  openMobileMenu() {
    this.menuOpen = true;
  }

  closeMobileMenu() {
    this.menuOpen = false;
  }

}
