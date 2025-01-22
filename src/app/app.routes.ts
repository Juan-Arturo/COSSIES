import { Routes } from '@angular/router';
import { PanelComponent } from './main/panel/panel.component';
import { HomeComponent } from './main/panel/home/home.component';
import { ContactComponent } from './main/panel/contact/contact.component';
import { AboutComponent } from './main/panel/about/about.component';

export const routes: Routes = [
    { path: "", redirectTo: "panel", pathMatch: "full" },

    //Panel principal
  {
    path: "panel",
    component: PanelComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" }, 
      { path: "home", component: HomeComponent }, 
      { path: "contact", component: ContactComponent }, 
      { path: "APOD", component: AboutComponent }, 
      { path: "**", redirectTo: "home" }, 
    ],
  },

    {path: "**", component: PanelComponent},

];
