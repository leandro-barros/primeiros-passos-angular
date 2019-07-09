import { Component, OnInit } from '@angular/core';

import { FuncionarioService } from './../funcionario.service';

@Component({
  selector: 'app-funcionario-formulario',
  templateUrl: './funcionario-formulario.component.html',
  styleUrls: ['./funcionario-formulario.component.css']
})
export class FuncionarioFormularioComponent {

  constructor(
    private funcionarioService: FuncionarioService
  )  { }

  adicionar(nome: string) {
    this.funcionarioService.adicionar(nome);
  }

}
