import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PipeComponent } from './pipe/pipe.component';
import { ReversePipe } from './pipe/revese.pipe';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { TrackbyComponent } from './trackby/trackby.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { TemplateComponent } from './template/template.component';
import { CmpInputComponent } from './cmp-input/cmp-input.component';
import { Cmp1Component } from './cmp-input/cmp1/cmp1.component';
import { StyleComponent } from './style/style.component';
import { StyleClassComponent } from './style-class/style-class.component';
import { StyleCmp1Component } from './style-class/style-cmp1/style-cmp1.component';
import { NativeDomComponent } from './native-dom/native-dom.component';
import { NativeDom1Component } from './native-dom/native-dom1/native-dom1.component';
import { NativeDom2Component } from './native-dom/native-dom2/native-dom2.component';
import { NativeDom3Component } from './native-dom/native-dom3/native-dom3.component';
import { CommunicateComponent } from './communicate/communicate.component';
import { Communicate1Component } from './communicate/communicate1/communicate1.component';
import { HocComponent } from './hoc/hoc.component';
import { HocCardComponent } from './hoc/hoc-card/hoc-card.component';
import { HocCard2Component } from './hoc/hoc-card2/hoc-card2.component';
import { HocCard3Component } from './hoc/hoc-card3/hoc-card3.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LifecycleComponent,
    InterpolationComponent,
    PipeComponent,
    ReversePipe,
    NgifComponent,
    NgforComponent,
    TrackbyComponent,
    NgswitchComponent,
    TemplateComponent,
    CmpInputComponent,
    Cmp1Component,
    StyleComponent,
    StyleClassComponent,
    StyleCmp1Component,
    NativeDomComponent,
    NativeDom1Component,
    NativeDom2Component,
    NativeDom3Component,
    CommunicateComponent,
    Communicate1Component,
    HocComponent,
    HocCardComponent,
    HocCard2Component,
    HocCard3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
