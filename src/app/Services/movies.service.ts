import {Injectable} from '@angular/core';
import {MoviesSearch} from "../../Models/movie-search.model";
import {map} from "rxjs";
import {MoviesFormSearch} from "../movie-list/movies-form.model";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {MoviesModel} from "../movie-list/movies.model";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {
  }

  headers = new HttpHeaders({
    'X-RapidAPI-Key': '60c4d9e870msh4fd29451d455e44p162a20jsn19643a9be6c3',
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
  })
  url: string = "https://movie-database-alternative.p.rapidapi.com"

  getMovies(moviesSearch: any) {
    let movies :MoviesModel[];

    return this.httpClient.get<{[key:string] : any}>(this.url,
      {
        headers: this.headers,
        params : moviesSearch
    })
      .pipe(map((res ) => {
        movies = res["Search"];
        return movies;
      }))
  }
  getMovie(movie: any) {
    let movieSearch! :any;

    return this.httpClient.get<{[key:string] : any}>(this.url,
      {
        headers: this.headers,
        params : movie
    })
      .pipe(map((res :any) => {
        movieSearch = res;
        return movieSearch;
      }))
  }
}
