import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MeetingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meeting',
  templateUrl: 'meeting.html',
})
export class MeetingPage {
	meetingColor: string = '#ffffff';
	meetingColor2: string = '#4A2BAD';

	colors: Array<string> = ['#4A2BAD','#C4030A', '#B5081F', '#A60D33', 
	'#961247', '#87175C', '#781C70', '#692185', '#592699', '#4A2BAD', '#3B30C2'];

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
	console.log('ionViewDidLoad MeetingPage');
	}

	modifyColor(){
		this.meetingColor = this.colors[Math.floor(Math.random() * 9 + 1)];
	}

}
