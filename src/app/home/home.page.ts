import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { DataModel } from '../Models/dataModel';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // tslint:disable-next-line:variable-name
  filterX: any[] = [];
  filterY: any[] = [];
  filterZ: any[] = [];
  constructor(private userService: UserService) {
    this.init();
  }
  users;
  sendData1;
  sendData2;
  init() {
    this.userService.getJson().subscribe((res) => {
      this.users = res;
      this.filterProvince();
    });
  }

  filterProvince() {
    for (let i = 0; i < this.users.length; i++) {
      let a = this.users[i].province;
      // tslint:disable-next-line:triple-equals
      if (this.filterX.indexOf(a) == -1) {
        this.filterX.push(a);
      }
    }
  }
  searchProvince(name) {
    let amphoes: any = this.users.filter(data => data.province === name);
    this.filterY = [];
    this.filterZ = [];
    for (let i = 0; i < amphoes.length; i++) {
      let a = amphoes[i].amphoe;
      // tslint:disable-next-line:triple-equals
      if (this.filterY.indexOf(a) == -1) {
        this.filterY.push(a);
      }
    }
  }
  searchAmphoe(Aname) {
    let districts: any = this.users.filter(data => data.amphoe === Aname);
    this.filterY = [];
    this.filterZ = [];
    for (let i = 0; i < districts.length; i++) {
      let a = districts[i].district;
      // tslint:disable-next-line:triple-equals
      if (this.filterZ.indexOf(a) == -1) {
        this.filterZ.push(a);
      }
    }
  }

}


