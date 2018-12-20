import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get('/products');
  }

  getProduct(productID) {
    return this._http.get(`/products/${productID}`);
  }

  createProduct(newProduct) {
    return this._http.post('/products', newProduct);
  }

  editProduct(productID, editedProduct) {
    return this._http.put(`/products/${productID}`, editedProduct);
  }

  deleteProduct(productID) {
    return this._http.delete(`/products/${productID}`);
  }
}
