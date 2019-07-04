import { Autor } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  autoresURL = environment.url+'/autores';
  autoresURLFiltro = this.autoresURL;

  constructor(
    private http: HttpClient
  ) { }

  pesquisar(filtro: any):Promise<any>{
    if(filtro.nome){
      this.autoresURLFiltro = this.autoresURL+'/filtro?nome='+filtro.nome;
    }else{
      this.autoresURLFiltro = this.autoresURL;
    }
    return this.http.get<any>(this.autoresURLFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.autoresURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(cat: Autor): Promise<any>{
    return this.http.post(this.autoresURL, cat).toPromise();
  }

  alterar(autor: Autor): Promise<any>{
    return this.http.put(this.autoresURL+'/'+autor.id, autor)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Autor> {
    return this.http.get<Autor>(this.autoresURL+'/'+codigo).toPromise();
  }

}
