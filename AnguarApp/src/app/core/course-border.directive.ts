import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[appCourseBorder]'
})
export class CourseBorderDirective {

    @Input() set date(date: Date) {
        const dateNow = new Date();
        const datePrevious = new Date();
        datePrevious.setDate(dateNow.getDate() - 14);
        if (date > dateNow) {
            this.renderer.setStyle(this.el.nativeElement, 'border-width', '5px');
            this.renderer.setStyle(this.el.nativeElement, 'border-style', 'solid');
            this.renderer.setStyle(this.el.nativeElement, 'border-color', 'blue');
        } else {
            if (date > datePrevious) {
                this.renderer.setStyle(this.el.nativeElement, 'border-width', '5px');
                this.renderer.setStyle(this.el.nativeElement, 'border-style', 'solid');
                this.renderer.setStyle(this.el.nativeElement, 'border-color', 'green');
            } else {
                this.renderer.setStyle(this.el.nativeElement, 'border-width', '0px');
            }
        }

    }

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }
}
