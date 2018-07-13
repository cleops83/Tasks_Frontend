import { Task } from './../models/task.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService {
  
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/api/tasks/';

  getTasks() {
    return this.http.get<Task[]>(this.baseUrl);
  }

  createTask(task: Task) {
    return this.http.post(this.baseUrl, task);
  }

  executeTask(taskId: number) {
    return this.http.post(this.baseUrl + `/${taskId}/execute`, taskId);
  }

  cancelTask(taskId: number) {
    return this.http.post(this.baseUrl + `/${taskId}/cancel`, taskId);
  }

  deleteTask(taskId: number) {
    return this.http.delete(this.baseUrl + '/' + taskId);
  }
}
