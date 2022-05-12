import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form3',
  templateUrl: './reactive-form3.component.html',
  styleUrls: ['./reactive-form3.component.css'],
})
export class ReactiveForm3Component implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const validate = (control: AbstractControl): ValidationErrors | null => {
      if (!control || !control.value) {
        return;
      }

      console.log(this.form.value.type, control.value);
      if (+this.form.value.type === 1) {
        return control.value > 10 ? { error: 1 } : null;
      } else if (+this.form.value.type === 2) {
        return control.value < 10 ? { error: 1 } : null;
      }
    };

    this.form = this.fb.group({
      type: this.fb.control(1, Validators.required),
      size: this.fb.control('', validate),
    });

    this.form
      .get('type')
      .valueChanges.subscribe(() =>
        this.form.get('size').updateValueAndValidity()
      );
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
