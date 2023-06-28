import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MovieModel} from "../search/movie-form.model";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  protected id!: string
  movie! : MovieModel;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router : Router
  ) {  }


  ngOnInit(): void {
    this.movie = this.route.snapshot.data['movie'];
    console.log(this.movie);
  }
}
