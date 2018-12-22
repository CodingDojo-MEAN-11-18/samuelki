import { Component, OnInit } from '@angular/core';
import { Author,Quote } from '../models/author';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  author: Author;
  authorID: string;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.authorID = params['id'];
    });
    this.findAuthor();
  }

  findAuthor() {
    let observable = this._httpService.getAuthor(this.authorID);
    observable.subscribe(data => {
      this.author = data['author'];
    })
  }

  voteUp(quote: Quote) {
    let observable = this._httpService.editQuote(this.authorID, quote._id, 1);
    observable.subscribe(data => {
      quote.votes++;
    })
  }

  voteDown(quote: Quote) {
    let observable = this._httpService.editQuote(this.authorID, quote._id, -1);
    observable.subscribe(data => {
      quote.votes--;
    })
  }

  deleteQuote(quote: Quote) {
    console.log("Delete quote button working");
    let observable = this._httpService.deleteQuote(this.authorID, quote._id);
    observable.subscribe(data => {
      this.author = null;
    })
  }

}
