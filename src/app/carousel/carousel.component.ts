import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit{

  @Input() images: carouselImage[] = []
  @Input() indicators = true
  @Input() controls = true;

  selectedIndex = 0

  ngOnInit(): void {
    
  }

  // sets index of image on dot/indicator
  selectedImage(index: number): void{
    this.selectedIndex = index;
  }

}
