import {animate, state, style, transition, trigger} from '@angular/animations';

export const SlideInOutAnimationFactory = (name = 'verticalSlideInOut', direction: 'X' | 'Y' = 'Y', distance = '-100%') => {
  return trigger(name, [
    state('*', style({transform: `translate${direction}(0)`})),
    state('void', style({transform: `translate${direction}(${distance})`})),
    transition('void <=> *', [animate('.3s ease')]),
  ])
}
