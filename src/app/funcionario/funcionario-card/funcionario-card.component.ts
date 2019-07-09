import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  // styleUrls: ['./funcionario-card.component.css']
  styles: [
    `.card-body{
        text-transform : uppercase;
        color : white;
      }`,
    // `
    //   .card{     Pode colocar vários
    //     padding : 10px;
    //   }
    // `
  ]
})
export class FuncionarioCardComponent {

  @Input('funcionario') funcionario: any;

  getEstilosCartao() {
    return {
      'border-width.px': this.funcionario.id,
      backgroundColor: this.funcionario.id % 2 === 0 ? 'lightgreen' : 'lightblue'
    }
  }

  getClassCss() {
    return ['badge', 'badge-primary'];
  }

  isAdmin(){
    return this.funcionario.nome.startsWith('T');
  }

}
