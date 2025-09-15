import { Routes } from '@angular/router'
import { Home } from './home/home'

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'

    },
    {
        path: 'form-types',
        loadComponent: () => import('./form-types/form-types').then(c => c.FormTypes)
    },
    {
        path: 'form-validation',
        loadComponent: () => import('./form-validation/form-validation').then(c => c.FormValidation)
    }
]