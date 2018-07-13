import { TaskService } from './../services/task.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private router:Router, private taskService:TaskService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['']
    });
  }

  onSubmit():void{
    this.taskService.createTask(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-tasks']);
      });
  }

}


