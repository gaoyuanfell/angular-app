import {trigger, style, transition, animate, state} from '@angular/animations';

export const zoomInOut = trigger('zoomInOut', [
    state('*', style({
        position: 'absolute',
        display: 'block',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 30,
        transformOrigin: '50% 50%',
        boxShadow: '1px 1px 15px #3e3e3e'
    })),
    transition("void => *", [
        style({
            opacity: 0,
            transform: 'scale3d(.85, .85, .85)'
        }),
        animate(150, style({
            opacity: 1,
            transform: 'scale3d(1, 1, 1)'
        }))
    ]),
    transition("* => void", [
        style({
            opacity: 1,
            transform: 'scale3d(1, 1, 1)'
        }),
        animate(150, style({
            opacity: 0,
            transform: 'scale3d(.85, .85, .85)'
        }))
    ])
]);
