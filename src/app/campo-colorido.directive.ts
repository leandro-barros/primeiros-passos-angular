import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
  // selector: '[input]' Caso queira colocar a diretiva personalizada em todos os inputs
})
export class CampoColoridoDirective {
  
  // O valor da váriavel corDeFundo vai ser atribuida a propriedade background de estilos, fazendo um binding, vinculando.
  @HostBinding('style.backgroundColor') corDeFundo : string;

  
  // A parte comentada faz a mesma coisa;

  // constructor(
  //   private elementRef: ElementRef,
  //   private renderer: Renderer2
  // ) { }


  @HostListener('focus') aoGanharFoco() {
    this.corDeFundo = 'yellow';
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //   'background-color', 'yellow');
  }
  
  @HostListener('blur') aoPerdeFocus() {
    this.corDeFundo = 'transparent';
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //   'background-color', 'transparent');
  }
}
