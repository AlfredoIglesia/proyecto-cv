import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { GraficosComponent } from './graficos/graficos.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent ,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficos', component: GraficosComponent }
        ]
    }
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);