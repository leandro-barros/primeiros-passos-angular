import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {
  nome = 'Leandro Barros';
  ultimoId = 0;
  adicionado = false;

  @Output() funcionarioAdicionado = new EventEmitter();
  

  adicionar(){
    this.adicionado = true;

    const funcionaro = {
      id : ++this.ultimoId,
      nome : this.nome
    };

    this.funcionarioAdicionado.emit(funcionaro);
  }
}
