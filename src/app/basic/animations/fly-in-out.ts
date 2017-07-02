/**
 * Created by moka on 2017/6/27 0027.
 */
import {trigger, style, transition, animate} from '@angular/animations';

export const flyInOut = trigger('flyInOut', [
    transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate(150, style({transform: 'translateX(0)'}))
    ]),
    transition('* => void', [
        style({transform: 'translateX(0)'}),
        animate(150, style({transform: 'translateX(100%)'}))
    ])
]);
