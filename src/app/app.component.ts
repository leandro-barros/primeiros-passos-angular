import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nome = 'Leandro Barros';

  adicionar(nome : string){
    this.nome = nome;
  }

  alterar(event : any){
    this.nome = event.value;
  }
}
