import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateGroupPage } from '../create-group/create-group';
import { JoinGroupPage } from '../join-group/join-group';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  createGroup() {
  		this.navCtrl.push(CreateGroupPage);
  }

  joinGroup() {
  		this.navCtrl.push(JoinGroupPage);
  }

}