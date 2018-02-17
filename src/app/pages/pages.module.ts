import { NgModule } from "@angular/core";

// Routes
import { PAGES_ROUTES } from './pages.routes';

// Modules
import { SharedModule } from "../shared/shared.module";

// Components
import { PagesComponent } from "./pages.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { GraphComponent } from "./graph/graph.component";

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        GraphComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        GraphComponent
    ],
    imports: [
        PAGES_ROUTES,
        SharedModule
    ]
})
export class PagesModule {} 