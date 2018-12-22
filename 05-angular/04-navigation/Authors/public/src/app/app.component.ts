import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // newAuthor: Author;
  // authors: Author[]=[];
  // changeAuthor: Author;
  // home: boolean;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ){}

  ngOnInit() {
    // this.getAuthors();
    // this.home = true;
    this._router.navigate(['/authors'])
  }

  // getAuthors() {
  //   let observable = this._httpService.getAuthors();
  //   observable.subscribe(data => {
  //     console.log('Got authors!', data);
  //     this.authors = data['authors']
  //     console.log(this.authors);
  //   })
  // }

  // addAuthor() {
  //   console.log("Add author butotn working");
  //   this.home = false;
  //   this.newAuthor = {name: ""}
  // }

  // submitAuthor() {
  //   let observable = this._httpService.createAuthor(this.newAuthor);
  //   observable.subscribe(data => {
  //     console.log(data);
  //     this.getAuthors();
  //     this.newAuthor = {name: ""}
  //     this.newAuthor = null;
  //     this.home = true;
  //   })
  // }

  // cancelAdd() {
  //   console.log("Cancel add button working");
  //   this.home = true;
  //   this.newAuthor = null;
  // }

  // editClick(author: Author) {
  //   console.log("Edit author button working", author._id);
  //   this.home = false;
  //   let observable = this._httpService.getAuthor(author._id)
  //   observable.subscribe(data => {
  //     this.changeAuthor = data['author']
  //   })
  // }

  // editSubmit(authorID: Number) {
  //   let observable = this._httpService.editAuthor(authorID, this.changeAuthor)
  //   observable.subscribe(data => {
  //     console.log(data)
  //     this.getAuthors();
  //     this.changeAuthor = {name: ""}
  //     this.changeAuthor = null;
  //     this.home = true;
  //   })
  // }

  // cancelEdit() {
  //   console.log("Cancel edit button working");
  //   this.home = true;
  //   this.changeAuthor = null;
  // }

  // deleteClick(authorID: Number) {
  //   console.log("Delete author button working")
  //   let observable = this._httpService.deleteAuthor(authorID)
  //   observable.subscribe(data => {
  //     console.log(data);
  //     this.getAuthors();
  //   })
  // }

}
