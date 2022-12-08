import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  CalendarView,
  CalendarDateFormatter,
  DateAdapter,
} from 'angular-calendar';
import { SchedulerDateFormatter } from 'angular-calendar-scheduler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: SchedulerDateFormatter,
    },
  ],
})
export class HomeComponent implements OnInit {
  //modal sair
  mostrar: boolean = false;
  toggle() {
    this.mostrar = !this.mostrar;
  }

  form: FormGroup = new FormGroup({});

  selected: Date | null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      sala: [null, []],
      timeStart: [null, []],
      timeEnd: [null, []],
    });
  }

  salas: string[] = ['Reuniões', 'Negocios', 'Empresa Junior', 'Jogos'];

  saveDetails(form: any) {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
    this.form.reset();
  }
}
