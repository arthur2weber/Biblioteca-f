import { ButtonModule } from 'primeng/button';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastModule} from 'primeng/toast';
import { SidebarModule} from 'primeng/sidebar';
import { AppComponent } from './app.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Routes, RouterModule} from '@angular/router';

import { LivrosCadastroComponent } from './livros/livros-cadastro/livros-cadastro.component';
import { LivrosPesquisaComponent } from './livros/livros-pesquisa/livros-pesquisa.component';
import { LivrosModule } from './livros/livros.module';

import { AutoresCadastroComponent } from './autores/autores-cadastro/autores-cadastro.component';
import { AutoresPesquisaComponent } from './autores/autores-pesquisa/autores-pesquisa.component';
import { AutoresModule } from './autores/autores.module';



const rotas: Routes = [
  {path: '', redirectTo:'livros', pathMatch:'full'},

  {path: 'livros', component: LivrosPesquisaComponent},
  {path: 'livros/novo', component: LivrosCadastroComponent},
  {path: 'livros/:id', component: LivrosCadastroComponent},

  {path: 'autores', component: AutoresPesquisaComponent},
  {path: 'autores/novo', component: AutoresCadastroComponent},
  {path: 'autores/:id', component: AutoresCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SidebarModule,
    ButtonModule,
    RouterModule.forRoot(rotas),

    AutoresModule,
    LivrosModule,


  ],
  providers: [
    ConfirmationService
  ]
    ,
  bootstrap: [AppComponent]
})
export class AppModule { }
