import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.css']
})
export class PersonnelsComponent implements OnInit {
  banner : any = {		
    pagetitle: "Personnels",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Personnels",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
