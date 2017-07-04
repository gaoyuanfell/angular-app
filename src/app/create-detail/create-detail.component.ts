import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GlobalService} from "../../service/global-service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-create-detail',
    templateUrl: './create-detail.component.html',
    styleUrls: ['./create-detail.component.less']
})
export class CreateDetailComponent implements OnInit,OnDestroy{
    ngOnDestroy(): void {
        if(this.cacheUrl){
            URL.revokeObjectURL(this.cacheUrl.blobUrl);
        }
    }

    constructor(private _router: Router, private _globalService: GlobalService) {
        this.cacheFile = this._globalService.getCache('file-blob');
        this.cacheUrl = this._globalService.getCache('file-url');
        if (!this.cacheFile || !this.cacheUrl) {
            this._router.navigate(['/!/index']);
            return;
        }
    }

    cacheFile;
    cacheUrl;

    @ViewChild('cacheImg') cacheImg: ElementRef;
    @ViewChild('testImg') testImg: ElementRef;

    ngOnInit() {
        this.cacheImg.nativeElement.src = this.cacheUrl.blobUrl
    }

    share(){
        this.testImg.nativeElement.src = this.cacheUrl.blobUrl
    }
}
