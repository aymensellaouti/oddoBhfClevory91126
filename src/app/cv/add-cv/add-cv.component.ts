import { Component, inject } from "@angular/core";
import { FormBuilder, Validators, AbstractControl, ReactiveFormsModule } from "@angular/forms";
import { debounceTime } from "rxjs";
import { CvService } from "../services/cv.service";
import { uniqueCinValidator } from "../../validators/unique-cin.validator";

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
  imports: [ReactiveFormsModule],
})
export class AddCvComponent {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);

  form = this.formBuilder.group(
    {
      name: ['', { validatiors: Validators.required, updateOn: 'blur' }],
      firstname: ['', Validators.required],
      path: [''],
      job: ['', Validators.required],
      cin: [
        '',
        {
          validators: [Validators.required, Validators.pattern('[0-9]{8}')],
          asyncValidators: [uniqueCinValidator(this.cvService)],
        },
      ],
      age: [
        0,
        {
          validators: [Validators.required],
          updateOn: 'blur',
        },
      ],
    },
    {
      validators: [],
      asyncValidators: [],
      updateOn: 'change',
    },
  );
  constructor() {
    this.name.valueChanges
      // .pipe(debounceTime(500))
      .subscribe({
        next: (val) => console.log(val),
      });
    this.age.valueChanges.subscribe({
      next: (age) => {
        if (age >= 18) this.path?.enable();
        else this.path?.disable();
      },
    });
  }
  addCv() {}

  get name(): AbstractControl {
    return this.form.get('name')!;
  }
  get firstname() {
    return this.form.get('firstname');
  }
  get age(): AbstractControl {
    return this.form.get('age')!;
  }
  get job() {
    return this.form.get('job');
  }
  get path() {
    return this.form.get('path');
  }
  get cin(): AbstractControl {
    return this.form.get('cin')!;
  }
}
