import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../../../service/global-service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-tabbar',
    templateUrl: './tabbar.component.html',
    styleUrls: ['./tabbar.component.less']
})
export class TabbarComponent implements OnInit {

    constructor(private _globalService:GlobalService,private _router:Router) {
    }

    ngOnInit() {
    }

    meta = ['image/gif','image/png','image/jpeg'];

    fileChange(file){
        let blob = file.files[0];
        if(!~this.meta.indexOf(blob.type)) return;//提示只能传图片
        let url = URL.createObjectURL(blob);
        let img = new Image();
        img.src = url;
        img.onload = () => {
            this._globalService.setSession('file',{
                blobUrl:url,
                height:img.height,
                width:img.width
            });
            this._router.navigate(['/create-style'])
        }
    }

}
