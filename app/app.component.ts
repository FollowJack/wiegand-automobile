import { Component } from '@angular/core';

import { Logo } from './logo';

import {VehicleSliderComponent} from './vehicle.slider.component'

@Component({
  selector: 'gabu-boss',
  templateUrl: 'app/app.component.html'
})

export class AppComponent { 

  logo: Logo = {
    logoTitlePrename : "Wiegand",
    logoTitleLastname : "Automobile"
  }


}
