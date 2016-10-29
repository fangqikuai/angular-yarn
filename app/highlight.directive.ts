import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({selector:'[highlight]'})
export class HighlightDirective{

    constructor(renderer : Renderer, elmref : ElementRef){
        renderer.setElementStyle(elmref.nativeElement,'background','gold');
    }

}