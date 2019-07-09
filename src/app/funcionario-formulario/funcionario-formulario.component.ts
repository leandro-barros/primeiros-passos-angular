import { Component, OnInit } from '@angular/core';

import { LogService } from './../log.service';
import { FuncionarioService } from './../funcionario.service';

@Component({
  selector: 'app-funcionario-formulario',
  templateUrl: './funcionario-formulario.component.html',
  styleUrls: ['./funcionario-formulario.component.css']
})
export class FuncionarioFormularioComponent {

  constructor(
    private funcionarioService: FuncionarioService,
    private logService: LogService
  )  { }

  adicionar(nome: string) {
    this.logService.log(`Adicionando ${nome}`);
    this.funcionarioService.adicionar(nome);
  }

}
