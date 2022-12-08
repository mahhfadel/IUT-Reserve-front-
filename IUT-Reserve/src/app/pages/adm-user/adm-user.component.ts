import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adm-user',
  templateUrl: './adm-user.component.html',
  styleUrls: ['./adm-user.component.scss'],
})
export class AdmUserComponent implements OnInit {
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

  //modal aprovar
  aprovar: boolean = false;

  toggleAprovar() {
    this.aprovar = !this.aprovar;
  }

  //modal reprovar
  reprovar: boolean = false;

  toggleReprovar() {
    this.reprovar = !this.reprovar;
  }

  //modal tornar adm
  adm: boolean = false;

  toggleAdm() {
    this.adm = !this.adm;
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

  //modal more aprovados
  aprovados: boolean = false;

  toggleAprovados() {
    this.aprovados = !this.aprovados;
  }

  constructor() {}

  ngOnInit(): void {}
}
