import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase, { firestore } from "firebase";

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "LoginPage";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    const config = {
      apiKey: "AIzaSyDTl5_rLp6GFu3_3-YKrLBT59IYAA4580Y",
      authDomain: "aracomp-69d5d.firebaseapp.com",
      databaseURL: "https://aracomp-69d5d.firebaseio.com",
      projectId: "aracomp-69d5d",
      storageBucket: "aracomp-69d5d.appspot.com",
      messagingSenderId: "115589823763"
    };

    firebase.initializeApp(config);
    firestore().settings({timestampsInSnapshots: true});

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
