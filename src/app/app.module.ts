import { TaskService } from './services/task.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from "./app.routing";

import { AppComponent } from './app.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './add-task/add-task.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListTasksComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
