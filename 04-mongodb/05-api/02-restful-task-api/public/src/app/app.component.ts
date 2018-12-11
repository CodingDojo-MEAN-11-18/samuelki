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
}
