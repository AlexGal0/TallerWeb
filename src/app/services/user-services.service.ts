import { Injectable } from '@angular/core';
import { User, Todo } from '../model/user';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  id    : number;
  state : boolean;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(environment.urlUsers);
  }

  setTodo(id: number, state: boolean){
    this.id = id;
    this.state = state;
  }

  getTodo(){
    const params = {params: new HttpParams().set("userId", this.id + "").set("completed", this.state + "")};
    console.log(params);
    
    return this.http.get<Todo[]>(environment.urlTodo, params);
  }
}
