import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao-grande',
  templateUrl: './botao-grande.component.html',
  styleUrls: ['./botao-grande.component.css']
})
export class BotaoGrandeComponent implements OnInit {

  @Input() label : string; //Permite passar como parâmetro no BotaoGrandeComponent

  constructor() { }

  ngOnInit() {
  }

}
