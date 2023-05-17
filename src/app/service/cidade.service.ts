import { Injectable } from '@angular/core';
import { Cidade } from '../cadasto-cidade/cadasto-cidade.component';
@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  public cidade:Array<Cidade> = [];
  constructor() {}

  carregar(){
    this.cidade = JSON.parse(String(localStorage.getItem('cidade')));
    if(this.cidade == null){
      return [];
    }
    return this.cidade;
  }

  excluir(indice:number){
    this.cidade.splice(indice,1);
    this.salvar();
  }  

  salvar(){
    localStorage.setItem('cidade',JSON.stringify(this.cidade));
  }

  update(indice:number,cidade:Cidade){
    this.cidade[indice] = cidade;
    this.salvar();
  }

  registro(indice:number){
    this.cidade = this.carregar();
    return this.cidade[indice];
  } 
}

