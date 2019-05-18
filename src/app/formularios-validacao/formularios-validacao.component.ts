import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formularios-validacao',
  templateUrl: './formularios-validacao.component.html',
  styleUrls: ['./formularios-validacao.component.css']
})
export class FormulariosValidacaoComponent {

  profissoes = ['Programador', 'Empresário', 'Outra'];
  profissao = 'Outra';

  salvar(form: NgForm) {
    console.log(this.profissao);
    console.log(form.value.profissao); 
  }

}
