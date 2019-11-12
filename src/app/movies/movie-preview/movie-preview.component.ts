import { Component, OnInit, Input, Output } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css']
})
export class MoviePreviewComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private movieService: MovieService) { }

  addToFavorites(id: number) {
    return this.movieService.addToFavorites(id);
  }

  ngOnInit() {
  }

}
