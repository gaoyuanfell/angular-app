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

    constructor(private _router: Router, private _globalService: GlobalService) {
        let file = _globalService.getSession('file')
        this.blobUrl = file.blobUrl;
        this.width = file.width;
        this.height = file.height;
    }

    blobUrl;
    width;
    height;

    ngOnInit() {
    }

    display: boolean = false;
}
