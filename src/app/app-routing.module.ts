import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from "./tabs/index/index.component";
import {TabsComponent} from "./tabs/tabs.component";
import {AboutComponent} from "./tabs/about/about.component";
import {UserComponent} from "./tabs/user/user.component";
import {UserInfoComponent} from "./user-info/user-info.component";
import {ArticleComponent} from "./tabs/article/article.component";

const routes: Routes = [
    {
        path: '!',
        component: TabsComponent,
        children: [
            {
                path: 'index',
                component: IndexComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'article',
                component: ArticleComponent
            },
            {
                path: 'user',
                component: UserComponent
            }
        ]
    },
    {
        path: 'user-info',
        component: UserInfoComponent
    },
    {
        path: '',
        redirectTo: '/!',
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{useHash:true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
