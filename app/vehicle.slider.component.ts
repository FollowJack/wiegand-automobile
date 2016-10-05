import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable }     from 'rxjs/Observable';

import { VehicleService } from './vehicles/vehicle.service';
import { Vehicle } from './shared/vehicle.model';


@Component({
  selector: 'vehicle-slider',
  templateUrl: 'app/vehicle.slider.component.html'
})


export class VehicleSliderComponent implements OnInit {
  cars : any
  mode = 'Observable';

   constructor(
    private vehicleService: VehicleService) { }


  ngOnInit() : void{
    this.getCars();
  }

  
  getCars(): void {
    
    this.vehicleService.getVehicles();
  }


}
