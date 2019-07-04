import { AutoresService } from './autores.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { AutoresCadastroComponent } from './autores-cadastro/autores-cadastro.component';
import { AutoresPesquisaComponent } from './autores-pesquisa/autores-pesquisa.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AutoresPesquisaComponent, AutoresCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ToastModule,
    ConfirmDialogModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    AutoresPesquisaComponent,
    AutoresCadastroComponent
  ],
  providers: [
    AutoresService
  ],

})
export class AutoresModule { }
