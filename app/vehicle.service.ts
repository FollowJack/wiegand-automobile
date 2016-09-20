import { Injectable } from '@angular/core';

import { Http, Response} from '@angular/http';

import {Observable } from 'rxjs/Observable';

import { Car } from './car';

@Injectable()
export class VehicleService {

    constructor(private http: Http){}

    private mobileUrl = 'https://services.mobile.de/search-api/search?customerId=473777'
    private userName = 'dlr_wiegandau';
    private password = 'NudBkVYI31HK';

    getVehicles() : Promise<Car[]>{
        return Promise.resolve(CARS);
    } 
    
} 
