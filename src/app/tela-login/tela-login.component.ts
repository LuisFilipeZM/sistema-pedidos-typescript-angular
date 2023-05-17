import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent {
  public email:string = ''; 
  public senha:string = '';

  constructor(
    public router:Router
  ){

  }
  autenticar() {
    let usuario_ls = JSON.parse(String(localStorage.getItem('usuario')));
    let email_ls = usuario_ls.email;
    let senha_ls = atob(usuario_ls.senha);

    if(email_ls == this.email && senha_ls == this.senha){
      //Permitiar acesso....
      this.router.navigateByUrl('home');
    }else{
      //Negar acesso....
      alert('Falha');
    }
  }
}
