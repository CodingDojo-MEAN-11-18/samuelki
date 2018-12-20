import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.css']
})
export class AllReviewsComponent implements OnInit {
  parameter: Array<number>

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.parameter = params['id']
    });
  }

  loadReviews() {
    this._router.navigate(['/reviews/all'])
  }
}
