import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './funcionario/funcionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  funcionarios = [];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.funcionarios = this.funcionarioService.consultar();
  }


  aoAdicionar(funcionario) {
    this.funcionarios.push(funcionario);
  }

  estiloPipes(modulo: any) {
    return {
      color: modulo === 'p' ? 'green' : 'blue',
      'margin-top.px': '123'
    };
  }
}
