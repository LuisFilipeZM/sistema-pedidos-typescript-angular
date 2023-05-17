import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';

export interface Produto {
  nome:string;
  valor:number;
}

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit{
  public nome:string = '';
  public valor:number = 0;
  public display_success:boolean = false;
  public display_error:boolean = false;
  public produtos:Array<Produto> = [];
  public indice:number = -1;

  constructor(
    public actived_route:ActivatedRoute,
    public produto_service:ProdutoService
  ){}

  ngOnInit(): void {
    this.actived_route.params
    .subscribe((params:any) => {
      // -1 significa que é um novo registro
      if (params.indice > -1){
        this.indice = params.indice;
        let produto = this.produto_service.registro(this.indice);
        this.nome   = produto.nome;
        this.valor  = produto.valor;
      }
    });
  }

  display_s() {
    this.display_success = true;
  }

  display_e(){
    this.display_error = true;
  }

  clear() {
    this.nome = '';
    this.valor = 0;
  }

  salvar(){
    if(this.nome == '' || this.valor == 0){
      this.display_e();
      return;
    }

    this.display_error = false;

    let produto:Produto = {
      nome:this.nome,
      valor:this.valor
    }
    if(this.indice > -1){
      this.produto_service.update(this.indice, produto);
    }else{
      this.produtos = this.produto_service.carregar();
      this.produtos.push(produto);
      localStorage.setItem('produto', JSON.stringify(this.produtos));
    }
    this.limpar();

    this.display_s();
  }

  limpar(){
    this.display_success = false;
    this.display_error = false;
    this.nome = '';
    this.valor = 0;
  }
}
