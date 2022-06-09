import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/Models/Destination';
import { data } from 'src/app/starter-code/data';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
})
export class DestinationComponent implements OnInit {
  destinations: Destination[] = data['destinations'];
  activeDestination: Destination = {
    name: '',
    images: {
      png: '',
      webp: '',
    },
    description:
      '',
    distance: '',
    travel: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.activeDestination = this.destinations[0]
  }

  changeActive(name:string) {
    var newDestination = this.destinations.filter(d => d.name == name)
    this.activeDestination = newDestination[0];
  }
}
