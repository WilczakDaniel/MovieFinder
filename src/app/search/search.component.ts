import { Component } from '@angular/core';
import {MoviesService} from "../Services/movies.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {MoviesFormSearch} from "../movie-list/movies-form.model";
import {MovieModel} from "./movie-form.model";
import {MovieFormSearch} from "./movie-forn.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  movie!: FormGroup<MovieFormSearch>

  constructor(private readonly movieService: MoviesService, private readonly router: Router) {
  }

  ngOnInit(): void {
    this.movie = new FormGroup<MovieFormSearch>({
      title: new FormControl("", {nonNullable: true}),
      type: new FormControl(null, {nonNullable: false}),
      year: new FormControl(null, {nonNullable: false})
    })
  }


  public fetchMovie() {
    this.movieService.getMovie({
      s: this.movie.controls.title.value,
      type: this.movie.controls.type.value,
      r: "json"
    })
      .subscribe((res) => {
        this.movie = res;
        console.log(this.movie);
      })
  }
}
