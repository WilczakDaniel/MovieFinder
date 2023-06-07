import { Component } from '@angular/core';
import {MoviesService} from "../Services/movies.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  protected id!: string
  movie! : any;

  constructor(private readonly route: ActivatedRoute, private readonly movieService: MoviesService,private readonly router:Router) {
  }


  ngOnInit(): void {
    // console.log(this.route.snapshot.params)
    // this.id = this.route.snapshot.params['id']
    this.route.params.subscribe(data => {
      this.id = data['id']
    })

    this.fetchMovie();
    console.log(this.movie);
  }


  public fetchMovie() {
    this.movieService.getMovie({
      r: "json",
      i: this.id
    })
      .subscribe((res) => {
        console.log(res[0]);
        this.movie = res;
        console.log(this.movie)
      })
  }
}
