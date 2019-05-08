import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';


import { HttpClientModule, HttpClient} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { pipeTitle } from './Pipes/pipeTitle';

@NgModule({
  declarations: [
    AppComponent,
    DetalleUsuarioComponent,
    ListaUsuarioComponent,
    ListToDoComponent,
    TodoViewComponent,
    pipeTitle
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
