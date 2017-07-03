import {Component, OnInit} from '@angular/core';
import {zoomInOut} from "../basic/animations/zoom-in-out";
import {GlobalService} from "../../service/global-service";
import {Router} from "@angular/router";
import compressImg from "../../compress-img";

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

    constructor(private _router: Router, private _globalService: GlobalService) {
        this.cacheFile = this._globalService.getCache('file');
        if (!this.cacheFile) {
            this._router.navigate(['/!/index']);
            return;
        }
        let file = _globalService.getSession('file');
        this.blobUrl = file.blobUrl;
        this.width = file.width;
        this.height = file.height;
        console.info(file)
    }

    ngOnInit() {
    }

    cacheFile;
    blobUrl;
    width;
    height;
    config:any

    rightIconBack() {
        compressImg(this.cacheFile,{
            w:this.config.width,
            h:this.config.height,
        }).then((res) => {
            console.info(res);
            console.info(URL.createObjectURL(res));
        })
        // this._router.navigate(['/create-detail'])
    }

    imgChange(e:any){
        console.info(e)
        this.config = e
    }
}
