import {Component, Input,OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'vehicle-detail',
    template: `
    <h1>Vehicle {{id}}</h1>
  `
})

export class VehicleComponent implements OnInit{

  id : Number;

  constructor(private route: ActivatedRoute){}

  ngOnInit() : void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.id = id;
    })
  }
}