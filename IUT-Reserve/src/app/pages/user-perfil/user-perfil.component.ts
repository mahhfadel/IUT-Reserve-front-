import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.component.html',
  styleUrls: ['./user-perfil.component.scss'],
})
export class UserPerfilComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
