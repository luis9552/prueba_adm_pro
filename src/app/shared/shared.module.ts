import { NgModule } from '@angular/core';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';




@NgModule({
    declarations: [

        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ],

    exports: [

        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent

    ]

})

export class SharedModule { }
