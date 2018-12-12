import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

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

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.newCake = { name: "", image: "" };
    this.getCakesFromService();
  }
  getCakesFromService() {
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log("Got cakes!", data);
      this.cakes = data['cakes'];
    });
  }
  showCake(id: Number): void {
    let observable = this._httpService.getCake(id);
    observable.subscribe(data => {
      console.log(data);
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
  rateCake(id: Number, form) {
    console.log('Submitting rating form...');
    let cakeRating = {
      rating: form.controls['rating']['value'],
      comment: form.controls['comment']['value']
    }
    this._httpService.rateCake(id, cakeRating).subscribe(data => {
      console.log('Submitted rating!', data);
      this.getCakesFromService();
    })
  }

}
