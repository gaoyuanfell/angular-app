import {Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild} from '@angular/core';

@Component({
    selector: 'app-compress-img',
    templateUrl: './compress-img.component.html',
    styleUrls: ['./compress-img.component.less']
})
export class CompressImgComponent implements OnInit{
    constructor() {
    }

    private isEnlarge: boolean = false;
    private isRotate: 0 | 1 | 2 | 3 = 1;

    @ViewChild('imgWatch') imgWatch: ElementRef;

    @Input('blobUrl') blobUrl: string;
    @Input('width') width: number = 0;
    @Input('height') height: number = 0;

    ngOnInit(): void {
        this.imgWatch.nativeElement.style.backgroundImage = `url(${this.blobUrl})`;
        this.initPhoto();
    }

    enlarge() {
        this.isEnlarge = !this.isEnlarge;
        this.initPhoto();
    }

    rotate() {
        ++this.isRotate;
        let rotate;
        if (this.isRotate == 1) {
            rotate = `rotate(360deg) rotate(0deg)`
        } else {
            rotate = `rotate(${this.isRotate * 90 - 90}deg)`
        }
        this.imgWatch.nativeElement.style.transform = rotate;
        if (this.isRotate >= 4) this.isRotate = 0;
    }

    initPhoto() {
        this.imgWatch.nativeElement.style.left = '0';
        this.imgWatch.nativeElement.style.top = '0';
        this.imgWatch.nativeElement.style.transform = `rotate(360deg) rotate(0deg)`;
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
