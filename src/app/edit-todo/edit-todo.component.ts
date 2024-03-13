import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Area } from '../area';
import { TodoServiceService } from '../todo-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.css'
})
export class EditTodoComponent {
  theTask: any;
  populated: boolean = false;
  areaId: any;

  editTaskForm: FormGroup;

  constructor(
    private service: TodoServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.editTaskForm = new FormGroup({
      name: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.areaId = this.route.snapshot.paramMap.get('id');
    console.log('ID:', this.areaId);

    this.isPopulated();

    this.service.getById(parseInt(this.areaId)).subscribe((data: any) => {
      console.log("recieved data: ", data);
      this.theTask = data;
      console.log("the task: ", this.theTask);
      this.populateForm();
    })
  }

  // check if 
  isPopulated() {
    if (this.theTask !== null) {
      this.populated = true;
    } else {
      this.populated = false;
    }
  }

  populateForm () {
    console.log("populate form was called!");
    this.editTaskForm.patchValue({
      name: this.theTask[0].name,
      desc: this.theTask[0].desc,
      category: this.theTask[0].category,
    });
  }

  
  goHome() {
    this.router.navigate(['/home']);
  }

  onSubmit() {
    this.theTask = {
      id: this.areaId,
      name: this.editTaskForm.value.name,
      desc: this.editTaskForm.value.desc,
      category: this.editTaskForm.value.category,
      done: this.theTask[0].done,
    }
    console.log("sent data: ", this.theTask);

    this.service.edit(this.theTask);
    this.goHome();
  }

}
