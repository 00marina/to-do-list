import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoServiceService } from '../todo-service.service';
import { Area } from '../area';
import { Location } from '@angular/common';
import { Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
    private http: HttpClient,
    private service: TodoServiceService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.newTaskForm = new FormGroup({
      name: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
    });
    console.log("add new todo constructor initialized!");
  }

  ngOnInit() {
    this.service.getDemoArray().subscribe((data: any) => {
      this.allTasksArray = data;
      console.log(this.allTasksArray);
    })

    this.isPopulated();
   
  }

  isPopulated() {
    if (this.allTasksArray.length > 0) {
      console.log("array is populated");
      this.populated = true;
    } else {
      console.log("not populated");
      this.populated = true;
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
    console.log("sent data: ", this.newTaskForm.value);
    console.log(this.allTasksArray);
    this.goHome();
  }
}
