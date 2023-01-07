import { Routes } from "@angular/router";
import { HomeComponent } from "./estrutura/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ChefsComponent } from "./pages/chefs/chefs.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { MenuComponent } from "./pages/menu/menu.component";


export const rootRounterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'chefs', component: ChefsComponent },
    { path: 'contact-us', component: ContactComponent }
];