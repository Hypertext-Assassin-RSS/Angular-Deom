import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoComponent } from './demo/demo.component';
import { DataComponent } from './data/data.component';
import {TestService} from "./test.service";
import {ReactiveFormsModule} from "@angular/forms";
import { FormComponent } from './form/form.component';
import { FormGroupComponent } from './form-group/form-group.component';



@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DataComponent,
    routingComponents,
    FormComponent,
    FormGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
