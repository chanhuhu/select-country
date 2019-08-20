import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  users: any = [];
  private url: any = '/assets/data.json';
  constructor(public http: HttpClient) { }
  getJson() {
    return this.http.get(this.url);
    }
  init() {
    this.getJson().subscribe((res) => {
      console.log(res);
      this.users = res;
      console.log(this.users);
    });
  }
}
