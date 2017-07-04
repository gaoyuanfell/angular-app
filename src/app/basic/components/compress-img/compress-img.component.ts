import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges, ViewChild} from '@angular/core';
import {fadeIn} from "../../animations/fade-in";

@Component({
    selector: 'app-compress-img',
    templateUrl: './compress-img.component.html',
    styleUrls: ['./compress-img.component.less'],
    animations:[fadeIn]
})
export class CompressImgComponent implements OnInit {
    constructor() {
    }

    private _isEnlarge: boolean = false;
    set isEnlarge(val){
        this._isEnlarge = val;
    }
    get isEnlarge(){
        return this._isEnlarge;
    }
    private isRotate: 0 | 1 | 2 | 3 = 0;

    @ViewChild('imgWatch') imgWatch: ElementRef;

    @Input('blobUrl') blobUrl: string;
    @Input('width') width: number = 0;
    @Input('height') height: number = 0;
    @Output() change = new EventEmitter<any>();

    ngOnInit(): void {
        this.imgWatch.nativeElement.style.backgroundImage = `url(${this.blobUrl})`;
        this.enlarge();
    }

    enlarge() {
        this.isEnlarge = !this.isEnlarge;
        this.imgWatch.nativeElement.style.left = '0%';
        this.imgWatch.nativeElement.style.top = '0%';
        let width = this.width;
        let height = this.height;
        let a = width / height;
        if (a >= 1) {
            if (this.isEnlarge) {
                this.imgWatch.nativeElement.style.height = `100%`;
                this.imgWatch.nativeElement.style.left = `-${Math.abs((100 - 100 * a) / 2)}%`;
                this.imgWatch.nativeElement.style.width = `${100 * a}%`;
            } else {
                this.imgWatch.nativeElement.style.width = '100%';
                this.imgWatch.nativeElement.style.top = `${Math.abs((100 / a - 100) / 2)}%`;
                this.imgWatch.nativeElement.style.height = `${100 / a}%`;
            }
        } else {
            if (!this.isEnlarge) {
                this.imgWatch.nativeElement.style.width = `80%`;
                this.imgWatch.nativeElement.style.height = `${80 / a}%`;
                this.imgWatch.nativeElement.style.top = `-${Math.abs((100 - 80 / a) / 2)}%`;
                this.imgWatch.nativeElement.style.left = `10%`;
            } else {
                this.imgWatch.nativeElement.style.width = '100%';
                this.imgWatch.nativeElement.style.top = `-${Math.abs((100 / a - 100) / 2)}%`;
                this.imgWatch.nativeElement.style.height = `${100 / a}%`;
            }
        }
        this.emitChange()
    }

    emitChange(){
        let width;
        let height;
        let a = this.width / this.height;
        if(this.isEnlarge){
            width = 1080;
            height = 1080;
        }else if (a > 1){
            width = 1080;
            height = 1080 / a;
        }else{
            width = 720;
            height = 900
        }

        let top = +this.imgWatch.nativeElement.style.top.replace(/%/,'') * height * .01;
        let left = +this.imgWatch.nativeElement.style.left.replace(/%/,'') * width * .01;
        let isEnlarge = this.isEnlarge;
        let isRotate = this.isRotate;
        let config = {height,width,top,left,isEnlarge,isRotate};
        this.change.emit(config);
    }

    rotate() {
        let rotate;
        if (this.isRotate == 3) {
            rotate = `rotate(360deg) rotate(0deg)`
        } else {
            rotate = `rotate(${(this.isRotate + 1) * 90}deg)`
        }
        this.imgWatch.nativeElement.style.transform = rotate;
        ++this.isRotate;
        if (this.isRotate > 3) this.isRotate = 0;
        this.emitChange()
    }
}
