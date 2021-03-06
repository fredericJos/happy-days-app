import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SignUpPage } from '../sign-up/sign-up';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {
  }

  login() {
    this.navCtrl.push(LoginPage);
  }

  signup() {
    this.navCtrl.push(SignUpPage);
  }

}
