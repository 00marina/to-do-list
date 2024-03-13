import { Injectable } from '@angular/core';
import { Area } from './area';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  demoArray: Area[] = [
    {
      id: 1,
      name: 'Complete Angular tutorial',
      desc: 'Finish the Angular tutorial on Udemy',
      category: 'Learning',
      done: false,
    },
    {
      id: 2,
      name: 'Buy groceries',
      desc: 'Milk, eggs, bread, fruits, vegetables',
      category: 'Shopping',
      done: false,
    },
    {
      id: 3,
      name: 'Call Mom',
      desc: 'Wish her a happy birthday',
      category: 'Personal',
      done: false,
    },
    {
      id: 4,
      name: 'Finish project report',
      desc: 'Due on Friday',
      category: 'Work',
      done: false,
    },
    {
      id: 5,
      name: 'Go for a run',
      desc: '5 miles at the park',
      category: 'Health',
      done: true,
    },
    {
      id: 6,
      name: 'Read book',
      desc: 'Chapter 7 to 10',
      category: 'Personal',
      done: true,
    },
    {
      id: 7,
      name: 'Attend team meeting',
      desc: 'Discuss project updates',
      category: 'Work',
      done: true,
    },
    {
      id: 8,
      name: 'Pay electricity bill',
      desc: 'Due date: 12th March',
      category: 'Bills',
      done: false,
    },
    {
      id: 9,
      name: 'Clean the house',
      desc: 'Sweep, mop, and dust',
      category: 'Home',
      done: false,
    },
    {
      id: 10,
      name: 'Practice guitar',
      desc: 'Learn new chords',
      category: 'Hobby',
      done: false,
    },
    {
      id: 11,
      name: 'Plan weekend getaway',
      desc: 'Research destinations and book accommodation',
      category: 'Travel',
      done: false,
    },
    {
      id: 12,
      name: 'Attend yoga class',
      desc: 'Relax and rejuvenate',
      category: 'Health',
      done: false,
    },
    {
      id: 13,
      name: 'Submit expense report',
      desc: 'Include receipts for reimbursement',
      category: 'Work',
      done: false,
    },
    {
      id: 14,
      name: 'Volunteer at local shelter',
      desc: 'Help with feeding and cleaning',
      category: 'Community',
      done: false,
    },
    {
      id: 15,
      name: 'Research investment options',
      desc: 'Explore stocks and mutual funds',
      category: 'Finance',
      done: false,
    },
    {
      id: 16,
      name: 'Update resume',
      desc: 'Highlight recent achievements',
      category: 'Career',
      done: false,
    },
    {
      id: 17,
      name: 'Renew gym membership',
      desc: 'Check for any offers',
      category: 'Health',
      done: true,
    },
    {
      id: 18,
      name: 'Create monthly budget',
      desc: 'Track expenses and savings goals',
      category: 'Finance',
      done: false,
    },
    {
      id: 19,
      name: 'Fix leaking faucet',
      desc: 'Call plumber for appointment',
      category: 'Home',
      done: false,
    },
    {
      id: 20,
      name: 'Practice meditation',
      desc: '10 minutes daily for mindfulness',
      category: 'Personal',
      done: true,
    },
    {
      id: 21,
      name: 'Attend photography workshop',
      desc: 'Learn composition and lighting techniques',
      category: 'Art',
      done: false,
    },
    {
      id: 22,
      name: 'Donate old clothes',
      desc: 'Pack and drop off at donation center',
      category: 'Charity',
      done: false,
    },
    {
      id: 23,
      name: 'Research sustainable living practices',
      desc: 'Reduce carbon footprint',
      category: 'Environment',
      done: false,
    },
    {
      id: 24,
      name: 'Cook a new recipe',
      desc: 'Experiment with flavors',
      category: 'Culinary',
      done: true,
    },
    {
      id: 25,
      name: 'Attend language exchange meetup',
      desc: 'Practice speaking Spanish',
      category: 'Language',
      done: false,
    },
    {
      id: 26,
      name: 'Create a vision board',
      desc: 'Visualize goals and aspirations',
      category: 'Growth',
      done: true,
    },
    {
      id: 27,
      name: 'Join a local sports team',
      desc: 'Meet new people and stay active',
      category: 'Recreation',
      done: false,
    },
    {
      id: 28,
      name: 'Visit a museum',
      desc: 'Explore exhibits on history and culture',
      category: 'Leisure',
      done: false,
    },
    {
      id: 29,
      name: 'Plant a vegetable garden',
      desc: 'Grow your own produce',
      category: 'Gardening',
      done: false,
    },
    {
      id: 30,
      name: 'Take a dance class',
      desc: 'Learn salsa or tango',
      category: 'Dance',
      done: true,
    },
  ];
  uniqueCategoriesSet = new Set();
  categoriesArray: any[] = [];

  constructor() {
    this.demoArray.forEach((item) => {
      this.uniqueCategoriesSet.add(item.category);
    });
    this.categoriesArray = Array.from(this.uniqueCategoriesSet);
  }

  // get all array
  getDemoArray(): Observable<Area[]> {
    return of(this.demoArray);
  }

  // get all categories
  getCategories(): Observable<any[]> {
    return of(this.categoriesArray);
  }

  // get by ID
  getById(id: number): Observable<any[]> {
    let theitem = this.demoArray.filter((item) => item.id === id);
    console.log('from services: ', theitem);
    return of(theitem);
  }

  //edit
  edit(editedTask: Area) {
    console.log("before index:", editedTask.id);
    let index = this.demoArray.findIndex((task) => Number(task.id) === +editedTask.id);
    console.log("recieved data in service: ", editedTask);
    console.log("index: ", index);
    this.demoArray[index] = {
      id: editedTask.id,
      name: editedTask.name,
      desc: editedTask.desc,
      category: editedTask.category,
      done: editedTask.done,
    };
    console.log("demo array in service after: ", this.demoArray);
  }
}
