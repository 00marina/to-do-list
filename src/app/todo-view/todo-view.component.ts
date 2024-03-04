import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { Area } from '../area';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrl: './todo-view.component.css',
})
export class TodoViewComponent implements OnInit {
  faTag = faTag;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  allTasksArray: Area[] = [];

  constructor(private service: TodoServiceService) {}

  ngOnInit() {
    while (this.service.demoArray.length > 0) {
      let taskBottle = this.service.demoArray.pop();
      if (taskBottle !== undefined) {
        this.allTasksArray.unshift(taskBottle);
      }
      console.log(this.allTasksArray);
      console.log(taskBottle);
    }
  }
}

//   getAllTasks() {

// }
