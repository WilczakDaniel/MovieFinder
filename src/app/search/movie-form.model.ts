import {FormArray, FormControl, FormGroup} from "@angular/forms";

export type MovieModel = {
  Title: FormControl<string>,
  Year:FormControl<string>,
  Rated:FormControl<string>,
  Released:FormControl<string>,
  Runtime:FormControl<string>,
  Genre:FormControl<string>,
  Director:FormControl<string>,
  Writer:FormControl<string>,
  Actors:FormControl<string>,
  Plot:FormControl<string>,
  Language:FormControl<string>,
  Country:FormControl<string>,
  Awards:FormControl<string>,
  imdbID:FormControl<string>,
  Type:FormControl<string>,
  Poster:FormControl<string>,
}
