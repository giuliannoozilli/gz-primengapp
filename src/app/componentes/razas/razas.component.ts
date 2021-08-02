import { Raza2 } from './raza2';
import { Raza2Service } from './raza2.service';
import { RazaService } from './raza.service';
import { Component, OnInit } from '@angular/core';

import { Raza } from './raza';

@Component({
  selector: 'app-razas',
  templateUrl: './razas.component.html',
  styleUrls: ['./razas.component.css'],
})
export class RazasComponent implements OnInit {
  public razas: Raza[];
  public razas2: Raza2[];

  constructor(
    private razaService: RazaService,
    private raza2Service: Raza2Service
  ) {}

  ngOnInit(): void {
    this.razas = this.razaService.getLasRazas();
    this.razas2 = this.raza2Service.getLasRazas2();
  }
}
