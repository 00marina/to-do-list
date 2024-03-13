import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Area } from '../area';
import { TodoServiceService } from '../todo-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrl: './category-new.component.css'
})
export class CategoryNewComponent implements OnInit {
  lastItemId: any;
  allTasksArray: Area[] = [];
  populated: boolean = false;
  categoriesArray: string[] = [];
  faTag = faTag;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faPlus = faPlus;

  newCatForm: FormGroup;
  dialog: any;
  constructor(
    private service: TodoServiceService,
    private router: Router,
  ) {
    this.newCatForm = new FormGroup({
      category: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.service.getDemoArray().subscribe((data: any) => {
      this.allTasksArray = data;
    })
    this.service.getCategories().subscribe((data: any) => {
      this.categoriesArray = data;
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

  
  goHome() {
    this.router.navigate(['/categories']);
  }

  onSubmit() {
    this.categoriesArray.push(this.newCatForm.value.category);
    this.goHome();
  }

}
