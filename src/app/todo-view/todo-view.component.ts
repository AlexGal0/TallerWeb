import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/user';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {
  @Input() mySelectedTodo: Todo;

  constructor() {

   }

  ngOnInit() {
  }

}
