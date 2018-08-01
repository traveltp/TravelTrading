import {
  trigger,
  state,
  style,
  transition,
  animate,
  group,
  query,
  stagger,
  keyframes
} from "@angular/animations";

export const SlideInOutAnimation = [
  trigger("slideInOut", [
    state(
      "in",
      style({
        width: "30%"
      })
    ),
    state(
      "out",
      style({
        width: "0px"
      })
    ),
    transition("in => out", [
      group([
        animate(
          "400ms ease-in-out",
          style({
            width: "0px"
          })
        )
      ])
    ]),
    transition("out => in", [
      group([
        animate(
          "400ms ease-in-out",
          style({
            width: "30%"
          })
        )
      ])
    ])
  ])
];

export const SlideOutInAnimation = [
  trigger("slideOutIn", [
    state(
      "in",
      style({
        width: "100%"
      })
    ),
    state(
      "out",
      style({
        width: "70%"
      })
    ),
    transition("in => out", [
      group([
        animate(
          "400ms ease-in-out",
          style({
            width: "70%"
          })
        )
      ])
    ]),
    transition("out => in", [
      group([
        animate(
          "400ms ease-in-out",
          style({
            width: "100%"
          })
        )
      ])
    ])
  ])
];

export const SlideOutInMinAnimation = [
  trigger("slideOutInMin", [
    state(
      "in",
      style({
        width: "96%"
      })
    ),
    state(
      "out",
      style({
        width: "66%"
      })
    ),
    transition("in => out", [
      group([
        animate(
          "400ms ease-in-out",
          style({
            width: "66%"
          })
        )
      ])
    ]),
    transition("out => in", [
      group([
        animate(
          "400ms ease-in-out",
          style({
            width: "96%"
          })
        )
      ])
    ])
  ])
];
export const FilterSlideOutAnimation = [
  trigger("filterSlideOut", [
    state(
      "in",
      style({
        top: "-99px"
      })
    ),
    state(
      "out",
      style({
        top: "0"
      })
    ),
    transition("in => out", [
      group([
        animate(
          "400ms ease-in-out",
          style({
            top: "0"
          })
        )
      ])
    ]),
    transition("out => in", [
      group([
        animate(
          "400ms ease-in-out",
          style({
            top: "-99px"
          })
        )
      ])
    ])
  ])
];
