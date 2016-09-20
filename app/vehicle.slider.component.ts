import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable }     from 'rxjs/Observable';

import { VehicleService } from './vehicle.service';
import { Car } from './car';


@Component({
  selector: 'vehicle-slider',
  templateUrl: 'app/vehicle.slider.component.html'
})


export class VehicleSliderComponent implements OnInit {
  cars : Car[];
  mode = 'Observable';

   constructor(
    private vehicleService: VehicleService) { }


  ngOnInit() : void{
    this.getCars();
  }

  
  getCars(): void {
    this.vehicleService.getVehicles()
    .subscribe(cars => this.cars = cars,
    error => console.log(<any)error);
  }


}
