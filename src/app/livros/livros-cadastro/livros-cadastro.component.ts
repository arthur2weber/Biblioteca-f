import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AutoresService } from './../../autores/autores.service';
import { Autor } from './../../autores/model';
import { Livro } from './../model';
import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../livros.service';

@Component({
  selector: 'app-livros-cadastro',
  templateUrl: './livros-cadastro.component.html',
  styleUrls: ['./livros-cadastro.component.css']
})
export class LivrosCadastroComponent implements OnInit {

  livro = new Livro();
  autores: Autor[];

  constructor(
    private service: LivrosService,
    private autorService: AutoresService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.pesquisarAutores();
  }

  pesquisarAutores(){
    this.autorService.pesquisar("")
    .then((dados)=>{
      this.autores=dados;
    });
  }

  salvar(form: FormControl) {
    this.service.adicionar(this.livro)

    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Livro '+this.livro.titulo+' cadastrado'});
      form.reset();
    });
  }

}
