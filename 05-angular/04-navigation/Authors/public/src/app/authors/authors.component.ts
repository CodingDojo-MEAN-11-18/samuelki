import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Author } from '../models/author';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: Author[] = [];
  author: Author;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      console.log('Got authors!', data);
      this.authors = data['authors'];
      console.log(this.authors);
    })
  }

  deleteClick(authorID: Number) {
    console.log("Delete author button working");
    let observable = this._httpService.deleteAuthor(authorID);
    observable.subscribe(data => {
      console.log(data);
      this.getAuthors();
    })
  }

  editClick(author: Author) {
    console.log("Edit author button working", author._id);
    let observable = this._httpService.getAuthor(author._id);
    observable.subscribe(data => {
      this.author = data['author'];
    })
  }

  editSubmit(authorID: Number) {
    let observable = this._httpService.editAuthor(authorID, this.author);
    observable.subscribe(data => {
      console.log(data);
      this.getAuthors();
      this.author = {name: ""};
      this.author = null;
    })
  }

  cancelEdit() {
    console.log("Cancel edit button working");
    this.author = null;
  }
}
