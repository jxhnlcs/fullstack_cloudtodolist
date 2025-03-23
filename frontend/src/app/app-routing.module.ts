import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TarefaFormComponent } from './pages/tarefa-form/tarefa-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nova', component: TarefaFormComponent },
  { path: 'editar/:id', component: TarefaFormComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
