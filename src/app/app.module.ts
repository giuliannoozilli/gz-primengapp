import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Modulos */
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
/* Modulos */

import { AppComponent } from './app.component';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { EvolucionComponent } from './componentes/evolucion/evolucion.component';
import { CaracteristicasComponent } from './componentes/caracteristicas/caracteristicas.component';
import { ComportamientoComponent } from './componentes/comportamiento/comportamiento.component';
import { RazasComponent } from './componentes/razas/razas.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EvolucionComponent,
    CaracteristicasComponent,
    ComportamientoComponent,
    RazasComponent,
    GaleriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    TabViewModule,
    CardModule,
    DividerModule,
    FieldsetModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
