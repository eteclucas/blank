import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { FilmesService } from '../sevices/filmes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
    filmes:any = [];
    destaque:any = [];

    constructor(private alertController: AlertController,
    public toastController: ToastController,
    private loadingCtrl: LoadingController,
    private filmesService: FilmesService,
    private rota: Router) {}

    ngOnInit(){
      console.log('passou no home');
       this.carregarFilmes();      
    }

    async carregarFilmes(){
      this.filmes  = await this.filmesService.getProductions();
      console.log("filmes carregados", this.filmes)
      const [firstKey] = Object.keys(this.filmes);
      this.destaque = this.filmes[firstKey];
      console.log("filmes destaque", this.destaque)
      this.filmes.splice(firstKey, 1)
      console.log('firstKey',firstKey)
      console.log('destaque',this.destaque)
      console.log('filmes',this.filmes)
    }
    
  detalhesFilme(paramID){
    console.log("passou "+paramID); 
    this.rota.navigate(['/detalhes-filmes', {id:paramID}])
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      icon: 'information-circle',
      position: 'middle',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 3000,
      spinner: 'bubbles',
    });

    loading.present();
  }

}
