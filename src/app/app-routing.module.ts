import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { AddNewTodoComponent } from './add-new-todo/add-new-todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TodoViewComponent },  
  { path: 'categories', component: CategoryViewComponent },
  { path: 'new', component: AddNewTodoComponent },  
  { path: 'task/:id', component: EditTodoComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
