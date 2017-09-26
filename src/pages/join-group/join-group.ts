import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeetingPage } from '../meeting/meeting'

/**
 * Generated class for the CreateGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-join-group',
  templateUrl: 'join-group.html',
})
export class JoinGroupPage {

  constructor(public navCtrl: NavController) {
  }

  goToMeeting() {
  		this.navCtrl.push(MeetingPage);
  }

}
