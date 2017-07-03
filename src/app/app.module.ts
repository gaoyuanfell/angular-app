import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './basic/components/header/header.component';
import {IndexComponent} from './tabs/index/index.component';
import {TabbarComponent} from './basic/components/tabbar/tabbar.component';
import {TabsComponent} from './tabs/tabs.component';
import {UserComponent} from './tabs/user/user.component';
import {AboutComponent} from './tabs/about/about.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserInfoComponent} from './user-info/user-info.component';
import {ArticleComponent} from './tabs/article/article.component';
import {CompressImgComponent} from './basic/components/compress-img/compress-img.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {GlobalService} from "../service/global-service";
import {httpInterceptor} from "../providers/Interceptor";
import {ApiService} from "../service/api-service";
import {CreateStyleComponent} from './create-style/create-style.component';
import {CreateDetailComponent} from './create-detail/create-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        IndexComponent,
        TabbarComponent,
        TabsComponent,
        UserComponent,
        AboutComponent,
        UserInfoComponent,
        ArticleComponent,
        CompressImgComponent,
        CreateStyleComponent,
        CreateDetailComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        httpInterceptor,
        GlobalService,
        ApiService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
