import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private ROOT_URL = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  getMoviesFromHttp() {
    return this.http.get<Movie[]>(this.ROOT_URL);
  }

  movieFromHttp(id: number) {
    return this.http.get<Movie>(`${this.ROOT_URL}/${id}`)
  }

}
