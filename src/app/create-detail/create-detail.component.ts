import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GlobalService} from "../../service/global-service";
import {Router} from "@angular/router";
import {default as compressImg, readBlobAsDataURL} from "../../compress-img";

@Component({
    selector: 'app-create-detail',
    templateUrl: './create-detail.component.html',
    styleUrls: ['./create-detail.component.less']
})
export class CreateDetailComponent implements OnInit {

    constructor(private _router: Router, private _globalService: GlobalService) {
        this.cacheFile = this._globalService.getCache('file');
        if (!this.cacheFile) {
            this._router.navigate(['/!/index']);
            return;
        }
    }

    cacheFile;
    blobUrl;
    width;
    height;

    @ViewChild('cacheImg') cacheImg: ElementRef;
    @ViewChild('testImg') testImg: ElementRef;

    ngOnInit() {
        readBlobAsDataURL(this.cacheFile).then((data) => {
            this.cacheImg.nativeElement.src = data;
        });
        let file = this._globalService.getSession('file');
        this.blobUrl = file.blobUrl;
        this.width = file.width;
        this.height = file.height;
    }

    share(){
        compressImg(this.cacheFile,{w:720,h:960}).then((res) => {
            console.info(res);
            console.info(URL.createObjectURL(res));
            readBlobAsDataURL(res).then((data) => {
                this.testImg.nativeElement.src = data
            })
        })
    }

}
