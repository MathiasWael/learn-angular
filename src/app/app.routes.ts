import { Routes } from '@angular/router';
import { WEATHER_ROUTES } from './features/weather/weather.routes';
import { HOME_ROUTES } from './features/home/home.routes';

export const routes: Routes = [
    {
        path: 'home',
        children: HOME_ROUTES
    },
    {
        path: 'weather',
        children: WEATHER_ROUTES
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
