import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastoCidadeComponent } from './cadasto-cidade/cadasto-cidade.component';
import { HomeComponent } from './home/home.component';
import { CadastroLoginComponent } from './cadastro-login/cadastro-login.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent },
  { path: 'cidade/:indice', component: CadastoCidadeComponent },
  { path: 'cadastro', component: CadastroLoginComponent},
  { path: 'login', component: TelaLoginComponent},
  { path: 'pedido', component: CadastroPedidoComponent},
  { path: 'lista-produto', component: ListarProdutoComponent},
  { path: 'lista-cliente', component: ListarClienteComponent},
  { path: 'produto/:indice', component:CadastroProdutoComponent},
  { path: 'cliente/:indice', component:CadastroClienteComponent},
  { path: 'lista-cidade', component: ListarCidadeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
