import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        loadChildren: () =>
        import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
    {
        path: 'common',
        loadChildren: () =>
        import('./common-screens/common-screens.module').then((m) => m.CommonScreensModule),
    },
    {
        path: 'auth',
        loadChildren: () =>
        import('./auth/auth.module').then((m) => m.AuthModule),
    },
    // fallback route
    { path: '**', redirectTo: 'common/not-found' },     
];
