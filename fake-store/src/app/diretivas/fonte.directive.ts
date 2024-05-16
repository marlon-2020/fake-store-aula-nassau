import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[fonte]'
})
export class FonteDirective {
  constructor() { }

  @HostBinding('style.fontFamily') familia = 'arial'
  @HostBinding('style.fontSize') tamanho = '1.2rem'
  @HostBinding('style.transform') transforma = 'scale(1)'
  @HostListener('mouseover') aumentar(){
    this.transforma = 'scale(1.3)'
  }
  @HostListener('mouseleave') diminuir(){
    this.transforma = 'scale(1)'
  }
}
