import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Produtos } from '../app/model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseserviceService {

  readonly API = 'http://localhost:3000/lista/';

  HttpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http: HttpClient) { }

  //capturar dados
  getProduto(){
    return this.http.get<Produtos[]>(this.API);
  }


  postProduto(produto: any){
    return this.http.post(this.API, JSON.stringify(produto), this.HttpOptions).subscribe();
  }

  delProduto(id: number){
    return this.http.delete(this.API + id).subscribe();
  }
}
