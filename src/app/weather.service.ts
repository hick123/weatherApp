import { Weather } from './weather-class';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const APPID = '';
@Injectable({
  providedIn: "root"
})
export class WeatherService {
  apiKey = "cc9d330d86819c6e65c9d2dc91af7bf1";
  private baseUrl = 'http://api.openweathermap.org/data/2.5/';
  unit = "metric";
  
  constructor(private httpClient: HttpClient) {}

  getCurrentWeather(city: string): Observable<any> {
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${this.unit
    }&APPID=${this.apiKey}`;
    return this.httpClient.get<any>(apiCall).pipe(map(resp=> {
       const weather = resp.weather[0];
       const name =resp.name;
       const temp = resp.main.temp;
       const x = { weather, temp, name };
       return x;
      })
    );
  }
      getForecast(city: string){
    const apiCall = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${this.unit
      }&APPID=${this.apiKey}`;
    return this.httpClient.get<any[]>(apiCall).pipe(
    map((res: any[]) => {
         return res;
        }));
      }

}
