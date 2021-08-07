import { ComportamientoComponent } from './componentes/comportamiento/comportamiento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaracteristicasComponent } from './componentes/caracteristicas/caracteristicas.component';
import { EvolucionComponent } from './componentes/evolucion/evolucion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RazasComponent } from './componentes/razas/razas.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  { path: 'inicio', component: InicioComponent },
  { path: 'evo', component: EvolucionComponent },
  { path: 'carac', component: CaracteristicasComponent },
  { path: 'comp', component: ComportamientoComponent },
  { path: 'raza', component: RazasComponent },
  { path: 'gal', component: GaleriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
