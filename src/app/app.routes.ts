import { Routes } from '@angular/router';
import { AddDonorComponent } from './Components/add-donor/add-donor.component';
import { HomeComponent } from './Components/home/home.component';
import { DeleteDonorComponent } from './Components/delete-donor/delete-donor.component';
import { LoginComponent } from './Components/login/login.component';
import { AboutComponent } from './Components/about/about.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

export const routes: Routes = [
    {
        path: '',
        title: 'App Home Page',
        component: HomeComponent,
    },
    {
        path: 'login',
        title: 'App Login Page',
        component: LoginComponent,
    },

    {
        path: 'about',
        title: 'App About Page',
        component: AboutComponent,
    },
    {
        path: 'signup',
        title: 'App SignUp Page',
        component: SignUpComponent,
    },

    {
        path: 'contactus',
        title: 'App ContactUs Page',
        component: ContactusComponent,
    },

    {
        path: 'dashboard',
        title: 'DashBoard',
        component: DashboardComponent,
    },

    {
        path: 'navbar',
        title: 'DashBoard',
        component: NavbarComponent,
    }

];
