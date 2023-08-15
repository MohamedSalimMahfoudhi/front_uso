import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laboratoires-recherche',
  templateUrl: './laboratoires-recherche.component.html',
  styleUrls: ['./laboratoires-recherche.component.css']
})
export class LaboratoiresRechercheComponent implements OnInit {
  banner : any = {		
    pagetitle: "Laboratoires de Recherche",
    bg_image: "assets/images/banner/bnr1.jpg",
    title: "Laboratoires de Recherche",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
