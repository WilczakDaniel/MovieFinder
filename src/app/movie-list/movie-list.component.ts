import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MoviesFormSearch} from "./movies-form.model";
import {MoviesService} from "../Services/movies.service";
import {MoviesModel} from "./movies.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movie!: FormGroup<MoviesFormSearch>
  movies!: MoviesModel[];


  constructor(private readonly movieService: MoviesService,private readonly router:Router) {
  }

  ngOnInit(): void {
    this.movie = new FormGroup<MoviesFormSearch>({
      title: new FormControl("", {nonNullable: true}),
      type: new FormControl(null, {nonNullable: false}),
      year: new FormControl(null, {nonNullable: false}),
      page: new FormControl(2, {nonNullable: true}),
    })
  }

  public fetchMovies() {
    this.movieService.getMovies({
      s: this.movie.controls.title.value,
      type: this.movie.controls.type.value,
      r: "json",
      page: this.movie.controls.year.value,
    })
      .subscribe((res) => {
        this.movies = res;
      })
  }

  public getOne(imdbId:string){
    this.router.navigate(['/movie/' +imdbId.toString()])
  }
}

