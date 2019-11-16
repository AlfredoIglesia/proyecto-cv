import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';


// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficosComponent } from './graficos/graficos.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../componentes/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../componentes/grafico-dona/grafico-dona.component';

@NgModule({
    declarations:[
        DashboardComponent,
        GraficosComponent,
        ProgressComponent,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        ChartsModule,
        PAGES_ROUTES
    ],
    exports: [
        DashboardComponent,
        GraficosComponent,
        ProgressComponent,
        IncrementadorComponent
    ]
})

export class PagesModule {}
