export class Autor{
  id: number;
  nome: string;
  idade: number;
  sexo: string;
}
export class Livro{
  id: number;
  titulo: string;
  preco: number;
  autores: Autor[] = [];
}
