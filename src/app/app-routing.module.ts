import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { AddNewTodoComponent } from './add-new-todo/add-new-todo.component';
import { FinishedTasksComponent } from './finished-tasks/finished-tasks.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryNewComponent } from './category-new/category-new.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TodoViewComponent },  
  { path: 'categories', component: CategoryViewComponent },
  { path: 'edit-cat/:id', component: CategoryEditComponent },
  { path: 'new_cat', component: CategoryNewComponent },
  { path: 'new', component: AddNewTodoComponent },  
  { path: 'task/:id', component: EditTodoComponent },  
  { path: 'finished', component: FinishedTasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
