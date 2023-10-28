import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeportesComponent } from './pages/deportes/deportes.component';
import { PoliticaComponent } from './pages/politica/politica.component';
import { TecnologiaComponent } from './pages/tecnologia/tecnologia.component';

const routes: Routes = [
  { path: '', component: DeportesComponent },
  { path: 'politica', component: PoliticaComponent },
  { path: 'tecnologia', component: TecnologiaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
