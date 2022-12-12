
import { Component, OnInit } from '@angular/core';


import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { DatabaseserviceService } from 'src/app/service/databaseservice.service';

import { Produtos } from 'src/app/model/produto.model';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  image = "https://cdn.pixabay.com/photo/2015/02/23/20/53/tomatoes-646645_960_720.jpg";

  listaProdutos: Produtos[] = [];
 
  constructor(
    private banco: DatabaseserviceService,

    //loadingController - Ferramenta do carregando
    //private loadCtrl: LoadingController,

    //alertController - Ferramente que cria um alert
    private alertCtrl: AlertController,
    
    //toastController - criar uma mensagem
    //private toast: ToastController

    private utility: UtilityService
  ) {}

  ngOnInit(){
    //Carrega o metodo no inicio da pagina
    //this.carregando();
    this.utility.carrengando('Carregando...', 2000);
    this.banco.getProduto().subscribe(results => this.listaProdutos = results);  
  }

  //Método do toast - exibe uma mensagem
 /* async toastando(mensagem: string, posicao: "top" | "middle" | "bottom", colorir: string){
    const toastei = this.toast.create({
      header: mensagem,
      position: posicao, // se não definir a posição será bottom
      duration: 5000,
      color: colorir
      
    });
    
    (await toastei).present();
    location.reload();
  }*/

  deletar(id: number){
    try{
      //this.toastando("Item Excluido","bottom","danger");
      this.banco.delProduto(id);
      this.utility.toastando('Item Excluido',"bottom",'danger',2000);
      //chama a mensagem
    }finally{
      //location.reload();
    }
      }

  alterar(id: number){
    this.alertando();
  }

  //Método do carregando (load)
  /*async carregando(){
    const load = this.loadCtrl.create({
      mode: 'ios',
      message: 'Aguarde...',
      duration: 1000
    });

    (await load).present(); 
   
  }*/

  //Método do alertando 
  async alertando(){
    const alert = this.alertCtrl.create({
      mode:'ios',
      header: 'Cadastro de Produtos',
      inputs:[
        {
          name: 'item',
          type: 'text',
          placeholder: 'Informe o Produto'
        },
        {
          name:'qtd',
          type: 'number',
          placeholder: 'Informe a Quantidade'
        }
      ],
      buttons: [

        //BOTÃO CANCELAR
        {
          text: 'Cancelar',
          role: 'Cancel',
          handler: () =>{
            console.log('CPF CANCELADO!');
          }
        },

        //BOTÃO DE CADASTRAR
        {
          text: 'Cadastrar',
          handler: (form:any) => {
            //OBJETO QUE IRÁ FORMAR NOSSO ITEM DA LISTA
            let item = {
              produto: form.item,
              quantidade: form.qtd
            }

          try{
            this.banco.postProduto(item);
            this.utility.toastando('Item Cadastrado',"middle",'success',2000);
          }finally{
            //location.reload();
          }
           
           
          }
          
        }
      ]

      
    });
      (await alert).present();
    
      
  }

  
}
