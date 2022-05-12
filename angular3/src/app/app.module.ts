import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiComponent } from './di/di.component';
import { S2Service } from './service/s2.service';

@NgModule({
  declarations: [
    AppComponent,
    DiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [S2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
