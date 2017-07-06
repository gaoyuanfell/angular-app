import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    @Input() title: string;
    @Input() rightBack: any;
    @Input() rightExtras = {};
    @Input() leftBack: any;
    @Input() leftExtras = {};
    @Input() leftIcon: string;
    @Input() leftText: string;
    @Output() leftIconBack = new EventEmitter<any>();
    @Input() rightIcon: string;
    @Input() rightText: string;
    @Output() rightIconBack = new EventEmitter<any>();

    goLeftBack() {
        if (this.leftBack === -1) {
            window.history.go(-1);
        } else {
            this._router.navigate(this.leftBack, this.leftExtras)
        }
    }

    goRightBack() {
        if (this.rightBack === -1) {
            window.history.go(-1);
        } else {
            this._router.navigate(this.rightBack, this.rightExtras)
        }
    }

    goRightIcon() {
        this.rightIconBack.emit();
    }

    goLeftIcon() {
        this.leftIconBack.emit();
    }

}
