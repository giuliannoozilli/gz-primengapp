import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';

import { FormsModule } from '@angular/forms';
import { AccordionComponent } from './componentes/accordion/accordion.component';
import { DonachartComponent } from './componentes/donachart/donachart.component';
import { AreapolarchartComponent } from './componentes/areapolarchart/areapolarchart.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { EditordetxtComponent } from './componentes/editordetxt/editordetxt.component';
@NgModule({
  declarations: [AppComponent, AccordionComponent, DonachartComponent, AreapolarchartComponent, CarouselComponent, EditordetxtComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
