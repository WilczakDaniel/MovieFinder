import {Injectable} from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Movie} from "../../Models/movie.model";
import {MoviesService} from "./movies.service";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieResolverService implements Resolve<Movie> {

    constructor(
      private readonly _movieService: MoviesService,
    ) { }

    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<Movie> | Promise<Movie> | Movie {
      const id = route.params['id'];
      return this._movieService.getMovie({
        r: "json",
        i: id
      }).pipe(
        map((result) => result)
      );
    }
}
