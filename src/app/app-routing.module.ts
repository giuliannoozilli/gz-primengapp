import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvolucionComponent } from './componentes/evolucion/evolucion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'evo', component: EvolucionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
