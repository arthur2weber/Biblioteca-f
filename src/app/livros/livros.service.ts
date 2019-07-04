import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from './model';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  livrosURL = environment.url+'/livros';
  livrosURLFiltro = this.livrosURL;

  constructor(private http: HttpClient) { }

  adicionar(livro: Livro): Promise<any>{
    return this.http.post(this.livrosURL, livro)
    .toPromise();
  }

  pesquisar(filtro: any):Promise<any>{
    if(filtro.titulo){
      this.livrosURLFiltro = this.livrosURL+'/filtro?titulo='+filtro.titulo;
    }else{
      this.livrosURLFiltro = this.livrosURL;
    }
    return this.http.get<any>(this.livrosURLFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.livrosURL+'/'+id)
    .toPromise()
    .then(() => null);
  }


  alterar(livro: Livro): Promise<any>{
    return this.http.put(this.livrosURL+'/'+livro.id, livro)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Livro> {
    return this.http.get<Livro>(this.livrosURL+'/'+codigo).toPromise();
  }


}
