import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements AfterViewInit  {
  openNewTab(url:string) {
    window.open(url, '_blank');
  }

  constructor(private el: ElementRef) {}


  @ViewChild('proj1') proj1: ElementRef;
  @ViewChild('proj2') proj2: ElementRef;
  @ViewChild('proj3') proj3: ElementRef;
  @ViewChild('proj4') proj4: ElementRef;
  @ViewChild('proj5') proj5: ElementRef;

  ngAfterViewInit(){
    const threshold = .3; // how much % of the element is in view
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {                 
                  entry.target.classList.add('fly-in');
                }
            });
        },
        { threshold }
    );
    observer.observe(this.proj1.nativeElement);
    observer.observe(this.proj2.nativeElement);
    observer.observe(this.proj3.nativeElement);
    observer.observe(this.proj4.nativeElement);
    observer.observe(this.proj5.nativeElement);
  }
}

