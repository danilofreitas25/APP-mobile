import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produtos } from 'src/app/model/produto.model';
import { DatabaseserviceService } from 'src/app/service/databaseservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  image = "https://cdn.pixabay.com/photo/2015/02/23/20/53/tomatoes-646645_960_720.jpg";

  routeId = null;
  produto : any = {};

  constructor(
    //Essa ferramenta serve para capturar a rota (caminho) que estiver ativo
    private activatedRoute: ActivatedRoute,
    private banco: DatabaseserviceService
    ) { }

  ngOnInit() {
    this.routeId = this.activatedRoute.snapshot.params['id'];
    
    if(this.routeId){
      //Traz o item do banco e dados.
      this.banco.getOneItem(this.routeId).subscribe(caixa => {this.produto = caixa});
    }
  }

  //Método que chama o serviço de atuzalização
  update(produto: Produtos){
    //try{
    this.banco.atualizarItem(produto);
    /*}finally{
      location.replace('/home');
    }*/

  }

}
