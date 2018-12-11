import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  locations = [];
  totalGold = 0;
  randomNum: number;
  activities = [];

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getLocations();
  }
  getLocations() {
    let observable = this._httpService.getLocations();
    observable.subscribe(data => {
      console.log('Got locations!', data);
      this.locations = data['locations'];
    });
  }
  onClick(locationName: string): void {
    console.log('Button working...', locationName);
    if (locationName == "Farm") {
      this.randomNum = Math.floor((Math.random() * 3) + 2);
      this.totalGold += this.randomNum;
    }
    if (locationName == "Cave") {
      this.randomNum = Math.floor((Math.random() * 10) + 5);
      this.totalGold += this.randomNum;
    }
    if (locationName == "House") {
      this.randomNum = Math.floor((Math.random() * 15) + 7);
      this.totalGold += this.randomNum;
    }
    if (locationName == "Casino") {
      this.randomNum = Math.floor((Math.random() * 100) - 100);
      this.totalGold += this.randomNum;
    }
  }
}
