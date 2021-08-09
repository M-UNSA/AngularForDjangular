import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  movies = [{title: 'Título'}, {year:12}, {id:0}, {desc:"Descripción"}];

  constructor(private api: ApiService){
    this.getMovies();
  }

  getMovies = () => {
    this.api.getAllMovies().subscribe(
      data => {
        console.log(data);
        this.movies = data;
      },
      error => {
        console.log(error);
      }
    )
  }
}
