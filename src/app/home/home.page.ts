import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {log} from 'util';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // tslint:disable-next-line:variable-name
  users: any = [];
  private url: any = '/assets/data.json';
  constructor(public http: HttpClient) {
    this.init();
  }

  init() {
    this.getJson().subscribe((res) => {
       console.log(res)
      this.users = res;
      // console.log(this.users)
    });
  }
  getJson() {
    return this.http.get(this.url);
  }
}
