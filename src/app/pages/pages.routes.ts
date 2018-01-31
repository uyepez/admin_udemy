import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const pagesRoutes: Routes = [
  { path: '',
  component: PagesComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
    { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar' } },
    { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
    { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
    { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
    { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de Tema' } },
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
  ]
  }
];

export const pages_routing = RouterModule.forChild(pagesRoutes);
