import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidations } from '../../shared/form-validations';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.component.html',
  styleUrls: ['./user-perfil.component.scss'],
})
export class UserPerfilComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  //modal sair
  menu: boolean = false;

  toggleMenu() {
    this.menu = !this.menu;
  }

  //modal sair
  mostrar: boolean = false;

  toggle() {
    this.mostrar = !this.mostrar;
  }

  //modal excluir
  excluir: boolean = false;

  toggleExcluir() {
    this.excluir = !this.excluir;
  }

  //modal cancelar
  cancelar: boolean = false;

  toggleCancelar() {
    this.cancelar = !this.cancelar;
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
      telefone: [
        null,
        [Validators.required, Validators.pattern('^[0-9]{11}$')],
      ],
      cargo: [null, [Validators.required]],
    });

    console.log(this.form.value);
  }

  empresa: string[] = ['Coordenador', 'Supervisor', 'Estagiario', 'Professor'];

  saveDetails(form: any) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
    this.form.reset();
  }
}
