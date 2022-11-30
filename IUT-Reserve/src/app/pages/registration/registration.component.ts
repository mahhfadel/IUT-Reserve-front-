import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  flag: boolean = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  saveDetails(form: any) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
  }
}
