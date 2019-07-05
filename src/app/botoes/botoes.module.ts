import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoGrandeComponent } from './botao-grande/botao-grande.component';

@NgModule({
  imports: [
    CommonModule // Pra subModulos
  ],
  declarations: [BotaoGrandeComponent],
  exports: [BotaoGrandeComponent]  // Para outros Módulos usar o component
})
export class BotoesModule { }
