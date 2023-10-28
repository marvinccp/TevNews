import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeportesComponent } from './pages/deportes/deportes.component';
import { PoliticaComponent } from './pages/politica/politica.component';
import { TecnologiaComponent } from './pages/tecnologia/tecnologia.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'deportes', component: DeportesComponent },
  { path: 'politica', component: PoliticaComponent },
  { path: 'tecnologia', component: TecnologiaComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
