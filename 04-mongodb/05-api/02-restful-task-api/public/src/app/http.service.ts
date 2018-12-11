import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.getTask();
  }

  getTasks() {
    // let tempObservable = this._http.get('/');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks');
  }

  getTask(taskID) {
    return this._http.get(`/${taskID}`);
  }
  editTask(taskID) {
    return this._http.get(`/${taskID}`);
  }
  addTask(newTask) {
    return this._http.post('/task', newTask);
  }
  edit(taskID, task) {
    return this._http.put(`/${taskID}`, task);
  }
  deleteTask(taskID) {
    return this._http.delete(`/${taskID}`);
  }

}
