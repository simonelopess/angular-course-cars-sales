import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './resources/services/auth-guard.service';

const routes: Routes = [{
  path: '', component: LoginComponent
},
{
  path: 'dashboard',
  canActivate: [AuthGuardService],
  loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)  //configuração lazyloading
  //lazy loading permite carregar component quando acessado
},
{
  path: '**', redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
