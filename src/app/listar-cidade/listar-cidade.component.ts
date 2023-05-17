import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CidadeService } from '../service/cidade.service';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit{
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(
    public cidade_service:CidadeService,
    public router:Router
  ) {}

  ngOnInit(): void {
    this.cidade_service.carregar();
  }

  editar(indice:number){
    this.router.navigateByUrl('cidade/' + indice);
  }
}
