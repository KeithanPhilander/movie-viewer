import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviePreviewComponent } from './movie-preview/movie-preview.component';



@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent, MoviePreviewComponent],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
