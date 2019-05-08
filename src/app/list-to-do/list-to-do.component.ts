import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';
import { Todo } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent implements OnInit {
  listTodo: Array<Todo>;
  constructor(private services: UserServicesService,private  routing: Router) {
      this.listTodo = new Array();
      if(this.services.id == null)
        this.routing.navigateByUrl("/users");
      this.services.getTodo().subscribe(result => {
        console.log(result);
        
        this.listTodo = result;
      });
   }

  ngOnInit() {
  }

}
