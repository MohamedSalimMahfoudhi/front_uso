import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css']
})
export class LocalisationComponent implements OnInit {
  banner : any = {		
    pagetitle: "Localisation",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Localisation",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
