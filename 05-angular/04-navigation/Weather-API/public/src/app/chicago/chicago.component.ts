import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';;

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  city = "Chicago";
  avg_temp: number;
  min_temp: number;
  max_temp: number;
  humidity: number;
  status: string;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather(this.city);
  }

  getWeather(city: string) {
    let observable = this._httpService.getWeather(this.city);
    observable.subscribe(data => {
      console.log('Got Weather!', data.main.temp);
      this.avg_temp = data.main.temp;
      this.min_temp = data.main.temp_min;
      this.max_temp = data.main.temp_max;
      this.humidity = data.main.humidity;
      for (const item of data.weather) {
        console.log(item.description);
        this.status = item.main;
      }
    })
  }

}
