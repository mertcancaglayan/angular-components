import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomfor]',
  standalone: true,
})
export class CustomforDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() set appCustomfor(value: string[]) {
    for (let index = 0; index < value.length; index++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        index: index,
      });
    }
  }
}
