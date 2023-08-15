import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation-initiale',
  templateUrl: './formation-initiale.component.html',
  styleUrls: ['./formation-initiale.component.css']
})
export class FormationInitialeComponent implements OnInit {
  banner: any = {
    pagetitle: "Enseignants",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Enseignants",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
