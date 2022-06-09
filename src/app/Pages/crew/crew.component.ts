import { Component, OnInit } from '@angular/core';
import { Crew } from 'src/app/Models/Crew';
import { data } from 'src/app/starter-code/data';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css'],
})
export class CrewComponent implements OnInit {
  crew: Crew[] = data['crew'];
  activeCrew: Crew = {
  name: "",
  images: {
    png: "",
    webp: "",
  },
  role: "",
  bio: ""
  }

  constructor() {}

  ngOnInit(): void {
    this.activeCrew = this.crew[0];
  }

  changeCrew(name:string) {
    var newCrew = this.crew.filter(c => c.name == name)
    this.activeCrew = newCrew[0];
  }
}
