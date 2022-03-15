import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {Task} from './../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() btnAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  //onSubmit()
  onSubmit(){
    //if task don't exist
    if(!this.text){
      alert('Please enter Task !');
      return;
    }
    //newtask
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.btnAddTask.emit(newTask);
    //empty field's
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
