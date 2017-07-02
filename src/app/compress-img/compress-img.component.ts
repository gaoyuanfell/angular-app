import {Component, ElementRef, Input, OnChanges, Renderer2, SimpleChanges, ViewChild} from '@angular/core';

@Component({
    selector: 'app-compress-img',
    templateUrl: './compress-img.component.html',
    styleUrls: ['./compress-img.component.less']
})
export class CompressImgComponent implements OnChanges {

    constructor(private _renderer: Renderer2) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.file && changes.file.firstChange) {
            this._renderer.listen(changes.file.currentValue, 'change', this.fileChange.bind(this))
        }
    }

    private isEnlarge: boolean = false;
    private isRotate: 0 | 1 | 2 | 3 = 1;

    @Input('file') file: ElementRef;
    @ViewChild('imgWatch') imgWatch: ElementRef;

    @Input('blobUrl') blobUrl:string;
    @Input('width') width:number = 0;
    @Input('height') height:number = 0;

    enlarge() {
        if (this.isEnlarge) {
            this.imgWatch.nativeElement.style.height = '80%'
        } else {
            this.imgWatch.nativeElement.style.height = '100%'
        }
        this.isEnlarge = !this.isEnlarge;
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

    fileChange(e: any) {
        let b = e.target.files[0];
        console.info(b);
        let url = URL.createObjectURL(b);
        console.info(url);
        this.imgWatch.nativeElement.style.backgroundImage = `url(${url})`;
    }
}
