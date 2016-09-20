import {Routes, RouterModule} from '@angular/router';

import {VehicleSliderComponent} from './vehicle.slider.component';
import {VehicleComponent} from './vehicle.component';


const appRoutes: Routes = [
    {
        path: 'vehicles',
        component: VehicleSliderComponent
    },
    {
        path: 'vehicle/:id',
        component: VehicleComponent
    }, {
        path: '',
        redirectTo: '/vehicles',
        pathMatch: 'full'
    },
];

export const routing = RouterModule.forRoot(appRoutes);