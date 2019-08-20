import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: any = '/assets/data.json';
  constructor(public http: HttpClient) { }
  getJson() {
    return this.http.get(this.url);
  }

}
