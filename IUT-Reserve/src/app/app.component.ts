import { MatIconRegistry } from '@angular/material/icon';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      `iut-logo`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/iut-logo.svg`)
    );
  }

  title = 'IUT-Reserve';
}
