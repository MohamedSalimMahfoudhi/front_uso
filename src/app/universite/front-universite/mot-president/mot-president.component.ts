import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mot-president',
  templateUrl: './mot-president.component.html',
  styleUrls: ['./mot-president.component.css']
})
export class MotPresidentComponent implements OnInit {
  banner : any = {		
    pagetitle: "Mot du president",
    bg_image: "assets/images/banner/bnr5.jpg",
    title: "Mot du president",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
