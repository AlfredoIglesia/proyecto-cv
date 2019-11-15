import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { AsideComponent } from '../shared/aside/aside.component';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';




@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        AsideComponent,
        BreadcrumbsComponent,
        PagenotfoundComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        AsideComponent,
        BreadcrumbsComponent,
        PagenotfoundComponent
    ]
})

export class  SharedModule {}

