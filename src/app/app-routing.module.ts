import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';


const routes: Routes = [
  {path: '', redirectTo :'/users', pathMatch: 'full'},
  {path: 'users', component: ListaUsuarioComponent},
  {path: 'todo', component: ListToDoComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
