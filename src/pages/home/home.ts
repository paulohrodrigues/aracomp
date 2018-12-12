import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { firestore } from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private list = [];
  constructor(public navCtrl: NavController) {
    this.listAll();
  }


  listAll(){
    firestore()
    .collection("users")
    .doc(localStorage.getItem("id"))
    .collection("publicacao")
    .onSnapshot((data: firestore.QuerySnapshot) => {
      console.log("Teste");
      this.list = data.docs;
      console.log(this.list);
      // for(let a of this.list){
      //   console.log(a.data().description);
      // }
    });
  }


}
