import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bourses-internationales',
  templateUrl: './bourses-internationales.component.html',
  styleUrls: ['./bourses-internationales.component.css']
})
export class BoursesInternationalesComponent implements OnInit {
  banner : any = {		
    pagetitle: "Bourses Internationales",
    bg_image: "assets/images/banner/bnr5.jpg",
    title: "Bourses Internationales",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
