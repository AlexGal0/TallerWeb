import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { UserServicesService } from '../services/user-services.service';


@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  @Input() mySelectedUser: User;
  
  constructor(private routing: Router, private services: UserServicesService) { }

  ngOnInit() {
  }

  location(){
    console.log(environment.urlGeo+ this.mySelectedUser.address.geo.lat+ "," + this.mySelectedUser.address.geo.lng);
    location.href = environment.urlGeo + this.mySelectedUser.address.geo.lat+ "," + this.mySelectedUser.address.geo.lng;
  }

  todoComplete(){
    this.services.setTodo(this.mySelectedUser.id, true);
    this.routing.navigateByUrl("/todo");
  }

  todoIncomplete(){
    this.services.setTodo(this.mySelectedUser.id, false);
    this.routing.navigateByUrl("/todo");
  }
}
