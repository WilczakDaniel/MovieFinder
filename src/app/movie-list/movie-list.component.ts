import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {MoviesForm} from "./movies-form.model";
import {MoviesService} from "../Services/movies.service";
import {HttpParamsOptions} from "@angular/common/http";
import {MoviesModel} from "./movies.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movie!: FormGroup<MoviesForm>
  options!: HttpParamsOptions
  movies!: any;

  displayedColumns: string[] = ['Title', 'Year', 'Type', 'Poster'];

  constructor(private readonly movieService: MoviesService,private readonly router:Router) {
  }

  ngOnInit(): void {


    this.movie = new FormGroup<MoviesForm>({
      title: new FormControl("", {nonNullable: true}),
      type: new FormControl(null, {nonNullable: false}),
      year: new FormControl(null, {nonNullable: false}),
      page: new FormControl(1, {nonNullable: true}),
    })
  }

  public fetchMovies() {
    this.movieService.getMovies({
      s: this.movie.controls.title.value,
      type: this.movie.controls.type.value,
      r: "json",
      page: 1
    })
      .subscribe((res) => {
        this.movies = res;
        this.movies = this.movies[0];
        console.log(this.movies);
      })
  }

  public getOne(imdbId:any){
    this.router.navigate(['/movie/' +imdbId.toString()])
  }
}

