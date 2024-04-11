import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';
import { News1Component } from './news1/news1.component'



export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home',component:HomeComponent,title: 'News'},
    {path:'travel',component:TravelComponent,title: 'Travel'},
    {path:'news1',component:News1Component,title: 'News1'}
];