import { trigger, state, style, transition,
  animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [
  trigger('slideInOut', [
    state('in', style({
        'width': '30%'
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
          'width': '30%'
        })),
    ]
    )])
])
]
export const SlideOutInAnimation = [
trigger('slideOutIn', [
  state('in', style({
      'width': '100%'
  })),
  state('out', style({
      'width': '70%'
  })),
  transition('in => out', [group([
      animate('400ms ease-in-out', style({
        'width': '70%'
      })),
  ]
  )]),
  transition('out => in', [group([
      animate('400ms ease-in-out', style({
        'width': '100%'
      })),
  ]
  )])
])
]