import {Component, ViewContainerRef} from '@angular/core';
import {GlobalService} from "../service/global-service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    _viewContainerRef: ViewContainerRef;

    constructor(private _globalService: GlobalService, private viewContainerRef: ViewContainerRef) {
        this._viewContainerRef = this._globalService.rootViewContainerRef = this.viewContainerRef
    }
}
