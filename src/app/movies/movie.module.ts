import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MoviePreviewContainerComponent } from './movies-preview-container/movie-preview-container.component';
import { MoviePreviewComponent } from './movie-preview/movie-preview.component';



@NgModule({
  declarations: [MovieListComponent, MoviePreviewContainerComponent, MoviePreviewComponent],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
