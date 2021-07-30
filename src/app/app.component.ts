import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) {}

  items: MenuItem[];

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.items = [
      {
        label: 'Inicio',
        routerLink: 'inicio',
      },

      {
        label: 'Evolucion',
        routerLink: 'evo',
      },
      {
        label: 'Caracteristicas',
      },
      {
        label: 'Comportamiento',
      },
      {
        label: 'Razas',
      },
      {
        label: 'Galeria',
      },
    ];
  }
}
