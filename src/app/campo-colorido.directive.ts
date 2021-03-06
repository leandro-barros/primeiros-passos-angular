import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  // selector: '[input]' Caso queira colocar a diretiva personalizada em todos os inputs

  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @Input('appCampoColorido') cor = 'blue';

  // Usado para passar a property binding cor e a diretiva appCampoColorido no input sem o alias
  // @Input() cor = 'blue';

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus') colorir() {
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') descolorir() {
    this.corDeFundo = 'transparent';
  }
}
