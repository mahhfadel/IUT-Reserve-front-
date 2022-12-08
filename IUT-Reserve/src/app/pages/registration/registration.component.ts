import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormValidations } from '../../shared/form-validations';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  flag: boolean = true;
  flagConfirm: boolean = true;

  //modal
  mostrar: boolean = false;

  toggle() {
    this.mostrar = !this.mostrar;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$'),
        ],
      ],

      email: [
        null,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: [null, [Validators.required, Validators.minLength(8)]],

      confirmPassword: [null, [FormValidations.equalsTo('password')]],

      number: [null, [Validators.required, Validators.pattern('^[0-9]{11}$')]],
      company: [null, [Validators.required]],
    });
  }

  companys: string[] = ['Unect', 'Select', 'Axion', 'Solucaut'];

  saveDetails(form: any) {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
  }
}
