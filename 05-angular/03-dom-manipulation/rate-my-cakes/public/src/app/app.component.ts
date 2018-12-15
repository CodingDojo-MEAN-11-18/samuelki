import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { NgForm } from '@angular/forms';
import { Cake, Review } from './models/cake';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rate My Cakes';
  newCake: Cake;
  newReview: Review;
  cakes: Cake[] = [];
  cake: Cake;
  reivew: Review;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getCakesFromService();
    this.newCake = { name: "", image: "", reviews: [] };
    this.newReview = { rating: 1, comment: "" }
  }
  getCakesFromService() {
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log("Got cakes!", data);
      this.cakes = data['cakes'];
    });
  }
  showCake(cakeID: Number) {
    let observable = this._httpService.getCake(cakeID);
    observable.subscribe(data => {
      console.log("Got cake!", data);
      this.cake = data['cake'];
    })
  }
  createCake() {
    console.log("Submitting cake form...");
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe(data => {
      console.log("Submitted cake!", data);
      this.getCakesFromService();
      this.newCake = { name: "", image: "" };
    })
  }
  rateCake(cake: Cake, form: NgForm, event: Event) {
    event.preventDefault();
    console.log('Submitting review form...', cake, form.value);
    let observable = this._httpService.addReview({...form.value, cake: cake._id});
    observable.subscribe(data => {
      console.log('Submitted review!', data);
      this.newReview = data['review'];
      this.newReview = { rating: 1, comment: "" };
    })
  }
}
