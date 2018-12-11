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

  getTask() {
    let tempObservable = this._http.get('/:id');
    tempObservable.subscribe(data => console.log("Got task", data));
  }

}
