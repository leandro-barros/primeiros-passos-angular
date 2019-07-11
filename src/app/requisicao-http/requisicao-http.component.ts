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
    this.consultar();
  }

  consultar() {
    this.cidadeService.consultar()
      .then(dadosCidades => {
        this.cidades = dadosCidades;
      });
  }

  // ngOnInit() { Outra Forma
  //   this.cidadeService.consultar().subscribe(response => {
  //     this.cidades = response;
  //   });
  // }

  adicionar(nome: string) {
    this.cidadeService.adicionar({ nome }) // Mesma coisa de this.cidadeService.adicionar({ nome: nome })
      .then(cidade => {
        alert(`Cidade "${cidade.nome}" adicionada com o código ${cidade.id} ! `);
        this.consultar();
      });
  }

  excluir(id: number) {
    this.cidadeService.excluir(id)
      .then(() => {
        alert('Cidade excluida com sucesso !');
        this.consultar();
      });
  }

  atualizar(cidade: any) {
    this.cidadeService.atualizar(cidade)
      .then(() => {
        alert('Cidade alterada com sucesso !');
      })
      .catch(erro => {
        alert(erro);
      });
  }


}
