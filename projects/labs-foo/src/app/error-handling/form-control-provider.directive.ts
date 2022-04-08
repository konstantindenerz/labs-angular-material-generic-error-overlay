import {OverlayRef} from '@angular/cdk/overlay';
import {Directive, ElementRef, HostListener, OnInit, Optional} from '@angular/core';
import {AbstractControl, FormControlDirective, FormControlName} from '@angular/forms';
import {ErrorService} from './error.service';

@Directive({
  selector: '[formControlName], [formControl]'
})
export class FormControlProviderDirective implements OnInit {
  private overlayRef?: OverlayRef;
  private hasFocus = false;

  constructor(@Optional() private readonly formControlName: FormControlName,
              @Optional() private readonly formControlDirective: FormControlDirective,
              private readonly elementRef: ElementRef<HTMLElement>,
              private readonly errorService: ErrorService,) {
  }

  get control(): AbstractControl {
    return (this.formControlName || this.formControlDirective).control;
  }


  @HostListener('blur')
  blur(): void {
    this.hasFocus = false;
    this.hide();
  }

  private hide() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = undefined;
    }
  }

  @HostListener('focus')
  focus(): void {
    this.hasFocus = true;
    if (this.control.invalid && this.control.touched) {
      this.show();
    }
  }

  private show() {
    this.hide();
    this.overlayRef = this.errorService.handle(this.control, this.elementRef.nativeElement);
  }

  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      if(this.control.invalid && this.control.touched && this.hasFocus && !this.overlayRef){
        this.show();
      }else if(this.control.valid){
        this.hide();
      }
    })
  }
}
