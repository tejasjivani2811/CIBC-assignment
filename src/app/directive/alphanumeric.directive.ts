import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAlphanumeric]'
})
export class AlphanumericDirective {

  regexStr = '^[a-zA-Z0-9 ]*$';
  @Input() isAlphaNumeric!: boolean;

  constructor(private el: ElementRef) { }


  @HostListener('keypress', ['$event']) onKeyPress(event: { key: string; }) {
    return new RegExp(this.regexStr).test(event.key);
  }

  @HostListener('paste', ['$event']) blockPaste(event: ClipboardEvent) {
    this.validateFields(event);
  }

  validateFields(event: ClipboardEvent) {
    setTimeout(() => {

      this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^A-Za-z ]/g, '').replace(/\s/g, '');
      event.preventDefault();

    }, 100)
  }
}
