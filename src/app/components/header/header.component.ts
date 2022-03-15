import { Component, OnInit } from '@angular/core';
import {UiService} from './../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService, private router : Router) {
    this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    })
  }

  ngOnInit(): void {
  }
  //toggleAddTask()
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }
  //hasRoutes
  hasRoute(routes: string){
    return this.router.url === routes;
  }
}
