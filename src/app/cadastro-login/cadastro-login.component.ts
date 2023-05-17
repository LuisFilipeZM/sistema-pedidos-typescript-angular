import { style } from '@angular/animations';
import { Component } from '@angular/core';

export interface Usuario {
  nome:string;
  email:string;
  senha:string;
}

@Component({
  selector: 'app-cadastro-login',
  templateUrl: './cadastro-login.component.html',
  styleUrls: ['./cadastro-login.component.css']
})
export class CadastroLoginComponent {
  public nome:string = '';
  public email:string = '';
  public senha:string = '';
  public display_success:boolean = false;
  public display_error:boolean = false;
  
  
  cripotografar():string{
    const password = this.senha;
    const encodedPassword = btoa(password);
    return encodedPassword;
  }

  display_s() {
    this.display_success = true;
  }

  display_e(){
    this.display_error = true;
  }

  clear() {
    this.nome = '';
    this.email = '';
    this.senha = '';
  }

  salvar(){
    if(this.nome == '' || this.email == '' || this.senha == ""){
      this.display_e();
      return;
    }

    this.display_error = false;

    let dados:Usuario = {
      nome:this.nome,
      email:this.email,
      senha:this.cripotografar()
    }

    localStorage.setItem('usuario', JSON.stringify(dados));

    this.clear();

    this.display_s();
  }

  carregar(){
    this.display_success = false;
    this.display_error = false;
    if(localStorage.length == 0){
      return;
    }

    let dados = JSON.parse(String(localStorage.getItem('usuario')));
    this.nome = dados.nome;
    this.email = dados.email;
    this.senha = dados.senha;   
  }

  limpar(){
    this.display_success = false;
    this.display_error = false;
    this.nome = '';
    this.email = '';
    this.senha = '';
    localStorage.removeItem('usuario');
  }
 }