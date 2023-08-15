import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accompagnement-ecoute',
  templateUrl: './accompagnement-ecoute.component.html',
  styleUrls: ['./accompagnement-ecoute.component.css']
})
export class AccompagnementEcouteComponent implements OnInit {
  banner : any = {
		
    pagetitle: "Accompagnement & Ecoute",
    bg_image: "assets/images/banner/bnr5.jpg",
    title: "Accompagnement & Ecoute",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
