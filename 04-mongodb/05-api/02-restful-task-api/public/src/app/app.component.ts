import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  tasks = [];
  task: Object;
  newTask: Object;
  changeTask: Object;

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.newTask = {title: "", description: ""}
    this.getTasksFromService();
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data['tasks'];
    });
  }
  showClick(taskID: Number): void {
    console.log('Show button working!', taskID);
    let observable = this._httpService.getTask(taskID);
    observable.subscribe(data => {
      console.log(data);
      this.task = data['task'];
    })
  }
  editClick(taskID: Number): void {
    console.log('Edit button working!', taskID);
    let observable = this._httpService.editTask(taskID);
    observable.subscribe(data => {
      console.log(data);
      this.changeTask = data['task'];
    })
  }
  deleteClick(taskID: Number): void {
    console.log('Delete button working!', taskID);
    let observable = this._httpService.deleteTask(taskID);
    observable.subscribe(() => {
      console.log('Deleted task!');
      this.getTasksFromService();
    })
  }

}
