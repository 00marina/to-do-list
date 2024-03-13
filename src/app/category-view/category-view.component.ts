import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Area } from '../area';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrl: './category-view.component.css'
})
export class CategoryViewComponent implements OnInit {
  faTag = faTag;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faPlus = faPlus;
  allTasksArray: Area[] = [];
  categoriesArray: string[] = [];

  constructor(private service: TodoServiceService) {}
  ngOnInit() {
    this.service.getDemoArray().subscribe((data: any) => {
      this.allTasksArray = data;
    })

    this.service.getCategories().subscribe((data: any) => {
      this.categoriesArray = data;
    })
  }
}
