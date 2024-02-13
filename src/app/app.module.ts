import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { AddNewTodoComponent } from './add-new-todo/add-new-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { CategoryNewComponent } from './category-new/category-new.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoViewComponent,
    AddNewTodoComponent,
    EditTodoComponent,
    CategoryViewComponent,
    CategoryNewComponent,
    CategoryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
