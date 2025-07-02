import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import { Pagina4Component } from './pagina4/pagina4.component';
import { Pagina5Component } from './pagina5/pagina5.component';
import { Pagina6Component } from './pagina6/pagina6.component';


const routes: Routes = [
  { path: 'pagina1', component: Pagina1Component },
  { path: 'pagina2', component: Pagina2Component },
  { path: 'pagina3', component: Pagina3Component },
  { path: 'pagina4', component: Pagina4Component },
  { path: 'pagina5', component: Pagina5Component },
  { path: 'pagina6', component: Pagina6Component },
  { path: '', redirectTo: '/pagina1', pathMatch: 'full' },
  { path: '', redirectTo: '/pagina2', pathMatch: 'full' },
  { path: '', redirectTo: '/pagina3', pathMatch: 'full' },
  { path: '', redirectTo: '/pagina4', pathMatch: 'full' },
  { path: '', redirectTo: '/pagina5', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
