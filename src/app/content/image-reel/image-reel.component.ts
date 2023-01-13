import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-image-reel',
  templateUrl: './image-reel.component.html',
  styleUrls: ['./image-reel.component.css']
})
export class ImageReelComponent implements OnInit {

  public imagePaths: string[];
  public currentImage: any;
  public images: any;

  constructor(private elem: ElementRef, private renderer: Renderer2) { 
    this.imagePaths = ["Lilith-Group-Web.png", "Jason-Monica-Specter (2).png"];
    this.InitializeList();
  }

  ngOnInit(): void {
    let imageIndex = 0;
    setInterval(() => {
      // Make sure the list is initialized
      if (this.images.length == 0) {
        this.InitializeList();
      }

      // Change which image is displayed
      for (let i = 0; i < this.images.length; i++) {
        if (this.images[i] == this.images[imageIndex]) {
          this.renderer.removeClass(this.images[i], "transparent")
        }else {
          this.renderer.addClass(this.images[i], "transparent");
        }
      }

      // Set the next index
      imageIndex += 1;
      if (imageIndex >= this.images.length) {
        imageIndex = 0;
      }
    }, 5000);
  }

  InitializeList() {
    this.images = this.elem.nativeElement.querySelectorAll('.image-reel-item');
    this.currentImage = this.images[0];
  }

}
