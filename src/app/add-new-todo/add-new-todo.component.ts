import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoServiceService } from '../todo-service.service';
import { Area } from '../area';


@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.component.html',
  styleUrl: './add-new-todo.component.css',
})
export class AddNewTodoComponent implements OnInit {
  lastItemId: any;
  allTasksArray: Area[] = [];
  populated: boolean = false;

  newTaskForm: FormGroup;
  dialog: any;
  constructor(
    private service: TodoServiceService,
    private router: Router,
  ) {
    this.newTaskForm = new FormGroup({
      name: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.service.getDemoArray().subscribe((data: any) => {
      this.allTasksArray = data;
    })

    this.isPopulated();
   
  }

  isPopulated() {
    if (this.allTasksArray.length > 0) {
      this.populated = true;
    } else {
      this.populated = false;
    }
  }

  autoId() {
    return this.allTasksArray.length + 1;
  }
  
  goHome() {
    this.router.navigate(['/home']);
  }

  onSubmit() {
    let demoID = this.autoId();
    this.allTasksArray.push({
      id: demoID,
      name: this.newTaskForm.value.name,
      desc: this.newTaskForm.value.desc,
      category: this.newTaskForm.value.category,
      done: false,
    });
    this.goHome();
  }
}
