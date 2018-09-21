import { Weather } from './../weather-class';
import { Component, OnInit } from '@angular/core';
import { WeatherService} from '../weather.service'
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
  city = "Eldoret";
  icon = "";
  addCity = "";
  todaysWeather;
  suggestion = "";
  weatherForecast = [];
  constructor(
    public weatherService: WeatherService,private spinner: NgxSpinnerService) {}
  ngOnInit(): any {
    this.getCurrentWeather(this.city);
  }
  getCurrentWeather(city) {
    this.weatherService.getCurrentWeather(city).subscribe(res => {
      this.todaysWeather = res;
      var sugg = this.todaysWeather.weather.main;
      switch (sugg) {
        case "Clear":
          this.suggestion = "Wear a hat and sunglasses";
          break;
        case "Rain":
          this.suggestion = "Carry umbrella and wear jacket";
          break;
        case "Clouds":
          this.suggestion =
            "He should take his girlfriend out for coffee or ice cream";
          break;
        default:
          this.suggestion = "Wear a hat and sunglasses";
          break;
      }
    });
  }
  searchCity() {
    this.getCurrentWeather(this.addCity);
    this.weatherForecast=[];
    this.weatherService.getForecast(this.addCity).subscribe((data: any) => {
      this.spinner.show();
      for (let i = 0; i < data.list.length; i += 8) {
        this.spinner.hide();
        this.weatherForecast.push(data.list[i]);
      }
    });
  }
}
