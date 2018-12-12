import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getCakes();
  }

  getCakes() {
    return this._http.get('/cakes');
  }
  getCake(cakeID: Number) {
    return this._http.get(`/cakes/${cakeID}`);
  }
  addCake(newCake) {
    return this._http.post('/cakes', newCake);
  }
  addReview(cakeID: Number, newReview) {
    return this._http.post(`/reviews/${cakeID}`, newReview);
  }
}
