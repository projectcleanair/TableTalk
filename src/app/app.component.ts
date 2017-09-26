import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CreateGroupPage } from '../pages/create-group/create-group';
import { JoinGroupPage } from '../pages/join-group/join-group';
import { UserSignUpPage } from '../pages/user-sign-up/user-sign-up';
import { MeetingPage } from '../pages/meeting/meeting';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = UserSignUpPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

