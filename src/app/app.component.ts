import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  funcionarios = [];

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
