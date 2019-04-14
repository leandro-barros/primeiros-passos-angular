import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  nome = 'Leandro Barros';
  dataAniversario = new Date(1996, 2, 6);
  preco = 12855.32;
  troco = 0.57392;

}
