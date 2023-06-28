import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieModel} from "../search/movie-form.model";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie! : MovieModel;

  constructor(
    private readonly route: ActivatedRoute,
  ) {  }


  ngOnInit(): void {
    this.movie = this.route.snapshot.data['movie'];
    console.log(this.movie);
  }
}
