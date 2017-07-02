import {Component, OnInit} from '@angular/core';
import {fadeIn} from "../../basic/animations/fade-in";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.less'],
    animations: [fadeIn],
    host: {
        '[@fadeIn]': ''
    }
})
export class UserComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
