import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city = "Seattle";

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getWeather(this.city)
  }

  getWeather(city: string) {
    let observable = this._httpService.getWeather(this.city);
    observable.subscribe(data => {
      console.log('Got weather!', data);
      for (const item of data.weather) {
        console.log(item.description);
      }
    })
  }
}
