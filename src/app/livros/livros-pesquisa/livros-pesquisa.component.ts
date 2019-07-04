import { MessageService, ConfirmationService } from 'primeng/api';
import { LivrosService } from './../livros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros-pesquisa',
  templateUrl: './livros-pesquisa.component.html',
  styleUrls: ['./livros-pesquisa.component.css']
})
export class LivrosPesquisaComponent implements OnInit {

  livros = [];
  filtro: string;

  constructor(
    private service:LivrosService,
    private msgService: MessageService,
    private conf: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.service.pesquisar({titulo:this.filtro})
    .then((dados)=>{
      this.livros=dados;
    });
  }

  confirmarExclusao(livro:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+livro.titulo+'?',
      accept: () => {
        this.excluir(livro);
      }
    });
  }

  excluir(livro: any){
    this.service.excluir(livro.id)
    .then(()=>{
      this.pesquisar();
      this.msgService.add({severity:'success', summary:'Exclusão', detail:'Livro '+livro.titulo+' excluído com sucesso'});
    });
  }





}
