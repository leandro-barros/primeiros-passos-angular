export class FuncionarioService {
  ultimoID = 1;
  funcionarios = [{id: 1, nome: 'Leandro'}];

  adicionar(nomeFuncionario: string) {
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

export class FuncionarioAbreviadoService extends FuncionarioService {

  constructor(private numeroCaracteres: number) {
    super();
  }

  adicionar(nome: string) {
    super.adicionar(nome.substr(0, this.numeroCaracteres) + '...');
  }
}
