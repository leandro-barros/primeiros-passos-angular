import { Injectable } from '@angular/core';
import { LogService } from '../log.service';

@Injectable()
export class FuncionarioService {

  ultimoID = 1;
  funcionarios = [{ id: 1, nome: 'Leandro' }];

  constructor(private logService: LogService) { }

  adicionar(nomeFuncionario: string) {
    this.logService.log(`Adicionando nome ${nomeFuncionario}`);

    const funcionario = {
      id: ++this.ultimoID,
      nome: nomeFuncionario
    };

    this.funcionarios.push(funcionario);
    console.log(JSON.stringify(this.funcionarios));
  }

  consultar() {
    return this.funcionarios;
  }
}

