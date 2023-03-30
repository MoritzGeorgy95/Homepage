import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() lightMode = false;

  mobile = false;
  menuOpen = false;

  constructor() {
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

  showPlaceholder() {
    alert('Lebenslauf muss ich noch aktualisieren. In Arbeit');
  }
}
