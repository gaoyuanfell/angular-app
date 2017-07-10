import {Component, OnInit} from '@angular/core';
import {fadeIn} from "../../basic/animations/fade-in";
import {imgOption} from "../../../compress-img";
import {GlobalService} from "../../../service/global-service";
import {Router} from "@angular/router";

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

    constructor(private _globalService: GlobalService, private _router: Router) {
    }

    ngOnInit() {

    }

    imgs: string[] = ['assets/img/1.jpg', 'assets/img/5.jpg', 'assets/img/6.jpg', 'assets/img/7.jpg']

    fileChange(file){
        let blob = file.files[0];
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
