import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1 (scroll)="test()" (mouseup)="test()" (click)="test()">To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li [class]="priorityColor(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];
  test() {
    this.tasks.push(new Task('Finish more weekend Angular homework for Epicodus course', 1))
  }
  priorityColor(currentTask) {
    if (currentTask.priority === 3) {
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) { }
}
