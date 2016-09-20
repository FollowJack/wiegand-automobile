import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from './app.routing';

import {VehicleService} from './vehicle.service';

import {AppComponent} from './app.component';
import {VehicleSliderComponent} from './vehicle.slider.component';
import {VehicleViewComponent } from './vehicle.view.component';
import {VehicleComponent} from './vehicle.component';

@NgModule({
    imports: [BrowserModule, HttpModule,JsonpModule, routing],
    declarations: [AppComponent,
        VehicleSliderComponent, VehicleViewComponent, VehicleComponent],
    providers: [VehicleService],
    bootstrap: [AppComponent]
})
export class AppModule { }