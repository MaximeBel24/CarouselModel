import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from "./carousel/carousel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'carousel';


  images = [
    {
      imageSrc : 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt : 'mountain'
    },
    {
      imageSrc : 'https://images.pexels.com/photos/983200/pexels-photo-983200.jpeg',
      imageAlt: 'tree, lava'
    },
    {
      imageSrc : 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt : 'skyscraper'
    },
    {
      imageSrc : 'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt: 'space'
    },
    {
      imageSrc : 'https://images.pexels.com/photos/1005711/pexels-photo-1005711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt : 'flower'
    },
    {
      imageSrc : 'https://images.pexels.com/photos/516541/pexels-photo-516541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt: 'tiger'
    }
  ]

}
