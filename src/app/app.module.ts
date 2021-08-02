import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Modulos ⬇️*/
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ScrollTopModule } from 'primeng/scrolltop';
/* Modulos ⬆️*/

import { AppComponent } from './app.component';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { EvolucionComponent } from './componentes/evolucion/evolucion.component';
import { CaracteristicasComponent } from './componentes/caracteristicas/caracteristicas.component';
import { ComportamientoComponent } from './componentes/comportamiento/comportamiento.component';
import { RazasComponent } from './componentes/razas/razas.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';

import { RazaService } from './componentes/razas//raza.service';
import { Raza2Service } from './componentes/razas/raza2.service';

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
    TableModule,
    HttpClientModule,
    ScrollTopModule,
  ],
  providers: [RazaService, Raza2Service],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
