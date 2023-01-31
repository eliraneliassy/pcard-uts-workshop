import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[pcardUtsWorkshopChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
  }

}
