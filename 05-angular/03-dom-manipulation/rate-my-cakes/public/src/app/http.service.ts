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
  getCake(id: Number) {
    return this._http.get(`/cakes/${id}`);
  }
  addCake(newCake) {
    return this._http.post('/cakes', newCake);
  }
  rateCake(id: Number, rating) {
    return this._http.post(`/cakes/${id}/rate`, rating);
  }
}
