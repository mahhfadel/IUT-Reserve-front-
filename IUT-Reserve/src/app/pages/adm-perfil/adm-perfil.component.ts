import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adm-perfil',
  templateUrl: './adm-perfil.component.html',
  styleUrls: ['./adm-perfil.component.scss'],
})
export class AdmPerfilComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
