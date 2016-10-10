import { Injectable } from '@angular/core';

import { Http, Headers, Response} from '@angular/http';

import {Observable } from 'rxjs/Observable';
import { Logger } from "angular2-logger/core";

import { MapperService } from './../shared/mapper.service';
import { Vehicle } from './../shared/vehicle.model';


@Injectable()
export class VehicleService {


    constructor(private http: Http,
        private _logger: Logger,
        private _mapService: MapperService) {
        this._logger.debug('VehicleService - constructor - initialized');
    }

    private mobileUrl = 'http://localhost:9000/vehicles';

    getVehicles(): any {
        return this.http.get(this.mobileUrl)
            .map((res: any) => {
                this._logger.debug('VehicleService - getVehicles - map response: ' + res);
                var json = this._mapService.mapResponseToJson(res);
                return json;
            }).subscribe(
            data => {
                this._logger.debug('VehicleService - getVehicles - subcribe success data: ' + data);
                this._mapService.mapVehicles(data);
                console.log(data)
            },
            err => {
                this._logger.error('VehicleService - getVehicles - subcribe error data: ' + err);
                console.error(err)
            });
    }

} 
