import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmpInputComponent } from './cmp-input/cmp-input.component';
import { CommunicateComponent } from './communicate/communicate.component';
import { HelloComponent } from './hello/hello.component';
import { HocComponent } from './hoc/hoc.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { NativeDomComponent } from './native-dom/native-dom.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { PipeComponent } from './pipe/pipe.component';
import { StyleClassComponent } from './style-class/style-class.component';
import { StyleComponent } from './style/style.component';
import { TemplateComponent } from './template/template.component';
import { TrackbyComponent } from './trackby/trackby.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'hello', component: HelloComponent },
      { path: 'lifecycle', component: LifecycleComponent },
      { path: 'interpolation', component: InterpolationComponent },
      { path: 'pipe', component: PipeComponent },
      { path: 'ngif', component: NgifComponent },
      { path: 'ngfor', component: NgforComponent },
      { path: 'trackby', component: TrackbyComponent },
      { path: 'ngswitch', component: NgswitchComponent },
      { path: 'template', component: TemplateComponent },
      { path: 'cmp-input', component: CmpInputComponent },
      { path: 'style', component: StyleComponent },
      { path: 'style-class', component: StyleClassComponent },
      { path: 'native-dom', component: NativeDomComponent },
      { path: 'communicate', component: CommunicateComponent },
      { path: 'hoc', component: HocComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
