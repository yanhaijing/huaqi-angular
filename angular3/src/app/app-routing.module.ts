import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiComponent } from './di/di.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'di', component: DiComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
