import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {
        path: 'tabs',
        component: HomePage,
        children: [
            {
                path: 'colegio', children: [
                    {
                        path: '',
                        loadChildren: '../pages/colegio/colegio.module#ColegioPageModule'
                    }
                ]
            },
            {
                path: 'siremu', children: [
                    {
                        path: '',
                        loadChildren: '../pages/siremu/siremu.module#SiremuPageModule'
                    }
                ]
            },
            {
                path: 'eba', children: [
                    {
                        path: '',
                        loadChildren: '../pages/eba/eba.module#EbaPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'colegio',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/colegio',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {  }

