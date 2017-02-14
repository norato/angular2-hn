import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HackernewsApiService {
  baseUrl: string;
  constructor(private http: Http) { 
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0';
  }

  fetchStories (){
    return this.http.get(`${this.baseUrl}/topstories.json`)
                    .map(response => response.json());
  }

}
