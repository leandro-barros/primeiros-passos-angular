import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  nome = 'Leandro Barros';
  ultimoId = 0;
  adicionado = false;
  funcionarios = [];

  adicionar(){
    this.adicionado = true;
    this.funcionarios.push({
      id : ++this.ultimoId,
      nome : this.nome
    });
  }

}
