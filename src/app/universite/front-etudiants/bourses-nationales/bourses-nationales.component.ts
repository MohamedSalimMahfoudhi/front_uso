import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bourses-nationales',
  templateUrl: './bourses-nationales.component.html',
  styleUrls: ['./bourses-nationales.component.css']
})
export class BoursesNationalesComponent implements OnInit {
  banner : any = {		
    pagetitle: "Bourses Nationales",
    bg_image: "assets/images/banner/bnr5.jpg",
    title: "Bourses Nationales",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
