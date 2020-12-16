import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HargoulComponent } from './hargoul/hargoul.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { FormproductComponent } from './formproduct/formproduct.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    HargoulComponent,
    ProductComponent,
    FormproductComponent,
    ReactiveformComponent,
    ModelDrivenFormComponent,
    PagenotfoundComponent,

    HomeComponent,
    AboutusComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
