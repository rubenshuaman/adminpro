import { RouterModule, Routes} from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraphComponent } from './pages/graph/graph.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
    { path: '', 
    component: PagesComponent,
    children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'progress', component: ProgressComponent },
        { path: 'graph', component: GraphComponent },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
    },
    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NotfoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true} );