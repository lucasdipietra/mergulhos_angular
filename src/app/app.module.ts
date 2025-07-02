import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; // ✅ IMPORTADO AQUI

import { AppComponent } from './app.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import { Pagina4Component } from './pagina4/pagina4.component';
import { Pagina5Component } from './pagina5/pagina5.component';
import { Pagina6Component } from './pagina6/pagina6.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component,
    Pagina5Component,
    Pagina6Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // ✅ ADICIONADO AQUI
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
