import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoComponent } from './demo/demo.component';
import { DataComponent } from './data/data.component';
import {TestService} from "./test.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormComponent } from './form/form.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { TdfComponent } from './tdf/tdf.component';




@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DataComponent,
    routingComponents,
    FormComponent,
    FormGroupComponent,
    TdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
