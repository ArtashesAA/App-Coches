import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'actualiza/:id', component: ActualizaComponentComponent },
  { path: '**', component: ErrorPersonalizadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
