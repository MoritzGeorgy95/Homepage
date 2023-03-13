import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})

export class SlideshowComponent implements OnInit{
  title = 'Angular-Homepage';
  images= ['img1.jpg', 'img2.jpg', 'img3.jpg'];
  currentImage= 0;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
     setInterval(
      () => {
        this.currentImage++;
        this.currentImage = this.currentImage % this.images.length
      }, 4000
     )
  }
}
