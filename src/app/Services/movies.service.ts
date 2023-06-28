import {Injectable} from '@angular/core';
import {map} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
        console.log(res['Search'])
        return res['Search'];
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
