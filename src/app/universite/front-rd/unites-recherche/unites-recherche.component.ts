import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unites-recherche',
  templateUrl: './unites-recherche.component.html',
  styleUrls: ['./unites-recherche.component.css']
})
export class UnitesRechercheComponent implements OnInit {
  banner : any = {		
    pagetitle: "Unités de Recherche",
    bg_image: "assets/images/banner/bnr1.jpg",
    title: "Unités de Recherche",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
