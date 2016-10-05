import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from './app.routing';

import { Logger } from "angular2-logger/core";
import {ERROR_LOGGER_PROVIDERS} from "angular2-logger/core";
import {WARN_LOGGER_PROVIDERS} from "angular2-logger/core";
import {INFO_LOGGER_PROVIDERS} from "angular2-logger/core";
import {DEBUG_LOGGER_PROVIDERS} from "angular2-logger/core";
import {LOG_LOGGER_PROVIDERS} from "angular2-logger/core";

import {VehicleService} from './vehicles/vehicle.service';
import {MapperService} from './shared/mapper.service';

import {AppComponent} from './app.component';
import {VehicleSliderComponent} from './vehicle.slider.component';
import {VehicleViewComponent } from './vehicle.view.component';
import {VehicleComponent} from './vehicle.component';

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, routing],
    declarations: [AppComponent,
        VehicleSliderComponent, 
        VehicleViewComponent, 
        VehicleComponent],
    providers: [Logger, 
        VehicleService,
        MapperService,
        ERROR_LOGGER_PROVIDERS,
        WARN_LOGGER_PROVIDERS,
        INFO_LOGGER_PROVIDERS,
        DEBUG_LOGGER_PROVIDERS,
        LOG_LOGGER_PROVIDERS
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }