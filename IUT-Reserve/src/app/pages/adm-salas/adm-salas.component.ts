import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adm-salas',
  templateUrl: './adm-salas.component.html',
  styleUrls: ['./adm-salas.component.scss'],
})
export class AdmSalasComponent implements OnInit {
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

  //modal more pendentes
  pendentes: boolean = false;

  togglePendentes() {
    this.pendentes = !this.pendentes;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required]],

      cod: [
        null,
        [Validators.required, Validators.pattern('^[a-zA-Z]+[0-9]{3}$')],
      ],

      capacidade: [null, [Validators.required]],
      complementares: [null, [Validators.required]],
    });
  }

  saveDetails(form: any) {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
  }
}
