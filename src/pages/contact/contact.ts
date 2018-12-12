import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { storage, firestore } from 'firebase';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  private fileSelected;
  private data:{description: string, title: string, url: string} = {
    description: "",
    title: "",
    url: ""
  };

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter(){
    this.imgSelected();
  }

  imgSelected(){
    let file = document.getElementById("file");
    file.addEventListener('change', (e)=>{
      this.fileSelected = e.target;
      this.fileSelected=this.fileSelected.files[0];
    });
  }

  save(){
    let nameFile = ((new Date()).getTime().toString())+this.fileSelected.name;
    var storeRef = storage().ref("publicacao/"+String(nameFile));
    storeRef.put(this.fileSelected).then((snapshot)=>{
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.data.url = downloadURL;
          console.log(localStorage.getItem("id"));
          firestore()
          .collection("users")
          .doc(localStorage.getItem("id"))
          .collection("publicacao")
          .add(this.data)
          .then(()=>{
            alert("Salvo com Sucesso!");
            this.data = {
              description: "",
              title: "",
              url: ""
            };
          })
          .catch(error => {
            alert("Erro!");
          });
        })
    });
  }
}
