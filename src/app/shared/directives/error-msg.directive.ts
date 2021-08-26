import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  htmlElement: ElementRef<HTMLElement>;
  // @Input() color: string = 'red';
  private _color: string = 'red';
  private _message: string = 'This field is required';

  @Input() set message(value: string){
    this._message = value;
    this.setMessage();
  }

  @Input() set color( value: string) {
    this._color = value;
    this.htmlElement.nativeElement.style.color = this._color;
  }

  @Input() set valid( value: boolean) {
    if( !value ){
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  

  constructor(private el: ElementRef<HTMLElement>) {
    console.log(`constructor directive`, el);
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`changes`, changes);
    // const msg = changes.message.currentValue;
    // console.log(`msg`, msg);
    // this.htmlElement.nativeElement.textContent = msg;
  }


  ngOnInit(): void {
    console.log(`ngOnInit Directive`);
    this.setColor();
    this.setMessage();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMessage(): void {
    this.htmlElement.nativeElement.textContent = this._message;
  }
}
