import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bourses-alternance',
  templateUrl: './bourses-alternance.component.html',
  styleUrls: ['./bourses-alternance.component.css']
})
export class BoursesAlternanceComponent implements OnInit {
  banner : any = {		
    pagetitle: "Bourses d'Alternance",
    bg_image: "assets/images/banner/bnr5.jpg",
    title: "Bourses d'Alternance",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
