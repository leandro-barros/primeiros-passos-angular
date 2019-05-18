import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formularios-validacao',
  templateUrl: './formularios-validacao.component.html',
  styleUrls: ['./formularios-validacao.component.css']
})
export class FormulariosValidacaoComponent {

  profissoes = ['Programador', 'Empresário', 'Outras'];

  salvar(form: NgForm) {
    console.log(form);
    console.log(form.value.nome); // Consegue pegar qualquer valor do formulário
  }

}
