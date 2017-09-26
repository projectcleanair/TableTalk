import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateGroupPage } from '../pages/create-group/create-group';
import { JoinGroupPage } from '../pages/join-group/join-group';
import { UserSignUpPage } from '../pages/user-sign-up/user-sign-up';
import { MeetingPage } from '../pages/meeting/meeting';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateGroupPage,
    JoinGroupPage,
    UserSignUpPage,
    MeetingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateGroupPage,
    JoinGroupPage,
    UserSignUpPage,
    MeetingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
