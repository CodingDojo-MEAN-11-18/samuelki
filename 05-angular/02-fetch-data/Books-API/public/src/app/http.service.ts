import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getAuthors();
  }

  getAuthors() {
    let authors = this._http.get('/authors');
    authors.subscribe(data => console.log("Got all authors", data));
  }

}
