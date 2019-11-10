import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie.model';
import { Subscription } from 'rxjs';
import { NavbarService } from 'src/app/navbar/services/navbar.service';

@Component({
  selector: 'app-movie-preview-container',
  templateUrl: './movie-preview-container.component.html',
  styleUrls: ['./movie-preview-container.component.css']
})
export class MoviePreviewContainerComponent implements OnInit, OnDestroy{

  id: number;
  movie: Movie;
  movieSub$: Subscription;

  constructor(
    private movieService: MovieService,
    private navbarService: NavbarService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.movieSub$ = this.movieService.movieFromHttp(this.id)
      .subscribe(movie => {
        this.movie = movie;
        this.navbarService.title.next(movie.title)
      })
  }

  ngOnDestroy() {
    this.movieSub$.unsubscribe();
  }

}
