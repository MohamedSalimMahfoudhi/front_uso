import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-culture-sport',
  templateUrl: './culture-sport.component.html',
  styleUrls: ['./culture-sport.component.css']
})
export class CultureSportComponent implements OnInit {
  banner : any = {		
    pagetitle: "Culture & Sport",
    bg_image: "assets/images/banner/bnr5.jpg",
    title: "Culture & Sport",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
