import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../service/cliente.service';
import { CidadeService } from '../service/cidade.service';

export interface Cliente {
  nome:string;
  cpf:string;
  cidade:string;
}

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit{
  public nome:string = '';
  public cpf:string = '';
  public cidade:string = '';
  public display_success:boolean = false;
  public display_error:boolean = false;
  public clientes:Array<Cliente> = [];
  public indice:number = -1;

  constructor(
    public actived_route:ActivatedRoute,
    public cliente_service:ClienteService,
    public cidade_service:CidadeService
  ){}

  ngOnInit(): void {
    this.cidade_service.carregar();
    this.actived_route.params
    .subscribe((params:any) => {
      // -1 significa que é um novo registro
      if (params.indice > -1){
        this.indice = params.indice;
        let cliente = this.cliente_service.registro(this.indice);
        this.nome   = cliente.nome;
        this.cpf    = cliente.cpf;
        this.cidade = cliente.cidade;
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
    this.cpf = '';
    this.cidade = '';
  }

  salvar(){
    if(this.nome == '' || this.cpf == '' || this.cidade == ""){
      this.display_e();
      return;
    }

    this.display_error = false;

    let cliente:Cliente = {
      nome:this.nome,
      cpf:this.cpf,
      cidade:this.cidade
    }
    if(this.indice > -1){
      this.cliente_service.update(this.indice, cliente)
    }else{
    this.clientes = this.cliente_service.carregar();
    this.clientes.push(cliente);
    localStorage.setItem('cliente', JSON.stringify(this.clientes));
    }
    this.limpar();

    this.display_s();
  }

  limpar(){
    this.display_success = false;
    this.display_error = false;
    this.nome = '';
    this.cpf = '';
    this.cidade = '';
  }
}

