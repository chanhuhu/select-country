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
  constructor(private userService: UserService) {
    this.init();
  }
  users;
  init() {
    this.userService.getJson().subscribe((res) => {
      // console.log(res);
      this.users = res;
      this.filterProvince();
    });
  }

  filterProvince(){
    for (let i=0;i<this.users.length;i++){
      let a = this.users[i].province;
      if (this.filterX.indexOf(a)==-1){
        this.filterX.push(a);
      }
    }
    console.log(this.filterX);
  }
  // fliterAmphoe(){
  //   for (let i=0;i<this.filterX.length,i++) {
  //     if (this.filterX===this){
  //
  //     }
  //   }
  // }
}
