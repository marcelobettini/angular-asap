import { Routes } from '@angular/router'
import { Home } from './pages/home/home'

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
        loadComponent: () => import('./pages/form-types/form-types').then(c => c.FormTypes)
    },
    {
        path: 'form-validation',
        loadComponent: () => import('./pages/form-validation/form-validation').then(c => c.FormValidation)
    }
]