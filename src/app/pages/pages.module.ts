import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

// Routes
import { PAGES_ROUTES } from './pages.routes';

// Modules
import { SharedModule } from "../shared/shared.module";

// Ng2 Charts
import { ChartsModule } from 'ng2-charts';

// Components
import { PagesComponent } from "./pages.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { GraphComponent } from "./graph/graph.component";
import { IncrementComponent } from "../components/increment/increment.component";
import { GraphDonaComponent } from '../components/graph-dona/graph-dona.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        GraphComponent,
        IncrementComponent,
        GraphDonaComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        GraphComponent,
        IncrementComponent,
        GraphDonaComponent
    ],
    imports: [
        PAGES_ROUTES,
        SharedModule,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModule {} 