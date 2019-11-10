import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviePreviewContainerComponent } from './movies-preview-container/movie-preview-container.component';
import { FavoritesComponent } from './favorites/favorites.component';


const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  },
  {
    path: ':id',
    component: MoviePreviewContainerComponent
  },
  {
    path: ':favorites',
    component: FavoritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
