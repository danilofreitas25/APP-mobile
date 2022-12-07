
import { Component, OnInit } from '@angular/core';
import { DefaultTitleStrategy } from '@angular/router';

import { AlertController, LoadingController } from '@ionic/angular';
import { DatabaseserviceService } from 'src/app/databaseservice.service';

import { Produtos } from 'src/app/model/produto.model';

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
    private loadCtrl: LoadingController,

    //alertController - Ferramente que cria um alert
    private alertCtrl: AlertController
  ) {}

  ngOnInit(){
    //Carrega o metodo no inicio da pagina
    this.carregando();

    this.banco.getProduto().subscribe(results => this.listaProdutos = results);  
  }
  
  deletar(id: number){
    try{
      this.banco.delProduto(id);
    }finally{
      location.reload();
    }
      }

  alterar(id: number){
    this.alertando();
  }

  //Método do carregando (load)
  async carregando(){
    const load = this.loadCtrl.create({
      mode: 'ios',
      message: 'Aguarde...',
      duration: 2000
    });

    (await load).present(); 
   
  }

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
          handler: (form) => {
            //OBJETO QUE IRÁ FORMAR NOSSO ITEM DA LISTA
            let item = {
              produto: form.item,
              quantidade: form.qtd
            }

          try{
            this.banco.postProduto(item);
          }finally{
            location.reload();
          }
           
           
          }
          
        }
      ]

      
    });
      (await alert).present();
    
      
  }
}
