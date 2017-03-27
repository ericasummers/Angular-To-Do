import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
  <div class="container">
    <h1 (scroll)="test()" (mouseup)="test()" (click)="test()">To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li [class]="priorityColor(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}}<button (click)="editTask()">Edit!</button></li>
    </ul>
    <hr>
  <div>
  <h3>{{selectedTask.description}}</h3>
  <label>Enter Task Description:</label>
  <input [(ngModel)]="selectedTask.description">
    <label>Enter Task Priority (1-3):</label>
    <br>
    <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (Low Priority)<br>
    <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2">2 (Medium Priority)<br>
    <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3">3 (High Priority)
    </div>
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
    selectedTask: Task = this.tasks[0];

    editTask() {
        alert("You just requested to edit a task!");
    }
}
export class Task {
    public done: boolean = false;
    constructor(public description: string, public priority: number) { }
}
