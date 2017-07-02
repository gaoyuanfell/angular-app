import {Component, OnInit} from '@angular/core';
import {fadeIn} from "../../basic/animations/fade-in";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.less'],
    animations: [fadeIn],
    host: {
        '[@fadeIn]': ''
    }
})
export class IndexComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
