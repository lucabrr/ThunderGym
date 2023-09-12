import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardGuard } from './guards/dashboard.guard';
import { ClientPageComponent } from './pages/client-page/client-page.component';


const routes: Routes = [
  {
  path: '',
  component: LoginPageComponent,
  pathMatch: 'full',
  },
  {
  path:"dashboard",
  component: DashboardPageComponent,
  canActivate: [DashboardGuard]
  },
  {
    path:"client",
    component: ClientPageComponent,
    canActivate: [DashboardGuard]

    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
