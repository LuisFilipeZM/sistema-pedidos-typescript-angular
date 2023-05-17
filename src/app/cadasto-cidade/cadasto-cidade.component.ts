import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CidadeService } from '../service/cidade.service';
import { ActivatedRoute } from '@angular/router';
export interface Cidade {
  nome:string;
  estado:string;
}

@Component({
  selector: 'app-cadasto-cidade',
  templateUrl: './cadasto-cidade.component.html',
  styleUrls: ['./cadasto-cidade.component.css']
})
export class CadastoCidadeComponent implements OnInit ,AfterViewInit{

  public nome:string = '';
  public estado:string = '';
  public cidades:Array<Cidade> = [];
  public indice:number = -1;

  @ViewChild('lista_estado_component') lista_estado:any;

  constructor(
    public actived_route:ActivatedRoute,
    public cidade_service:CidadeService,
  ){}

  ngOnInit(): void {
    this.actived_route.params
    .subscribe((params:any) => {
      // -1 significa que é um novo registro
      if (params.indice > -1){
        this.indice = params.indice;
        let cidade = this.cidade_service.registro(this.indice);
        this.nome = cidade.nome;
        this.estado = this.lista_estado.getEstado();
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.lista_estado.setEstado('PR');
    });
  }

  salvar() {
    let cidade:Cidade = {
      nome:this.nome,
      estado:this.lista_estado.getEstado(),
    }
    if(this.indice > -1){
      this.cidade_service.update(this.indice, cidade);
    }else{
    this.cidades = this.cidade_service.carregar();
    this.cidades.push(cidade);
    localStorage.setItem('cidade', JSON.stringify(this.cidades));
    }
    this.limpar();
  }

  limpar() {
    this.nome = '';
    this.estado = '';
  }

}
