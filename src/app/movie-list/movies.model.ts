import {FormArray, FormControl, FormGroup} from "@angular/forms";

export type MoviesModel = {
  Title: FormControl<string>,
  Year:FormControl<string>,
  imdbID:FormControl<string>,
  Type:FormControl<string>,
  Poster:FormControl<string>,
}
