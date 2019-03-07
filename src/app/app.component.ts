import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'primeiros-passos-angular';
  nome = 'Leandro Barros';
  idade = 12;

  getIdade(){
    return this.idade;
  }
}
