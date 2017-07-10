import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../../../service/global-service";
import {Router} from "@angular/router";
import {imgOption} from "../../../../compress-img";

@Component({
    selector: 'app-tabbar',
    templateUrl: './tabbar.component.html',
    styleUrls: ['./tabbar.component.less']
})
export class TabbarComponent implements OnInit {

    constructor(private _globalService: GlobalService, private _router: Router) {
    }

    ngOnInit() {
    }

    meta = ['image/gif', 'image/png', 'image/jpeg'];

    fileChange(file) {
        let blob = file.files[0];
        if (!~this.meta.indexOf(blob.type)) return;//提示只能传图片

        imgOption(blob).then( (data) => {
            this._globalService.setCache('file-url', {
                blobUrl: data.src,
                height: data.height,
                width: data.width
            });
            this._globalService.setCache('file-blob', blob);
            this._router.navigate(['/create-style'])
        } )
    }

}
