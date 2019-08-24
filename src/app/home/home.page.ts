import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  x;
  y;
  k;
  j;
  result;
  provinces: any[] = [];
  amphoes: any[] = [];
  districts: any[] = [];
  sendProvince;
  sendAmphoe;
  SendDistrict;
  constructor(private userService: UserService ) {
    this.init();
  }
  init() {
    this.userService.getJson().subscribe(response => {
      this.x = response;
      this.y =  _.groupBy(this.x, 'province');
      for (this.k in this.y) {
        this.provinces.push(this.k);
        this.y[this.k] = _.groupBy(this.y[this.k], 'amphoe');
        for (this.j in this.y[this.k]) {
          this.y[this.k][this.j] = _.groupBy(this.y[this.k][this.j], 'district');
        }
      }
      this.result = this.y;
    });
  }
  selectProvice(pName) {
    this.amphoes = [];
    this.districts = [];
    console.log(this.districts);
    let p = _.result(this.result, pName);
    for (var prop in p) {
      this.amphoes.push(prop);
    }
  }

  selectAmphoe(aName) {
    this.districts = [];
    let p = _.result(this.result, this.sendProvince);
    let a = _.result(p, aName);
    for (var prop in a) {
      this.districts.push(prop);
    }
  }
}


