import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users;
  // tslint:disable-next-line:variable-name
  constructor(private userService: UserService) {
    this.init();
  }

  init() {
    this.userService.getJson().subscribe((res) => {
      console.log(res);
      this.users = res;
    });
  }


}
