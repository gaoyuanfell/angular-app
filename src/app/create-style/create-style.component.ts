import {Component, OnDestroy, OnInit} from '@angular/core';
import {zoomInOut} from "../basic/animations/zoom-in-out";
import {GlobalService} from "../../service/global-service";
import {Router} from "@angular/router";
import {compressImg, imgOption} from "../../compress-img";

@Component({
    selector: 'app-create-style',
    templateUrl: './create-style.component.html',
    styleUrls: ['./create-style.component.less'],
    animations: [zoomInOut],
    host: {
        '[@zoomInOut]': '',
    }
})
export class CreateStyleComponent implements OnInit,OnDestroy {
    ngOnDestroy(): void {
        URL.revokeObjectURL(this.blobUrl);
    }

    constructor(private _router: Router, private _globalService: GlobalService) {
        this._cacheFile = this._globalService.getCache('file-blob');
        if (!this._cacheFile) {
            this._router.navigate(['/!/index']);
            return;
        }
        let file = _globalService.getCache('file-url');
        this.blobUrl = file.blobUrl;
        this.width = file.width;
        this.height = file.height;
    }

    ngOnInit() {

    }

    private _cacheFile: any;
    private _fileConfig: any;
    blobUrl;
    width;
    height;

    rightIconBack() {
        compressImg(this._cacheFile, {
            w: this._fileConfig.width,
            h: this._fileConfig.height,
            type: this._cacheFile.type,
            quality: 1 || 100 * 1024 * 1024 / this._cacheFile.size,
            rotate:this._fileConfig.isRotate,
        }).then((blob) => {
            this._globalService.setCache('file-blob', blob);
            imgOption(blob).then( img => {
                this._globalService.setCache('file-url', {
                    blobUrl: img.src,
                    height: img.height,
                    width: img.width
                });
                this._router.navigate(['/create-detail'],{replaceUrl:true})
            } );
        })
    }

    imgChange(e: any) {
        this._fileConfig = e;
    }
}
