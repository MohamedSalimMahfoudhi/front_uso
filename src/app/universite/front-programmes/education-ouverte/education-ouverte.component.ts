import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-ouverte',
  templateUrl: './education-ouverte.component.html',
  styleUrls: ['./education-ouverte.component.css']
})
export class EducationOuverteComponent implements OnInit {
  banner: any = {
    pagetitle: "Enseignants",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Enseignants",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
