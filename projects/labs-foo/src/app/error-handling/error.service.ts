import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {Injectable} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {ErrorOverlayComponent} from '../error-overlay/error-overlay.component';

@Injectable({providedIn: 'root'})
export class ErrorService {

  constructor(private readonly overlay: Overlay,) {
  }

  handle(control: AbstractControl, element: HTMLElement): OverlayRef {
    const positionStrategy = this.overlay.position().flexibleConnectedTo(element)
      .withPositions([{overlayX: 'center', overlayY: 'bottom', originX: 'center', originY: 'top', offsetY: -24}])
    const overlayRef = this.overlay.create({positionStrategy: positionStrategy});
    const portal = new ComponentPortal(ErrorOverlayComponent);
    const componentRef = overlayRef.attach(portal);
    componentRef.instance.use(control);

    return overlayRef;
  }
}
