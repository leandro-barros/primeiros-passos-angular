import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
  // selector: '[input]' Caso queira colocar a diretiva personalizada em todos os inputs
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('focus') aoGanharFoco() {
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color', 'yellow');
  }

  @HostListener('blur') aoPerdeFocus() {
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color', 'transparent');
  }
}
