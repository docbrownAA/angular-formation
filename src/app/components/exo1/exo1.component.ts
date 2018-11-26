import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.css']
})
export class Exo1Component implements OnInit {

  tasks = [];
  newTask = null;
  constructor() { }

  ngOnInit() {
  }

  public addTask(): void {
    if (this.newTask) {

      this.tasks.push(this.newTask);
    }
    this.newTask = null;
  }

  public removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
