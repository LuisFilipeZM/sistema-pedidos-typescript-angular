import { Injectable } from '@angular/core';
import { Cliente } from '../cadastro-cliente/cadastro-cliente.component';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public cliente:Array<Cliente> = [];
  constructor() {}

  carregar(){
    this.cliente = JSON.parse(String(localStorage.getItem('cliente')));
    if(this.cliente == null){
      return [];
    }
    return this.cliente;
  }

  excluir(indice:number){
    this.cliente.splice(indice,1);
    this.salvar();
  }  

  salvar(){
    localStorage.setItem('cliente',JSON.stringify(this.cliente));
  }

  update(indice:number,cliente:Cliente){
    this.cliente[indice] = cliente;
    this.salvar();
  }

  registro(indice:number){
    this.cliente = this.carregar();
    return this.cliente[indice];
  } 
}
