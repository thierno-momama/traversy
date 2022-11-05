import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Task } from '../Task-model';
import { Tasks } from '../Tasks-mock';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }
  // 
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.url);
  }
  //
  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.url, task, {
      headers: new HttpHeaders({
        'Content-Type': "application/json"
      })
    });
  }
  //
  updateTaskReminder(task: Task): Observable<Task>{
    const update = `${this.url}/${task.id}`;
    return this.http.put<Task>(update, task, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  }
  //
  deleteTask(task: Task): Observable<Task>{
    const urlDelete = `${this.url}/${task.id}`;
    return this.http.delete<Task>(urlDelete);
  }
}
