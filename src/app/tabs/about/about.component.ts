import {Component, OnInit} from '@angular/core';
import {fadeIn} from "../../basic/animations/fade-in";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.less'],
    animations: [fadeIn],
    host: {
        '[@fadeIn]': ''
    }
})
export class AboutComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
