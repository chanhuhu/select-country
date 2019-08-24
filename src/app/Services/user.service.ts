import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(public http: HttpClient) { }
    getJson() {
        return this.http.get('https://raw.githubusercontent.com/earthchie/jquery.Thailand' +
            '.js/master/jquery.Thailand.js/database/raw_database/raw_database' +
            '.json');
    }
}
