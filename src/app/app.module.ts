import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { PipesComponent } from './pipes/pipes.component';
import { FormulariosValidacaoComponent } from './formularios-validacao/formularios-validacao.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { LogService } from './log.service';
import { RequisicaoHTTPComponent } from './requisicao-http/requisicao-http.component';
import { CidadeService } from './cidade.service';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioFormComponent,
    CampoColoridoDirective,
    PipesComponent,
    FormulariosValidacaoComponent,
    RequisicaoHTTPComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NavegacaoModule,
    FuncionarioModule,
    HttpClientModule
  ],
  providers: [
    LogService,
    CidadeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
