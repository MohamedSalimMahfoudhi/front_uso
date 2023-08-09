import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit {
  banner : any = {
		
    pagetitle: "Enseignants",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Enseignants",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
