import { Injectable } from '@angular/core';
import { ActionSheetController, LoadingController, ToastController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  result: string ;

  constructor(
    //Ferramenta do carregando
    private loading: LoadingController,

    private toast: ToastController,
  
    private action: ActionSheetController
    
  ) { }

    //Médoto ActionSheet

    async ActionSheet(header: string, subHeader: string){
      const actionSheet = await this.action.create({
        header,
        subHeader,
        buttons: [
          {
            text: 'Deletar',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data:{
              action: 'delete',
            },
          },
          {
            text: 'Cancel',
            role: 'Cancel',
            data:{
              action: 'cancel',
            },
          },
        ],
      });

      await actionSheet.present();

      const result = await actionSheet.onDidDismiss();
      this.result = JSON.stringify(result, null, 2);
    }

    //Método do loading
    async carrengando(message: string, duration: number){
      const load = this.loading.create({
        mode: 'ios',
        message ,
        duration
      });

      (await load).present();
    }

    async toastando(header: string, position: "top" | "middle" | "bottom", color: string, duration: number){
      const toastei = this.toast.create({
        header,
        position,
        duration,
        color
    });
      (await toastei).present();
      location.reload();
    }
}
