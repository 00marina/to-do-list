import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Area } from '../area';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-finished-tasks',
  templateUrl: './finished-tasks.component.html',
  styleUrl: './finished-tasks.component.css'
})
export class FinishedTasksComponent {
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

  undoFinish(id: number) {
    let finTask = this.allTasksArray.find(item => item.id === id);
    if (finTask !== undefined) {
      finTask.done = false;
    }
  }

}
