import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardComponent } from './guard/guard.component';
import { HelloComponent } from './hello/hello.component';
import { NestComponent } from './nest/nest.component';
import { Page404Component } from './page404/page404.component';
import { YourGuardGuard } from './your-guard.guard';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  {
    path: 'nest',
    component: NestComponent,
    children: [
      {
        path: 'hello',
        component: HelloComponent,
      },
    ],
  },
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  {
    path: 'module-b',
    loadChildren: () =>
      import('./module-b/module-b.module').then((m) => m.ModuleBModule),
  },
  { path: 'guard', component: GuardComponent, canActivate: [YourGuardGuard] },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
