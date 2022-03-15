import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {TaskService} from './../../services/task.service';
import {Task} from './../../Task';
import {UiService} from './../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private taskService: TaskService, private uiService: UiService) {
    this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }
  
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((task) => {
      this.tasks = task;
    });
  }
  //deleteTask(Task)
  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter( t => t.id !== task.id);
    });
  }
  //toggleTaskReminder
  toggleTaskReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
  //addTask(task)
  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }
}
