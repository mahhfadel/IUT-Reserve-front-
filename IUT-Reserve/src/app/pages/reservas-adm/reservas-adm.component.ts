import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservas-adm',
  templateUrl: './reservas-adm.component.html',
  styleUrls: ['./reservas-adm.component.scss'],
})
export class ReservasAdmComponent implements OnInit {
  //modal
  mostrar: boolean = false;

  toggle() {
    this.mostrar = !this.mostrar;
  }

  constructor() {}

  ngOnInit(): void {}
}
