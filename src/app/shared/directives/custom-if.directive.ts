import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf( condition: boolean){
    if(condition){
      this.viewContainer.createEmbeddedView(this.tr);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor( 
    private tr: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
    ) {
    console.log(`custom`);
  }

}
