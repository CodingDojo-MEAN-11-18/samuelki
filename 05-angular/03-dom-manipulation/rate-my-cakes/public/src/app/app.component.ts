import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rate My Cakes';
  cakes: [];
  cake: Object;
  newCake: Object;
  newReview: Object;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getCakesFromService();
    this.newCake = { name: "", image: "" };
    this.newReview ={ rating: Number, comment: "" }
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
  rateCake(cakeID: Number) {
    console.log('Submitting review form...');
    let observable = this._httpService.addReview(cakeID, this.newReview);
    observable.subscribe(data => {
      console.log('Submitted review!', data);
      this.newReview = data['review'];
      this.newReview = { rating: Number, comment: "" };
    })
  }
}
