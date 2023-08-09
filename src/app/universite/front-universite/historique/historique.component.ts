import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  banner : any = {		
    pagetitle: "Historique",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Historique",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
