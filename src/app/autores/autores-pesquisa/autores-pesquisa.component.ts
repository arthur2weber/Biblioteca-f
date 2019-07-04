import { MessageService, ConfirmationService } from 'primeng/api';
import { AutoresService } from '../autores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autores-pesquisa',
  templateUrl: './autores-pesquisa.component.html',
  styleUrls: ['./autores-pesquisa.component.css']
})
export class AutoresPesquisaComponent implements OnInit {

  autores = [];
  filtro: string;

  constructor(
    private service: AutoresService,
    private msgService: MessageService,
    private conf: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.service.pesquisar({nome:this.filtro})
    .then((dados)=>{
      this.autores=dados;
    });
  }

  confirmarExclusao(autor:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+autor.nome+'?',
      accept: () => {
        this.excluir(autor);
      }
    });
  }

  excluir(autor: any){
    this.service.excluir(autor.id)
    .then(()=>{
      this.pesquisar();
      this.msgService.add({severity:'success', summary:'Exclusão', detail:'Autor '+autor.nome+' excluído com sucesso'});
    });
  }





}
