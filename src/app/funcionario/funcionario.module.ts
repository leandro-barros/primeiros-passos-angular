import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioFormularioComponent } from './funcionario-formulario/funcionario-formulario.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioService } from './funcionario.service';

@NgModule({
  declarations: [
    FuncionarioFormularioComponent,
    FuncionarioCardComponent
  ],
  exports: [
    FuncionarioFormularioComponent,
    FuncionarioCardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    FuncionarioService
  ]
})
export class FuncionarioModule { }
