import { Routes } from '@angular/router'
import { SignalsIntroComponent } from './pages/signals-intro/signals-intro.component'
import { ProductListComponent } from './pages/product-list/product-list.component'
import { ProductCardComponent } from './pages/product-card/product-card.component'

export const routes: Routes = [
    {
        path: 'signals',
        title: 'Signals Intro',
        component: SignalsIntroComponent //eagerly loaded
    },
    {
        path: 'products',
        title: 'Products',
        component: ProductListComponent
    },
    {
        path: 'products/:productId',
        title: 'Details',
        component: ProductCardComponent

    },
    {
        path: 'profile',
        title: 'Profile Options',
        loadComponent: () => import('@app/pages/profile/profile.component').then(m => m.ProfileComponent) //lazily loaded
    },

]
