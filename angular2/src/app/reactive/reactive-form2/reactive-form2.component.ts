import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-reactive-form2',
  templateUrl: './reactive-form2.component.html',
  styleUrls: ['./reactive-form2.component.css'],
})
export class ReactiveForm2Component implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  get skillsForm() {
    return this.form.get('skills') as FormArray;
  }

  newSkill = (item) => {
    const group =  this.fb.group({
      type: this.fb.control(item.type, Validators.required),
      score: this.fb.control(item.score, Validators.required),
    });

    group.get('type').valueChanges.subscribe(() => {
      group.get('score').setValue('')
    })

    return group
  };
  ngOnInit(): void {
    const skills = [{ type: 'html', score: 90 }];

    const validate = (control: AbstractControl): ValidationErrors | null => {
      if (!control || !control.value) {
        return;
      }

      const items = control.value;

      if (items.reduce((total, item) => total + (item.score ?? 0), 0) < 180) {
        return { score: 180 };
      }
    };

    this.form = this.fb.group({
      name: this.fb.control(''),
      skills: this.fb.array(skills.map(this.newSkill), [
        Validators.minLength(3),
        validate,
      ]),
    });

    this.form.get('name').valueChanges.subscribe(() => {
      this.skillsForm.clear();
    });
  }

  onAdd() {
    this.skillsForm.push(this.newSkill({}));
  }

  onDel(i: number) {
    this.skillsForm.removeAt(i);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
