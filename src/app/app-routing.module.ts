import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HargoulComponent} from './hargoul/hargoul.component';
import {ReactiveformComponent} from './reactiveform/reactiveform.component';
import {ModelDrivenFormComponent} from './model-driven-form/model-driven-form.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

import {HomeComponent} from './home/home.component';
import {AboutusComponent} from './aboutus/aboutus.component';


const routes: Routes = [
  {path: '' , redirectTo: '/product' , pathMatch: 'full' },
  {path: 'home' , component: HomeComponent } ,
  {path: 'product' , component: HargoulComponent } ,
  {path: 'reactiveform' , component: ReactiveformComponent },
  {path: 'about' , component: AboutusComponent },

  {path: '**' , component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
