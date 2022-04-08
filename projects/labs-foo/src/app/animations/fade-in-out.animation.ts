import {animate, state, style, transition, trigger} from '@angular/animations';

export const FadeInOutAnimationFactory = (name = 'fadeInOut') => {
  return trigger(name, [
    state('*', style({opacity: 1})),
    state('void', style({opacity: 0})),
    transition('void <=> *', [animate('.3s ease')]),
  ])
}
