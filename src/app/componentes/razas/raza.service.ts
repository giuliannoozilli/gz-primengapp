import { Injectable } from '@angular/core';
import { Raza } from './raza';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RazaService {
  private LASRAZAS: Raza[] = [
    {
      nombre: 'Balinés',
      origen: 'Estados Unidos',
      carac: 'cuerpo largo y esbelto; ojos azul zafiro',
    },
    {
      nombre: 'Birmano',
      origen: 'Burma (Myanmar)',
      carac: 'ojos azules profundos; cola espesa; patas con guantes blancos',
    },
    {
      nombre: 'Cymric',
      origen: 'Canada',
      carac: 'robusto con pecho pesado; rabón',
    },
    {
      nombre: 'Himalaya , o Colourpoint Longhair',
      origen: 'EE.UU., Europa',
      carac: 'cuerpo de altura baja; cola corta y completa; ojos azul zafiro',
    },
    {
      nombre: 'Javanés',
      origen: 'Estados Unidos',
      carac: 'agraciado con cuerpo largo y ágil; abrigo sedoso',
    },
  ];

  constructor(private http: HttpClient) {}

  public getLasRazas(): Raza[] {
    return this.LASRAZAS;
  }
}
