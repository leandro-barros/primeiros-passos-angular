import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../cidade.service';

@Component({
  selector: 'app-requisicao-http',
  templateUrl: './requisicao-http.component.html',
  styleUrls: ['./requisicao-http.component.css']
})
export class RequisicaoHTTPComponent implements OnInit {
  // json-server --watch src/data/db.json

  cidades = [];

  constructor(private cidadeService: CidadeService) { }

    ngOnInit() {
      this.cidadeService.consultar()
        .then(dadosCidades =>  {
          this.cidades = dadosCidades;
        });
    }

    // ngOnInit() { Outra Forma
    //   this.cidadeService.consultar().subscribe(response => {
    //     this.cidades = response;
    //   });
    // }

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
