import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { LivrosService } from './livros.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PickListModule} from 'primeng/picklist';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { LivrosCadastroComponent } from './livros-cadastro/livros-cadastro.component';
import { LivrosPesquisaComponent } from './livros-pesquisa/livros-pesquisa.component';

@NgModule({
  declarations: [LivrosPesquisaComponent,LivrosCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    CurrencyMaskModule,
    InputTextModule,
    PickListModule,
    ButtonModule
  ],
  exports:[
    LivrosPesquisaComponent,
    LivrosCadastroComponent
  ],
  providers:[
    LivrosService
  ]
})
export class LivrosModule { }
