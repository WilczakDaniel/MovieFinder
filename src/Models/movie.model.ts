import {Rate} from "./rate.model";

export type Movie = {
  title : string,
  year: number,
  rated: string,
  released : string,
  runtime : string,
  genre : string,
  director : string,
  writer : string,
  actors : string,
  plot : string,
  language : string,
  country : string,
  awards : string,
  poster : string,
  ratings : Rate[],
  imdbRating : number
  imdbVotes : number
  imdbID : string
  type : string
}
