import {Component, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {FadeInOutAnimationFactory} from '../animations/fade-in-out.animation';
import {SlideInOutAnimationFactory} from '../animations/slide-in-out.animation';

@Component({
  selector: 'app-error-overlay',
  templateUrl: './error-overlay.component.html',
  styleUrls: ['./error-overlay.component.scss'],
  animations: [SlideInOutAnimationFactory('verticalSlideInOut', 'Y', '20%'), FadeInOutAnimationFactory()],
  host: {
    '[@verticalSlideInOut]': 'true',
    '[@fadeInOut]': 'true',
  }
})
export class ErrorOverlayComponent implements OnInit {
  control?: AbstractControl;

  constructor() {
  }

  ngOnInit(): void {
  }

  use(control: AbstractControl) {
    this.control = control;
  }
}
