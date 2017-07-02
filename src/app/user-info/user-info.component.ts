import {Component, OnInit} from '@angular/core';
import {zoomInOut} from "../basic/animations/zoom-in-out";
import {fadeIn} from "../basic/animations/fade-in";
import {Router} from "@angular/router";

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.less'],
    animations: [zoomInOut, fadeIn],
    host: {
        '[@zoomInOut]': '',
    }
})
export class UserInfoComponent implements OnInit {

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    display: boolean = false;

    rightIconBack() {
        this._router.navigate(['/!/index'], {queryParams: {a: 1}})
    }

}
