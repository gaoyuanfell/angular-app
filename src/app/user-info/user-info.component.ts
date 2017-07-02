import {Component, OnInit} from '@angular/core';
import {zoomInOut} from "../basic/animations/zoom-in-out";
import {fadeIn} from "../basic/animations/fade-in";

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.less'],
    animations:[zoomInOut,fadeIn],
    host:{
        '[@zoomInOut]':'',
    }
})
export class UserInfoComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    display:boolean = false

}
