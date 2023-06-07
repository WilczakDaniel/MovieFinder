import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {MoviesModel} from "./movies.model";

export type MoviesFormSearch = {
  title :FormControl<string>,
  type :FormControl<string | null>,
  page : FormControl<number>,
  year : FormControl<number | null>,
}


