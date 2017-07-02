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
        ArticleComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
