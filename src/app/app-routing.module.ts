import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'map', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule), canActivate: [AuthGuard] },
  { path: 'balance', loadChildren: () => import('./pages/balance/balance.module').then(m => m.BalancePageModule), canActivate: [AuthGuard] },
  { path: 'courier', loadChildren: () => import('./pages/courier/courier.module').then(m => m.CourierPageModule), canActivate: [AuthGuard] },
  { path: 'order/:id', loadChildren: () => import('./pages/order/order.module').then(m => m.OrderPageModule), pathMatch: 'full' },
  { path: 'map', loadChildren: () => import('./pages/map/map.module').then(m => m.MapPageModule), canActivate: [AuthGuard] },
  { path: 'schedule', loadChildren: () => import('./pages/schedule/schedule.module').then(m => m.SchedulePageModule) },
  { path: 'settings', redirectTo: 'about' },
  { path: 'draw', loadChildren: () => import('./pages/draw/draw.module').then(m => m.DrawPageModule) },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule)
  },
  { path: 'test', loadChildren: () => import('./pages/test/test.module').then(m => m.TestPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
