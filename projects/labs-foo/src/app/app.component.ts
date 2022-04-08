import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formGroup: FormGroup;
  bar = new FormControl('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(0)]));

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      foo: ['', [Validators.required]],
      bar: this.bar
    });
  }
}
