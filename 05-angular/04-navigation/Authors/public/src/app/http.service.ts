import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors() {
    return this._http.get('/authors');
  }

  getAuthor(authorID) {
    return this._http.get(`/authors/${authorID}`)
  }

  createAuthor(newAuthor) {
    return this._http.post('/authors', newAuthor);
  }

  editAuthor(authorID, author) {
    return this._http.put(`/authors/${authorID}`, author)
  }

  deleteAuthor(authorID) {
    return this._http.delete(`/authors/${authorID}`)
  }
}
