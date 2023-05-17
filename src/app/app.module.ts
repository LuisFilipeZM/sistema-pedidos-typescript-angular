import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastoCidadeComponent } from './cadasto-cidade/cadasto-cidade.component';
import { ListaEstadoComponent } from './lista-estado/lista-estado.component';
import { LeyoutComponent } from './leyout/leyout.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CadastroLoginComponent } from './cadastro-login/cadastro-login.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastoCidadeComponent,
    ListaEstadoComponent,
    LeyoutComponent,
    MenuComponent,
    HomeComponent,
    CadastroLoginComponent,
    TelaLoginComponent,
    CadastroClienteComponent,
    CadastroProdutoComponent,
    CadastroPedidoComponent,
    ListarProdutoComponent,
    ListarClienteComponent,
    ListarCidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
