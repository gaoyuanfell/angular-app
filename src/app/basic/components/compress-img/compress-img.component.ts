import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges, ViewChild} from '@angular/core';

@Component({
    selector: 'app-compress-img',
    templateUrl: './compress-img.component.html',
    styleUrls: ['./compress-img.component.less']
})
export class CompressImgComponent implements OnInit {
    constructor() {
    }

    private isEnlarge: boolean = false;
    private isRotate: 0 | 1 | 2 | 3 = 1;

    @ViewChild('imgWatch') imgWatch: ElementRef;

    @Input('blobUrl') blobUrl: string;
    @Input('width') width: number = 0;
    @Input('height') height: number = 0;
    @Output() change = new EventEmitter<any>();

    ngOnInit(): void {
        this.imgWatch.nativeElement.style.backgroundImage = `url(${this.blobUrl})`;
        this.initPhoto();
        this.emitChange()
    }

    enlarge() {
        this.isEnlarge = !this.isEnlarge;
        this.initPhoto();
        this.emitChange()
    }

    emitChange(){
        let width;
        let height;
        let a = this.width / this.height;
        if(!this.isEnlarge){
            width = 1080;
            height = 1080;
        }else if (a > 1){
            width = 1080;
            height = 1080 / a;
        }else{
            width = 720;
            height = 900
        }

        // let height = Math.abs(+this.imgWatch.nativeElement.style.height.replace(/%/,''));
        // let width = Math.abs(+this.imgWatch.nativeElement.style.width.replace(/%/,''));
        let top = +this.imgWatch.nativeElement.style.top.replace(/%/,'') * height * .01;
        let left = +this.imgWatch.nativeElement.style.left.replace(/%/,'') * width * .01;
        let isEnlarge = this.isEnlarge;
        let isRotate = this.isRotate;
        this.change.emit({height,width,top,left,isEnlarge,isRotate});
    }

    rotate() {
        ++this.isRotate;
        // this.width ^= this.height;
        // this.height ^= this.width;
        // this.width ^= this.height;
        // this.initPhoto();
        let rotate;
        if (this.isRotate == 1) {
            rotate = `rotate(360deg) rotate(0deg)`
        } else {
            rotate = `rotate(${this.isRotate * 90 - 90}deg)`
        }
        this.imgWatch.nativeElement.style.transform = rotate;
        if (this.isRotate >= 4) this.isRotate = 0;
        this.emitChange()
    }

    initPhoto() {
        this.imgWatch.nativeElement.style.left = '0%';
        this.imgWatch.nativeElement.style.top = '0%';
        // this.imgWatch.nativeElement.style.transform = `rotate(360deg) rotate(0deg)`;
        let width = this.width;
        let height = this.height;
        let a = width / height;
        console.info(a);
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
            if (this.isEnlarge) {
                this.imgWatch.nativeElement.style.height = `100%`;
                this.imgWatch.nativeElement.style.left = `${Math.abs((100 - 100 * a) / 2)}%`;
                this.imgWatch.nativeElement.style.width = `${100 * a}%`;
            } else {
                this.imgWatch.nativeElement.style.width = '100%';
                this.imgWatch.nativeElement.style.top = `-${Math.abs((100 / a - 100) / 2)}%`;
                this.imgWatch.nativeElement.style.height = `${100 / a}%`;
            }
        }
    }
}
