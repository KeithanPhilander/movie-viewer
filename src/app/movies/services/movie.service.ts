import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private ROOT_URL = 'http://localhost:3000/movies';
  private favorites:Observable<Movie[]>;

  constructor(private http: HttpClient) { }

  getMoviesFromHttp() {
    return this.http.get<Movie[]>(this.ROOT_URL);
  }

  movieFromHttp(id: number) {
    return this.http.get<Movie>(`${this.ROOT_URL}/${id}`)
  }

  addToFavorites(id: number): void {

    console.log(id);
  }

  // getFavorites(): Observable<Movie[]> {
  //   return this.http.get<Movie[]>(this.favorites);
  // }

}
