import {FormArray, FormControl, FormGroup} from "@angular/forms";

export type MovieFormSearch = {
  title :FormControl<string>,
  type :FormControl<string | null>,
  year : FormControl<number | null>
}


