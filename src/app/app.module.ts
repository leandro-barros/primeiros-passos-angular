import { LogService } from './log.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { PipesComponent } from './pipes/pipes.component';
import { FormulariosValidacaoComponent } from './formularios-validacao/formularios-validacao.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { FuncionarioFormularioComponent } from './funcionario-formulario/funcionario-formulario.component';
import { FuncionarioService, FuncionarioAbreviadoService } from './funcionario.service';

// Caso queira instanciar a classe FuncionarioAbreviadoService que é filha de Funcionario
const criarFuncionarioService = () => {
  return new FuncionarioAbreviadoService(2);
}

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    CampoColoridoDirective,
    PipesComponent,
    FormulariosValidacaoComponent,
    FuncionarioFormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NavegacaoModule
  ],
  providers: [
    FuncionarioService,
    LogService
    // { provide: 'LogPrefixo', useValue: 'LOG' }
    // { provide: FuncionarioService, useFactory: criarFuncionarioService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
