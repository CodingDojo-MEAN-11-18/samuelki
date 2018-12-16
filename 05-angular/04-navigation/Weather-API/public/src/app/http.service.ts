import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getWeather(city) {
    return this._http.get<WeatherData>
    // return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Seattle')
    (`https://api.openweathermap.org/data/2.5/weather?q=${city},us&units=imperial&APPID=e5354bf72f095a7068d49ddb0c8a8c1a`)
  }
}

interface WeatherData {
  main: {
    humidity: number,
    temp: number,
    temp_min: number,
    temp_max: number
  }
  weather: Array<Object>
}

interface Object {
  main: string,
  description: string
}
