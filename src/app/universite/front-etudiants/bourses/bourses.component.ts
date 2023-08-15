import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bourses',
  templateUrl: './bourses.component.html',
  styleUrls: ['./bourses.component.css']
})
export class BoursesComponent implements OnInit {
  banner : any = {		
    pagetitle: "Bourses",
    bg_image: "assets/images/banner/bnr5.jpg",
    title: "Bourses",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
