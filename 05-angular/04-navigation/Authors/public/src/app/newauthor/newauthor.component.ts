import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Author } from '../models/author';

@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {

  newAuthor: Author;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newAuthor = {name: ""}
  }

  submitAuthor() {
    let observable = this._httpService.createAuthor(this.newAuthor);
    observable.subscribe(data => {
      console.log(data);
      this._router.navigate(['/authors']);
    })
  }

  cancelAdd() {
    console.log("Cancel add button working");
    this.newAuthor = null;
    this._router.navigate(['/authors']);
  }
}
