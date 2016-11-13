import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Components
 */
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SampleFormComponent } from './components/sample-form/sample-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: DashboardComponent },
  { path: 'sampleForm',  component: SampleFormComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}