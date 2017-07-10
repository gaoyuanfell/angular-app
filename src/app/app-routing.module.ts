import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from "./tabs/index/index.component";
import {TabsComponent} from "./tabs/tabs.component";
import {AboutComponent} from "./tabs/about/about.component";
import {UserComponent} from "./tabs/user/user.component";
import {UserInfoComponent} from "./user-info/user-info.component";
import {ArticleComponent} from "./tabs/article/article.component";
import {CreateStyleComponent} from "./create-style/create-style.component";
import {CreateDetailComponent} from "./create-detail/create-detail.component";

const routes: Routes = [
    {
        path: '!',
        component: TabsComponent,
        children: [
            {
                path: 'index',
                component: IndexComponent,
                data: {}
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
            },
            {
                path: 'user/:id',
                component: UserComponent
            },
            {
                path: '',
                redirectTo: '/!/index',
                pathMatch: 'full',
            }
        ]
    },
    {
        path: 'user-info',
        component: UserInfoComponent
    },
    {
        path: 'create-style',
        component: CreateStyleComponent
    },
    {
        path: 'create-detail',
        component: CreateDetailComponent
    },
    {
        path: '',
        redirectTo: '/!/index',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
