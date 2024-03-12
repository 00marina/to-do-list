import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { Area } from '../area';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { AddNewTodoComponent } from '../add-new-todo/add-new-todo.component';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrl: './todo-view.component.css',
})
export class TodoViewComponent implements OnInit {
  faTag = faTag;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faPlus = faPlus;
  allTasksArray: Area[] = [];
  categoriesArray: string[] = [];

  constructor(private service: TodoServiceService, public dialog: MatDialog) {}

  ngOnInit() {
    this.service.getDemoArray().subscribe((data: any) => {
      this.allTasksArray = data;
      console.log(this.allTasksArray);
    })

    this.allTasksArray.forEach(item => {
      this.categoriesArray.push(item.category);
    });
  }

  //delete task
  deleteTask(id: number) {
    this.allTasksArray = this.allTasksArray.filter(item => item.id !== id);
  }

  //finish task
  finishTask(id: number) {
    let finTask = this.allTasksArray.find(item => item.id === id);
    if (finTask !== undefined) {
      finTask.done = true;
    }
  }

  undoFinish(id: number) {
    let finTask = this.allTasksArray.find(item => item.id === id);
    if (finTask !== undefined) {
      finTask.done = false;
    }
  }


  // popup add new todo
  // openPopup() {
  //   this.dialog.open(AddNewTodoComponent, {
  //     width: '60vw'
  //   });
  // }
}

//   getAllTasks() {

// }
