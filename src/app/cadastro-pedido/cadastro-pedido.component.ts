import { Component } from '@angular/core';

export interface Produto {
  nome:string;
  produto:string;
  quantidade:number;
  data:string;
}

@Component({
  selector: 'app-cadastro-pedido',
  templateUrl: './cadastro-pedido.component.html',
  styleUrls: ['./cadastro-pedido.component.css']
})
export class CadastroPedidoComponent {
  public nome:string = '';
  public produto:string = '';
  public quantidade:string = '';
  public data:string = '';
  public display_success:boolean = false;
  public display_error:boolean = false;

  display_s() {
    this.display_success = true;
  }

  display_e(){
    this.display_error = true;
  }

  clear() {
    this.nome = '';
    this.produto = '';
    this.quantidade = '';
    this.data = ''
  }

  salvar(){
    if(this.nome == '' || this.quantidade == '' || this.data == '' || this.produto == ''){
      this.display_e();
      return;
    }

    this.display_error = false;

    let dados:Produto = {
      nome:this.nome,
      quantidade:parseFloat(this.quantidade),
      produto:this.produto,
      data:this.data
    }

    localStorage.setItem('produto', JSON.stringify(dados));
    
    this.clear();

    this.display_s();
  }

  limpar(){
    this.display_success = false;
    this.display_error = false;
    this.nome = '';
    this.quantidade = '';
  }
}
