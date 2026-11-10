import { Routes } from '@angular/router';
import { ArchitecturePageComponent } from './components/architecture-page.component';
import { RoutingExampleComponent } from './components/routing-example.component';

export const routes: Routes = [
  { path: 'architecture', component: ArchitecturePageComponent },
  { path: 'routing-example', component: RoutingExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'architecture' },
  { path: '**', redirectTo: 'architecture' }
];
