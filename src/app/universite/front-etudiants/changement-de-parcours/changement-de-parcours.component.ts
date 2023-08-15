import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changement-de-parcours',
  templateUrl: './changement-de-parcours.component.html',
  styleUrls: ['./changement-de-parcours.component.css']
})
export class ChangementDeParcoursComponent implements OnInit {
  banner : any = {		
    pagetitle: "Changement de Parcours",
    bg_image: "assets/images/banner/bnr5.jpg",
    title: "Changement de Parcours",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
