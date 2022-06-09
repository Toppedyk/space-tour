import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/Models/Technology';
import { data } from 'src/app/starter-code/data';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  technology: Technology[] = data["technology"]
  activeTech: Technology = {
  name: "",
  images: {
    portrait: "",
    landscape: ""
  },
  description: ""
}

  constructor() { }

  ngOnInit(): void {
    this.activeTech=this.technology[0]
  }

  changeActive(name: string) {
    var newTech = this.technology.filter(t => t.name == name)
    this.activeTech = newTech[0]
  }
}
