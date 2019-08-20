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
  filterX:any[]=[];
  filterY:any[]=[];
  filterZ:any[]=[];
  constructor(private userService: UserService) {
    this.init();
  }
  users;
  sendData;
  init() {
    this.userService.getJson().subscribe((res) => {
      // console.log(res);
      this.users = res;
      this.filterProvince();
      this.filterAmphoe();
      this.filterDistrict();
    });
  }

  filterProvince(){
    for (let i = 0; i < this.users.length; i++) {
      let a = this.users[i].province;
      // tslint:disable-next-line:triple-equals
      if (this.filterX.indexOf(a) == -1) {
        this.filterX.push(a);
      }
    }
    // console.log(this.filterX);
  }
  filterAmphoe(){
    for (let i = 0; i < this.users.length; i++) {
      let a = this.users[i].amphoe;
      // tslint:disable-next-line:triple-equals
      if (this.filterY.indexOf(a) == -1) {
        this.filterY.push(a);
      }
    }

  }
  filterDistrict(){
    for (let i = 0; i < this.users.length; i++) {
      let a = this.users[i].district;
      // tslint:disable-next-line:triple-equals
      if (this.filterZ.indexOf(a) == -1) {
        this.filterZ.push(a);
      }
    }

  }
}
