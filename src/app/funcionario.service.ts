export class FuncionarioService {
  ultimoID = 1;
  funcionarios = [{id: 1, nome: 'Leandro'}];

  adicionar(nomeFuncionario) {
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
