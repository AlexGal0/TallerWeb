import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';
import { User } from '../model/user';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  users: Array<User>;

  constructor(services: UserServicesService) { 
    this.users = new Array();
    services.getUsers().subscribe(result =>{
      console.log(result);
      this.users = result;
    });
  }

  ngOnInit() {
  }

}
