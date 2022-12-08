import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-reservas',
  templateUrl: './user-reservas.component.html',
  styleUrls: ['./user-reservas.component.scss'],
})
export class UserReservasComponent implements OnInit {
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

  //modal cancelar
  cancelar: boolean = false;

  toggleCancelar() {
    this.cancelar = !this.cancelar;
  }

  //modal more pendentes
  pendentes: boolean = false;

  togglePendentes() {
    this.pendentes = !this.pendentes;
  }

  //modal more aprovados
  aprovados: boolean = false;

  toggleAprovados() {
    this.aprovados = !this.aprovados;
  }

  constructor() {}

  ngOnInit(): void {}
}
