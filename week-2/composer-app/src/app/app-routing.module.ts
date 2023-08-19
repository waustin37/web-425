/**
 * Title: app.routing-module.ts
 * Author: William Austin
 * Date: 19 August 2023
 * Description: Routing Module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'',
    component: ComposerListComponent
  },
  {
    path:'composerList',
    component: ComposerListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
