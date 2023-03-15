import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})

export class SlideshowComponent implements OnInit {
  title = 'Angular-Homepage';
  headers= ['Born to code', 'Graduated from TMU', 'Revolutionize Engineering'];
  imageUrls = ["assets/img/img1.jpg", "assets/img/img2.jpg", "assets/img/img3.jpg"];
  currentImage= 0;
  imageObjects: HTMLImageElement[] = [];

ngOnInit() {
  for (let i = 0; i < this.imageUrls.length; i++) {
    const img = new Image();
    img.src= this.imageUrls[i];
    this.imageObjects.push(img);
  } 
  this.updateImage();
}

  updateImage() {
     setInterval(
      () => {
        this.currentImage = (this.currentImage + 1) % this.imageUrls.length;
      }, 4000
     )
  }
}



