import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MovieComponent} from "./movie/movie.component";
import {SearchComponent} from "./search/search.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieResolverService} from "./Services/movie-resolver.service";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
    resolve: {
      movie: MovieResolverService
    }
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'searchMany',
    component: MovieListComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
