import { Injectable } from '@angular/core';
import { Area } from './area';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  demoArray: Area[] = [
    {
      id: 1,
      name: 'Complete Angular tutorial',
      desc: 'Finish the Angular tutorial on Udemy',
      category: 'Learning',
      done: false
    },
    {
      id: 2,
      name: 'Buy groceries',
      desc: 'Milk, eggs, bread, fruits, vegetables',
      category: 'Shopping',
      done: false
    },
    {
      id: 3,
      name: 'Call Mom',
      desc: 'Wish her a happy birthday',
      category: 'Personal',
      done: false
    },
    {
      id: 4,
      name: 'Finish project report',
      desc: 'Due on Friday',
      category: 'Work',
      done: false
    },
    {
      id: 5,
      name: 'Go for a run',
      desc: '5 miles at the park',
      category: 'Health',
      done: false
    },
    {
      id: 6,
      name: 'Read book',
      desc: 'Chapter 7 to 10',
      category: 'Personal',
      done: false
    },
    {
      id: 7,
      name: 'Attend team meeting',
      desc: 'Discuss project updates',
      category: 'Work',
      done: false
    },
    {
      id: 8,
      name: 'Pay electricity bill',
      desc: 'Due date: 12th March',
      category: 'Bills',
      done: false
    },
    {
      id: 9,
      name: 'Clean the house',
      desc: 'Sweep, mop, and dust',
      category: 'Home',
      done: false
    },
    {
      id: 10,
      name: 'Practice guitar',
      desc: 'Learn new chords',
      category: 'Hobby',
      done: false
    }
  ];

  

  constructor() { }
}
