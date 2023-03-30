import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit{


  constructor(private el: ElementRef) {}


  @ViewChild('el1') el1: ElementRef;
  @ViewChild('el2') el2: ElementRef;



  ngAfterViewInit() {
    const threshold = .3; // how much % of the element is in view
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {                 
                  entry.target.classList.add('fly-in');
                }
                // else{
                  
                //   entry.target.classList.remove('fly-in');
                // }
            });
        },
        { threshold }
    );
    observer.observe(this.el1.nativeElement);
    observer.observe(this.el2.nativeElement);
  }
}
