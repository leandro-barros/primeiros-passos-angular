import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  // styleUrls: ['./funcionario-card.component.css']
  styles : [
    `.card-body{
        text-transform : uppercase;
        color : blue;
      }`,
      // `
      //   .card{     Pode colocar vários
      //     padding : 10px;
      //   }
      // `
  ]
})
export class FuncionarioCardComponent {

  @Input('funcionario') funcionario : any;

}
