import { AddTaskComponent } from './add-task/add-task.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'add-task', component: AddTaskComponent },
  { path: 'list-tasks', component: ListTasksComponent },
  {path : '', component : ListTasksComponent}
];

export const routing = RouterModule.forRoot(routes);