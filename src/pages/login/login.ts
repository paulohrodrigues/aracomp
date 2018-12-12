import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {auth} from "firebase";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private data: {email: string, senha: string} = {
    email:"",
    senha:"",
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(localStorage.getItem("id")!=null){
      this.navCtrl.setRoot(TabsPage);
    }
  }

  login(){
    console.log(this.data);
    auth()
    .signInWithEmailAndPassword(this.data.email, this.data.senha)
    .then((user: auth.UserCredential) => {
      localStorage.setItem("id", user.user.uid);
      this.navCtrl.setRoot(TabsPage);
    })
    .catch((e) => {
      alert(e.message);
    });
  }


}
