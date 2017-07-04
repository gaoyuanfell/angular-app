import {Component, OnInit} from '@angular/core';
import {zoomInOut} from "../basic/animations/zoom-in-out";
import {Router} from "@angular/router";
import {GlobalService} from "../../service/global-service";

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.less'],
    animations: [zoomInOut],
    host: {
        '[@zoomInOut]': '',
    }
})
export class UserInfoComponent implements OnInit {

    constructor(private _router: Router) {

    }

    ngOnInit() {
    }

}
