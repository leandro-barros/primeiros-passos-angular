import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

class Cliente{
  nome : string;
  email:string;
  profissao:string;
}

@Component({
  selector: 'app-formularios-validacao',
  templateUrl: './formularios-validacao.component.html',
  styleUrls: ['./formularios-validacao.component.css']
})
export class FormulariosValidacaoComponent {

  cliente = new Cliente();
  profissoes = ['Programador', 'Empresário', 'Outra'];

  salvar(form: NgForm) {
    // this.cliente.nome = form.value.nome;
    // this.cliente.email = form.value.email;
    // this.cliente.profissao = form.value.profissao;

    console.log(form); 
    // console.log(this.cliente);
  }

}
