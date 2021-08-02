import { Raza2 } from './raza2';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Raza2Service {
  private LASRAZAS2: Raza2[] = [
    {
      nombre: 'Abisinio',
      origen: 'Egipto',
      carac: 'apariencia regia; cuerpo ágil con piernas largas y delgadas',
    },
    {
      nombre: 'American Shorthair',
      origen: 'EE.UU.',
      carac: 'cuerpo musculoso ancho; pelaje espeso y denso',
    },
    {
      nombre: 'American Wirehair',
      origen: 'EE.UU.',
      carac: 'de tamaño mediano a grande; abrigo rizado',
    },
    {
      nombre: 'Bengala',
      origen: 'EE.UU., Europa',
      carac: 'abrigo manchado; patas traseras más cortas que patas delanteras',
    },
    {
      nombre: 'Bombay',
      origen: 'EE.UU.',
      carac: 'apariencia elegante; se asemeja al leopardo negro indio',
    },
  ];

  constructor(private http: HttpClient) {}
  public getLasRazas2(): Raza2[] {
    return this.LASRAZAS2;
  }
}
