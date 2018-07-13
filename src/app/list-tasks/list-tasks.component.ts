import { TaskService } from './../services/task.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Task } from '../models/task.model';

@Component({
  selector: 'list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  tasks: Task[];
  
  constructor(private router:Router, private taskService:TaskService) { }


  ngOnInit() {
    this.loadTasks();
  }

  loadTasks(){
    this.taskService.getTasks()
    .subscribe( data => {
      this.tasks = data;
    });
  }

  addTask(): void {
    this.router.navigate(['add-task']);
  };

  executeTask(taskId:number){
    this.taskService.executeTask(taskId)
    .subscribe(data =>{
      this.loadTasks();
    });
  }

  cancelTask(taskId:number){
    this.taskService.cancelTask(taskId)
    .subscribe(data =>{
      this.loadTasks();
    });
  }

  deleteTask(taskId:number){
    this.taskService.deleteTask(taskId)
    .subscribe(data =>{
      this.loadTasks();
    });
  }

}
