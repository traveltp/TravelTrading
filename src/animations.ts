import { trigger, state, style, transition,
  animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [
  trigger('slideInOut', [
    state('in', style({
        'width': '29%'
    })),
    state('out', style({
        'width': '0px'
    })),
    transition('in => out', [group([
        animate('400ms ease-in-out', style({
          'width': '0px'
        })),
    ]
    )]),
    transition('out => in', [group([
        animate('400ms ease-in-out', style({
          'width': '29%'
        })),
    ]
    )])
])
]