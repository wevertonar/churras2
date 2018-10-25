import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  username:string;
  email: string;
  password:string;
  repassword:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toastCtrl: ToastController) { }

  presentToast() {
        let toast = this.toastCtrl.create({
          message: 'User was added successfully',
          duration: 3000,
          position: 'top'
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
      }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    if(this.username.length==0 || this.password.length==0 || this.repassword.length==0)
    alert("Por favor preencha todos os arquivos");
  }

}
