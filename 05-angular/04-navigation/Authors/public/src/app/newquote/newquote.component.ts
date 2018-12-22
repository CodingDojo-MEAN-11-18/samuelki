import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';
import { Author, Quote } from '../models/author';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.component.html',
  styleUrls: ['./newquote.component.css']
})
export class NewquoteComponent implements OnInit {

  author: Author;
  authorID: string;
  quote: Quote;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.authorID = params['id']
    });
    this.findAuthor();
    this.quote = {quote:""}
  }

  findAuthor() {
    let observable = this._httpService.getAuthor(this.authorID);
    observable.subscribe(data => {
      this.author = data['author'];
    })
  }

  submitQuote() {
    this.author.quotes = [...this.author.quotes, this.quote];
    let observable = this._httpService.editAuthor(this.authorID, this.author);
    observable.subscribe(data => {
      console.log(data);
      this._router.navigate(['authors/quotes', this.authorID]);
    })
  }

  cancelQuote() {
    console.log("Cancel add button working");
    this._router.navigate(['authors/quotes', this.authorID]);
  }

}
