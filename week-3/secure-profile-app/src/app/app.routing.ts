/**
 * Title: app.routing.ts
 * Author: William Austin
 * Date: 26 August 2023
 * Description: App Routing module
 */

import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./signin/signin.component";

export const AppRoutes: Routes = [
    {
        path: '',
        component: SigninComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
]