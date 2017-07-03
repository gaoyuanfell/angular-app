import {Component, OnInit} from '@angular/core';
import {zoomInOut} from "../basic/animations/zoom-in-out";
import {GlobalService} from "../../service/global-service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-create-style',
    templateUrl: './create-style.component.html',
    styleUrls: ['./create-style.component.less'],
    animations: [zoomInOut],
    host: {
        '[@zoomInOut]': '',
    }
})
export class CreateStyleComponent implements OnInit {

    constructor(private _router: Router,private _globalService:GlobalService) {
        let file = _globalService.getSession('file');
        this.blobUrl = file.blobUrl;
        this.width = file.width;
        this.height = file.height;
        console.info(file)
    }

    ngOnInit() {
    }

    blobUrl;
    width;
    height;

    rightIconBack() {
        this._router.navigate(['/create-detail'])
    }
}
