import {Component, OnInit} from '@angular/core';
import {fadeIn} from "../../basic/animations/fade-in";

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.less'],
    animations: [fadeIn],
    host: {
        '[@fadeIn]': ''
    }
})
export class ArticleComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    isSearch:boolean = false;

    search(e:KeyboardEvent){
        console.info(e);
    }
}
