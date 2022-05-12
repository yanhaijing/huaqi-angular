import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveFormComponent } from './reactive/reactive-form/reactive-form.component';
import { ReactiveForm2Component } from './reactive/reactive-form2/reactive-form2.component';
import { ReactiveForm3Component } from './reactive/reactive-form3/reactive-form3.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent,
    ReactiveFormComponent,
    ReactiveForm2Component,
    ReactiveForm3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
