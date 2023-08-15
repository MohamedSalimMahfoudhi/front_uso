import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projets-internationaux',
  templateUrl: './projets-internationaux.component.html',
  styleUrls: ['./projets-internationaux.component.css']
})
export class ProjetsInternationauxComponent implements OnInit {
  banner: any = {
    pagetitle: "Projets Internationaux",
    bg_image: "assets/images/banner/bnr2.jpg",
    title: "Projets Internationaux",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
