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
      image: 'cat-abisi.jpg',
      nombre: 'Abisinio',
      origen: 'Egipto',
      carac: 'apariencia regia; cuerpo ágil con piernas largas y delgadas',
    },
    {
      image: 'cat-am-sh.jpg',
      nombre: 'American Shorthair',
      origen: 'EE.UU.',
      carac: 'cuerpo musculoso ancho; pelaje espeso y denso',
    },
    {
      image: 'cat-aw.jpg',
      nombre: 'American Wirehair',
      origen: 'EE.UU.',
      carac: 'de tamaño mediano a grande; abrigo rizado',
    },
    {
      image: 'cat-ben.jpg',
      nombre: 'Bengala',
      origen: 'EE.UU., Europa',
      carac: 'abrigo manchado; patas traseras más cortas que patas delanteras',
    },
    {
      image: 'cat-bomb.jpg',
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
