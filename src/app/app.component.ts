import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Librería';
  books = [
    {
      title: 'Angular 18 La vía rápida',
      author: 'Joseba Madrigal',
      url: 'https://leanpub.com/angular18laviarapida',
      image: 'angular17laviarapida.png',
      price: 0,
      edition: 3
    },
    {
      title: 'MongoDB en Castellano',
      author: 'Joseba Madrigal',
      url: 'https://leanpub.com/mongodbcastellano',
      image: 'mongodbcastellano.png',
      price: 0,
      edition: 2
    },
    {
      title: 'Eloquent Javascript',
      author: 'Marijn Haverbeke',
      url: 'https://eloquentjavascript.net/',
      image: 'eloquentjavascript.jpg',
      price: 0,
      edition: 3
    }
  ];
}
