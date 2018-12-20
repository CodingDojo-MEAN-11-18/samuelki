import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Product } from '../models/product';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  productID: string;
  changedProduct: Product;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.productID = params['id']
    });
    this.getProduct();
  }

  getProduct() {
    let observable = this._httpService.getProduct(this.productID);
    observable.subscribe(data => {
      this.changedProduct = data['product'];
      console.log(this.changedProduct);
    })
  }

  editProduct() {
    let observable = this._httpService.editProduct(this.productID, this.changedProduct);
    observable.subscribe(data => {
      this.changedProduct = data['product'];
      this._router.navigate(['/products']);
    })
  }

  removeProduct() {
    console.log('Delete button working!');
    let observable = this._httpService.deleteProduct(this.productID);
    observable.subscribe(data => {
      console.log('Deleted Product', data);
      this._router.navigate(['/products'])
   })
  }

}
