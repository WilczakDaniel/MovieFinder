import { Component } from '@angular/core';
import {MoviesService} from "../Services/movies.service";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {MoviesFormSearch} from "../movie-list/movies-form.model";
import {MovieModel} from "./movie-form.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  movie!: FormGroup<MovieModel>
  constructor(private readonly movieService: MoviesService,private readonly router:Router) {
  }



  // public fetchMovie() {
  //   this.movieService.getMovie({
  //     s: this.movie.controls.title.value,
  //     type: this.movie.controls.type.value,
  //     r: "json"
  //   })
  //     .subscribe((res) => {
  //       this.movie = res;
  //       console.log(this.movie);
  //     })
  // }
}
