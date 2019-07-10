import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requisicao-http',
  templateUrl: './requisicao-http.component.html',
  styleUrls: ['./requisicao-http.component.css']
})
export class RequisicaoHTTPComponent {
  // json-server --watch src/data/db.json
  cidades = [
    { id: 1, nome: 'Uberlândia' },
    { id: 2, nome: 'São Paulo' },
    { id: 3, nome: 'Florianópolis' },
    { id: 4, nome: 'Curitiba' }
  ];

  adicionar(nome: string) {
    alert(nome);
  }

  excluir(id: number) {
    alert(id);
  }

  atualizar(cidade: any) {
    alert(JSON.stringify(cidade));
  }


}
