import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    TranslateModule,
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
    LoginPage
  ],
  entryComponents: [
    LoginPage
  ]
})
export class LoginPageModule {}
